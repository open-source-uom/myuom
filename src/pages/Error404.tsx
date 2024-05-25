/*
  MIT License

  Copyright (c) 2022 Open Source  UOM

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
import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { MouseEvent } from "react";
import i18n from "../i18n";

const Error404: React.FC = () => {
  const navigate = useNavigate();

  const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    navigate('/');
  };

  const handleButtonMouseOver = (e: MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.color = 'blue';
  };

  const handleButtonMouseOut = (e: MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.color = 'black';
  };

  return (
    <Box
      sx={{"text-align": "-webkit-center"}}
      marginTop="1em"
      fontFamily="Syne"
      fontSize={{ sm: 11.95, md: 16, lg: 26, xl: 32 }}
    >
      <Text fontSize={{ sm: 26, md: 30, lg: 34, xl: 38 }}>
        {i18n.t("error_404")}
        <br />
        {i18n.t("page_not_found")}
        <br />
        <br />
        <button
          onClick={handleButtonClick}
          style={{
            backgroundColor: "",
            color: "black",
            transition: "color 0.3s",
          }}
          onMouseOver={handleButtonMouseOver}
          onMouseOut={handleButtonMouseOut}
        >
          {i18n.t("go_to_homepage")}
        </button>
      </Text>
    </Box>
  );
};

export default Error404;

