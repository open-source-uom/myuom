import { useState } from "react";
import { useTranslation } from "react-i18next";
import firstYearGuidesMdData,{ Guides } from "../assets/data/FirstYearInfo";

export const useGuidesMdData = () => {
  const { i18n } = useTranslation();
  console.log("The language is: ", i18n.language);
  const [guideMd, setGuideMd] = useState<string>("");
  const fetchGuideByPath = (guidePath: string) => {
    console.log(guidePath);
    fetch(guidePath)
      .then((res) => res.text())
      .then((md) => {
        setGuideMd(md);
      })
      .catch((error) => {
        console.error("Error fetching guide:", error);
      });
  };

  const firstYearGuidesTranslated: Guides = firstYearGuidesMdData;
  if (!(i18n.language in firstYearGuidesTranslated)) {
    console.error(`No translation found for language '${i18n.language}'`);
    return { guideMd, firstYearGuidesTranslated, fetchGuideByPath, setGuideMd };
  }

  return { guideMd, firstYearGuidesTranslated, fetchGuideByPath, setGuideMd };
};
