import { useState } from "react";
import { useTranslation } from "react-i18next";
import firstYearGuidesMdData from "../assets/data/FirstYearInfo";


export const useGuidesMdData = () => {
    const { i18n } = useTranslation();
    console.log("The language is: ", i18n.language);
    const [guideMd, setGuideMd] = useState("");
    const FirstYearInfo = firstYearGuidesMdData[i18n.language];
    const handleButtonClick = (guidePath) => {
        console.log(guidePath)
        fetch(guidePath)
            .then((res) => res.text())
            .then((md) => {
                setGuideMd(md);
            });
    };

    return { guideMd, FirstYearInfo, handleButtonClick, setGuideMd }


};