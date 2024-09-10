# MyUoM Deployment Documentation

## Deployment Options

There are 2 main methods for deploying the MyUoM application to a web server:

1. **Manually via FTP**
2. **Automated with GitHub Actions**

---

## 1. Manual Deployment via FTP (Deprecated - Not used anymore)

To manually deploy MyUoM via cPanel, follow these steps:

1. **Log in to cPanel**:
   - Access cPanel with your account credentials.

2. **Select File Manager**:
   - In cPanel, locate the Files section and select "File Manager." \
     ![cPanel File Manager](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbV9Ir31txIZubJkKdW65MU380OBFJooGEAg&s)

3. **Choose the Folder**:
   - Navigate to the server folder where files should be uploaded. Typically, files should go into the `public_html` folder (as done in our production). \
     ![](https://support.getspace.ie/img/filemanager-sidebar.gif)

4. **Update the `.htaccess` File**:
   - Open the `.htaccess` file and replace its contents with the following code to handle URL redirection and PHP settings:

     ```apache
     <IfModule mod_rewrite.c>
       RewriteEngine On

       # Don't rewrite requests to index.html
       RewriteRule ^index\.html$ - [L]

       # Rewrite all other non-existent file or directory requests to index.html
       RewriteCond %{REQUEST_FILENAME} !-f
       RewriteCond %{REQUEST_FILENAME} !-d
       RewriteRule . /index.html [L]
     </IfModule>

     # php -- BEGIN cPanel-generated handler, do not edit
     # Set the “ea-php81” package as the default “PHP” programming language.
     <IfModule mime_module>
       AddHandler application/x-httpd-ea-php81 .php .php8 .phtml
     </IfModule>
     # php -- END cPanel-generated handler, do not edit
     ```

5. **Prepare Build Files**:
   - Navigate to the MyUoM application folder on your computer.

   - Run `npm run build` to create the application's build.

   - A `build` folder will be created containing the static version of the application with files to be uploaded to the server.

6. **Upload Files**:
   - Go back to the File Manager in cPanel, navigate to the desired folder (`public_html`), and select the Upload button. \
     ![](https://support.getspace.ie/img/upload-icon-filemanager.gif)
     
   - On the next page, you can drag and drop the application files. \
     ![](https://i.ytimg.com/vi/eEpaOaj-ewg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAhwyGQYCVi2NJHW5S8lZpr1VeVjA)

7. **Upload Files**:
   - Upload all contents of the `build` folder from your computer to the server (using the file manager from the previous step).

8. **Reconfigure `.htaccess` Settings**:
   - After uploading, ensure the `.htaccess` file is present. If not, repeat step 4.

9. **Complete Deployment**:
   - Wait a few moments for the changes to take effect.
   - Verify the deployment was successful by visiting your website.

---

## 2. Automated Upload with GitHub Actions (Currently in Use)

To automate the above process, we use GitHub Actions. Here’s what needs to be done:

1. **`.github/workflows/deploy-prod.yml` File**:
   - The `deploy-prod.yml` file defines a job that runs on every push to the `main` branch of the repository. This job handles building the application and uploading it to the [production server](https://my.uom.gr) via FTP.

2. **Key Steps of the Workflow**:
   - **Checkout Code**: The process starts by retrieving the latest code from the repository using `actions/checkout@v3`.
   - **Set Up Node.js**: The required Node.js version is installed for building the application using `actions/setup-node@v3`.
   - **Install Dependencies**: Project dependencies are installed with the command `npm install --legacy-peer-deps`.
   - **Build**: The application is built with the command `CI=false npm run build`.
   - **Upload to FTP Server**: The contents of the `build` folder are uploaded via FTP using [SamKirkland/FTP-Deploy-Action@v4.3.5](https://www.github.com/SamKirkland/FTP-Deploy-Action).

3. **Using the Workflow**:
   - **Code Updates**: Each time changes are pushed to the `main` branch, the workflow automatically handles building and uploading the application (the process uses hashing and checks if changes affect files to be uploaded. If a current build is identical to the content on the server, files are not uploaded).
   - **Monitoring**: You can monitor the deployment progress and any errors via the [Actions](https://github.com/open-source-uom/myuom/actions) tab.

5. **Example `deploy.yml`**
```yaml
name: Deploy to Production with FTP

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'  # Use the Node.js version you need

      - name: Install dependencies
        run: |
          npm install --legacy-peer-deps  # Added option to handle peer dependency issues

      - name: Build
        run: |
          CI=false npm run build

      - name: Upload to FTP server
        uses: SamKirkland/FTP-Deploy-Action@v4.3.5
        with:
          local-dir: build/
          server: ${{ secrets.FTP_SERVER }}
          username: ${{ secrets.FTP_USERNAME_PROD }}
          password: ${{ secrets.FTP_PASSWORD_PROD }}
          port: ${{ secrets.FTP_PORT }}  
          exclude: |
            docs/
            nginx/
            .github/
```
