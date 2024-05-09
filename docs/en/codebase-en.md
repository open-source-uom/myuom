# Code Documentation

This document is intended to facilitate reading the codebase of the MyUoM application and for people who would like to help by writing code or submitting bugs and pointing out problems.

### Contents:

- Project Libraries
- Application Architecture
- Folder Structure
- Quick Start Guide( start contributing )
- Coding Conventions
- Code Analysis
  - Contexts
  - Hooks

### Libraries project
Those decisions were made in the beginning of this project as being the simplest way to make a react app.

For the frontend we used [React.js](https://react.dev/learn) along with [Chakra UI](https://chakra-ui.com/) as a library for ready-made components and styling (it also provides various tools and some icons).

For the animations we also used the framer-motion library(dependency of Chakra UI which we needed additionally).

For routing the library [react router dom v6](https://reactrouter.com/en/v6.3.0/getting-started/overview) was utilized.
The application started using [create-react-app](https://create-react-app.dev/) for convenience(but will soon be changed to Vite.js, and typescript).

For some additional icons the libraries [react-icons](https://react-icons.github.io/react-icons/) and [react-social-icons](https://www.npmjs.com/package/react-social-icons) were also used.

### Run the code

For now because it's create-react-app, the commands needed are:
```
git clone https://github.com/Open-Source-UoM/MyUoM.git/
```

```
npm install
``` 

(puts the necessary libraries if node.js and npm are present otherwise they will need to be downloaded separately,make sure you are inside the correct folder when running this command)

```
npm start
``` 
Runs the application on [localhost:3000](http://localhost:3000), when the change to Vite.js is made it will be `npm run dev`

### Application Architecture

The basic structure of the application consists of src/App.js the src/pages/HomePage.jsx and src/assets/ConfigRoutes.js.
But how do these 3 files interact?

Basically in `App.js` there are the routes(urls) that render the respective components. Each page has `Header.jsx` and the home page is set to `src/pages/HomePage.jsx`. Now in `src/pages/HomePage.jsx` the tiles that the user clicks on are placed and is routed to the corresponding component based on the routes as defined in src/App.js. The ConfigRoutes.js file, however, is linked to the other 2 files (App.js and HomePage.jsx) to make it easier to add new tiles to the home page and avoid duplication.

But how does `src/pages/HomePage.jsx` know what tiles will be rendered?

In `src/assets/ConfigRoutes. js` has an array of objects defined which include a title(**title**) an svg icon(**iconSVG**), the corresponding route to which the user should be sent when clicking (to render the corresponding component, as described above) , a size(**span**) which is utilized to set the size of the tile, a logical value(**isExternal**) to show the user whether to stay in the application or be redirected to an external website (as indicated by the arrow in the upper right of the tile). Finally there is another logical value (**requireSelection**) which determines whether this tile requires a school to be selected(e.g. the course/exam schedule is different per school) and most importantly the corresponding url the user is sent to when they click(**route**). 

In addition there are helper fields if we want to hide something for maintenance and what location to put it in.

The tile referenced here is `src/components/MenuBox.jsx` which takes as props the object just analyzed from `src/assets/ConfigRoutes.js`.

In summary, `HomePage.jsx` renders several `MenuBox.jsx` based on the object array in `ConfigRoutes.js` which when clicked, the user is sent to the url of the corresponding object which renders the corresponding component based on the entry in `ConfigRoutes.js`.

### Folder structure

The way the application is structured in folders is quite straightforward and common in small react projects.
The `src/assets` folder contains static data (e.g. icons, links etc.) that we need in the application (such as text data, icons and translations).
The `src/components` folder contains react components used in various parts of the application, the folders here are made based on the page they are on.
The `src/contexts` folder contains the providers and contexts utilized by our application.
The `src/pages` folder contains the pages of the application.
The `src/hooks` folder contains the react hooks that provide functions and information to the components.
The `src/theme` folder contains anything related to theming(always based on chakra-ui) where we currently have defined the breakpoints we use in the application.

### Quick Start Guide

If you have a specific idea create a related issue in the repository team and then create a branch from the newest version of main in which you will write the necessary code to solve the issue. Commits should be titled fixes #{issue-number} and always include some relevant description. The code you have written should adhere to the coding conventions defined for this project.

### Coding Conventions

- We work with functional components in react. Exclusively!
- Camelcase all variables.
- Anything related to UI should be mobile responsive. The application has mobile devices as its primary target audience.
- Understandable and simple code in each deliverable, preferably not overly large files.
- No comments in the code, emphasize readability (descriptive names of variables, functions and constants instead of plain numbers and alphanumerics)
- If a function is quite algorithmic and is UI independent, it is good to write a corresponding unit test.
- Use code formatter, prettier in VSCode, with the original settings (any changes to them will be updated)

### Code analysis

**Contexts**: currently the application only utilizes a context to `src/contexts/departmentContext.jsx` which stores the university department selected by the user, which is used on specific pages.

**Hooks**: So far `src/hooks/useLocalStorage.js` has been created which takes as parameters the name of the value to be stored in localStorage and a default value if the value to be accessed from localStorage is not found.

**Pages**:
Generally someone exploring the application can easily see which file corresponds to which page by the file name. Below we will analyze the pages which have a higher level of difficulty.

> In some pages such as SchedulePage.jsx and Announcements.jsx we simply redirect to the corresponding page of the section selected by the user. If something similar needs to be implemented, these files can be used as a guide.
- **src/pages/MapPage.jsx**

The map consists of different buildings which each have different locations(usually offices). For each location there is an elevator(on the ground floor we show it) that takes you there, which we show to the user(because in the pamak the sections from the 2nd floor and above are not connected, you have to get off). There are images(urls) which we mark using the react-img-mapper library, which is why these x,y exist in the map data in the src/assets/data folder.
The map data due to its large volume needs further organization and generally the map is to be completely replaced by another application(an MVP was done in [This repo](https://gitlab.com/opensourceuom/nagiv-react)).
