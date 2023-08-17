import { useState } from "react";
import { useTranslation } from "react-i18next";
import firstYearGuidesMdData from "../assets/data/FirstYearInfo";


export const useGuidesMdData = () => {
    const { i18n } = useTranslation();
    console.log("The language is: ", i18n.language);
    const [guideMd, setGuideMd] = useState("");
    const firstYearGuidesTranslated = firstYearGuidesMdData[i18n.language];
    //markdown data for some reason are handled as fetchable links that explains
    //the code below, to see for yourself, import an md file and console.log it
    const fetchGuideByPath = (guidePath) => {
        console.log(guidePath)
        fetch(guidePath)
            .then((res) => res.text())
            .then((md) => {
                setGuideMd(md);
            });
    };

    return { guideMd, firstYearGuidesTranslated, fetchGuideByPath, setGuideMd }


};