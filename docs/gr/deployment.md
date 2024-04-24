**How to Deploy MyUoM to cPanel**

1. Access cPanel and log in with your credentials.

2. Navigate to File Manager and then to public_html.

3. Open the `.htaccess` file and copy the provided code (which redirects the static website to `index.html`):

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

4. Delete all existing content in the `.htaccess` file, including the default content.

5. Navigate to the MyUoM repository.

6. Run `npm run build` and copy the contents of the build folder.

7. Paste the copied files into the appropriate directories within the File Manager. Note: You may need to manually create folders and upload files according to cPanel's structure. Please refer to cPanel documentation for assistance.

8. Once all files are imported, create a new `.htaccess` file (if not already present) and paste the previously copied code.

9. Allow some time for the changes to take effect.

10. Your deployment should now be complete and ready to use.