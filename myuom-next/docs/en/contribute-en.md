# Contribute to MyUoM

> You can also contribute in ways that do not require advanced technical knowledge, if you are not yet familiar with the technologies used. That way when you want to do something more advanced you will have a good overview of MyUoM.
>
> Below is a list of things a person can do that are always useful for the application.

-   Report any bugs you encounter, recording them in a github issue
    or by talking to team members so that they can communicate it to people who can fix it.
-   Translate MyUoM into other languages(e.g. German,French) or fix existing translations. (Consult [translations.md](translations.md) for more details)
-   Suggest things you would like to see in the application that you think would be useful to several university students.
-   Make some implementable design (mobile compatible) that you think would make the app more beautiful and usable.
-   Suggest modifications that relate to the user experience while using the app (e.g. maybe in the menu it would be nice if the options were divided based on that)
-   Point out typos/grammatical errors/outdated information in this documentation.

> If none of this excites you, you can start by contacting members of the team to see if there is a need not listed above.
>
> Now for those who want to add something to the app having the appropriate technical knowledge of React and Chakra-UI(it's a component library it can be learned quickly), it would help them to read [codebase.md](codebase.md) for a start where there is more detail about the code written.

If one specifically wants to add a tile-feature to the application, the process to follow briefly is as follows:

(in a separate branch always)

1.  Create Component in src/pages
2.  Create an entry in src/assets/ConfigRoutes.js (more details in [codebase.md](codebase.md)
3.  Create a folder in src/components for the React Components that the page utilizes
4.  Any text that may need changing is best to go to the **src/assets/data** folder, and if it might be dynamic it would be best to extract a custom hook.

Before you do the merge request a checklist:

-   [ ] Is everything you have done mobile responsive, it looks good on mobile.
-   [ ] The themes of the app have been used, light and dark mode have been taken into account.
-   [ ] Everything has been translated into text(probably if help is needed, a reference to team members is enough to translate the contents of the branch,one can consult [translations.md](translations.md) for more details)
-   [ ] Any code written should be in the right place(e.g. custom icons in src/assets/icons, custom hooks in src/hooks etc.)
-   [ ] The code you deliver should be maintainable and not contain obvious errors (e.g. a component that has 1000 lines of code, or is not organized in folders etc etc.)
