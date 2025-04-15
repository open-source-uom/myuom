# Maintenance of the MyUoM Application

Due to the temporary absence(we are working on this) of automated ways to update the information contained in
the application, some data needs to be refreshed at certain intervals.

If you find anything that does not correspond to the actual information, either follow the
the instructions below or let us know by making an issue in the repository where you
describe what needs to be changed.

Any data that the application utilizes (such as the club schedule, links to exam and course schedules) is located in the src/assets/data folder and ideally should be accessed through hooks(to allow us in the future to easily implement a backend). To pass the changes make a different branch called update-{whatever is involved}(e.g.
update-exam-links)

> Update anything that is text-related because translations are being done, probably written in the format
> i18n.t("--text--").If something is related to this text you should look for it in **src/assets/data/locales** and change it from there (anything that changes in one language will probably need to be changed in the others).
> Below is a comprehensive list of what **must** be changed at some point in time.

-   [Every 3 months] Exam and course schedules (links) --> **src/assets/data/ScheduleLink.js**
-   [Every 3 months] Student Club Dining Program --> **src/assets/data/DailyMenu.js** (Probably need translations so restaurant.js in \_\_src/assets/locales/el and /en .)

Below is a list of what **occasionally** needs to be changed (i.e. whenever it comes up, we can't predict it)

-   Professor titles --> **src/assets/data/professors.js** (Attention: titles must be
    translated so they must be changed in that file based on the
    **src/assets/locales/el/academic_personel.js**.)
-   Schedules(Library,Club,Registries) --> **src/assets/data/Library.js,RestaurantSchedule.js**
-   Graduations(links) --> **src/assets/data/Graduation.js** (Based on departments as they appear in **src/assets/data/DepNames.js** (bso--> Balkan and Slavic Studies, ess--> European Studies
    , esp --> Educational&Social Policy, dai --> Applied Informatics, fin --> Accounting and Finance, msa --> Music, eco --> Economics, bas --> Business Administration)
