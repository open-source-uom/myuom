# Translating MyUoM

The library we use is [react-i18next](https://react.i18next.com/), in case of any difficulties there is extensive documentation.

The translation is basically done in json files, which are read from the library and based on the language the appropriate mapping is chosen.

### In a language that has not yet been added

The following steps must be taken:

-   Create the correct entry in the **src/i18n.js** file, you can consult the rest of how they have been done. The name of the entry should be named according to the [IETF BCP 47 language tag](https://en.wikipedia.org/wiki/IETF_language_tag#List_of_common_primary_language_subtags) standard.
    The entry should be of the form language: { translation: {
    ----matching text with translated text
    }
    } as shown in the file above
-   Then in the **src/assets/locales/** folder a folder should be created with the name of the language you entered above.
-   Now in this folder you need to create files which have the same names as the other languages, and with the same structure (export default { ---translation text matches--- }
-   Now the translation can start, here now all the mappings made in the other languages should be made in the one you started.
-   Finally the user should be given the possibility to change to this language. If you don't want to deal with code issues just mention it to team members so they can find a person to do it. Otherwise the language change is done in **src/components/settings/LanguagePicker.jsx**, following the way it is done for the other languages you can add your own.

### Fix errors in languages already added

To start with we need to find where this text is that needs correction. Based on its location within the application it will depend on where it will be in the translations. For example, if there is an error in the teachers the translation will most likely be in src/assets/locales/en/academic_personel.js, but it will need to be changed in all languages.

> If this is not possible, it is sufficient to report the error either to a github issue or even to our [discord](https://discord.gg/nzMJpRYxp6).
> If finding it turns out to be harder than expected it will take more effort by looking at the code(detailed documentation in [codebase.md](codebase.md)).

### Adding terms that have not yet been translated

Essentially you need to add the appropriate mappings to the translation files, and then change them in the data files in **src/assets/data** (rarely being within the code).
To start with, we need to find where the mapping will be placed depending on where the untranslated term was found. If it was found for example in restaurant data it should be added to **src/assets/locales/en-el-de/restaurant.js** and then added appropriately to **src/assets/data/DailyMenu.js**.
