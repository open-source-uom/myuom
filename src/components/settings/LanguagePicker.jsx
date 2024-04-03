/*
  MIT License

  Copyright (c) 2024 Open Source  UOM

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.

  Made by Open Source UoM (https://opensource.uom.gr)

  Project members:
    -Apostolidis
    -Davios
    -Iosifidis
    -Konstantinidis
    -Mpakalis
    -Nasis
    -Omiliades
    -Patsouras
    -Fakidis

*/
import { Flex, Box, useBreakpointValue } from "@chakra-ui/react";
import i18n from "../../i18n";

function GreekFlag({ onClick }) {
  const widthOfSvg = useBreakpointValue({ base: "32px", md: "54px" });
  return <Box onClick={onClick} overflow={"hidden"} width={widthOfSvg} height="auto" cursor={"pointer"}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 18"><path fill="#0D5EAF" d="M0 0h27v18H0z" /><path fill="none" strokeWidth="2" stroke="#FFF" d="M5 0v11M0 5h10m0-2h17M10 7h17M0 11h27M0 15h27" /></svg>
  </Box>
}

function UKFlag({ onClick }) {
  const widthOfSvg = useBreakpointValue({ base: "42px", md: "64px" });
  return <Box onClick={onClick} overflow={"hidden"} width={widthOfSvg} height="auto" cursor={"pointer"}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30"><clipPath id="a"><path d="M0 0v30h60V0z" /></clipPath><clipPath id="b"><path d="M30 15h30v15zv15H0zH0V0zV0h30z" /></clipPath><g clipPath="url(#a)"><path d="M0 0v30h60V0z" fill="#012169" /><path d="M0 0l60 30m0-30L0 30" stroke="#fff" strokeWidth="6" /><path d="M0 0l60 30m0-30L0 30" clipPath="url(#b)" stroke="#C8102E" strokeWidth="4" /><path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10" /><path d="M30 0v30M0 15h60" stroke="#C8102E" strokeWidth="6" /></g></svg>
  </Box>
}


function LanguagePicker() {
  const changeLanguage = (lng) => {
    console.log("Changing language to: ", lng)
    if (i18n.language === lng) {
      //can react somehow to this, user mistakenly clicked the same language
      return;
    };
    i18n.changeLanguage(lng);
    //in order to keep the language after refresh
    localStorage.setItem("preferred_language", lng);
    // It is needed to fetch the translated assets
    document.location.reload();
  }
  return (<Flex mb={"0.5rem"} justifyContent={"center"} alignItems={"center"} columnGap={"2rem"}>
    {i18n.t("change_language")}
    <GreekFlag onClick={() => changeLanguage("el")} />
    <UKFlag onClick={() => changeLanguage("en")} />
  </Flex>);
}

export default LanguagePicker;