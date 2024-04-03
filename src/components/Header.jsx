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

import { useEffect, useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import myUOMLogo from "../assets/myUOMLogo.png";
import { Flex, Box, Heading, Image, useColorModeValue } from "@chakra-ui/react";
import SettingsButton from "./settings/SettingsButton";
import { Categories } from "../assets/ConfigRoutes";
import { LeftArrowIcon } from "../assets/icons";
import HomeIcon from "../assets/icons/HomeIcon";
import i18n from "../i18n";
function RouteDictionary(route) {
  if (route === "/") return i18n.t("initial_page");
  else {
    for (let i = 0; i < Categories.length; i++) {
      if (Categories[i].route === route) return Categories[i].title;
    }
  }
}

export default function Header() {
  const navigate = useNavigate();
  const loc = useLocation();
  const [currentName, setCurrentName] = useState(RouteDictionary(loc.pathname));
  useEffect(() => {
    setCurrentName(RouteDictionary(`${loc.pathname}`));
  }, [loc]);

  const goToHomePage = () => {
    navigate("/");
  };

  return (
    <>
      <Flex
        bgColor={useColorModeValue("#f3f3f3", "black")}
        position={{ sm: "relative", lg: "sticky" }}
        direction="row"
        w="100%"
        alignItems="center"
        zIndex={99}
        justifyContent="space-between"
        padding="1rem"
        top="0"
      >
        <Flex
          w={{ sm: "100%", lg: "fit-content" }}
          direction={{ sm: "column", lg: "row" }}
          alignItems={{ sm: "start", lg: "center" }}
          justifyContent="space-between"
          gap={4}
        >
          <Flex
            alignItems="center"
            justifyContent="space-between"
            w={{ sm: "100%", lg: "fit-content" }}
          >
            <Image
              src={myUOMLogo}
              onClick={goToHomePage}
              cursor="pointer"
              w={{ sm: "40px", xl: "60px" }}
            />
            <Box
              display={{ sm: "block", lg: "none" }}
              className={useColorModeValue("light-mode-svg", "dark-mode-svg")}
            >
              {loc.pathname !== "/" ? (
                <Box
                  cursor="pointer"
                  onClick={goToHomePage}
                  w={{ sm: "20px", lg: "20px", xl: "24px" }}
                >
                  <LeftArrowIcon />
                </Box>
              ) : null}
            </Box>
          </Flex>
          <Flex
            className={useColorModeValue("light-mode-svg", "dark-mode-svg")}
            direction="column"
            alignItems="start"
            justifyContent="start"
            gap={1}
          >
            <Heading
              fontSize={{ sm: 32, lg: 34 }}
              color={useColorModeValue("black", "#f3f3f3")}
              fontWeight={500}
              fontFamily="Syne"
            >
              {currentName}
            </Heading>
            {loc.pathname !== "/" ? (
              <Box
                cursor="pointer"
                onClick={goToHomePage}
                w={{ sm: "20px", lg: "20px", xl: "24px" }}
                display={{ sm: "none", lg: "block" }}
              >
                <LeftArrowIcon />
              </Box>
            ) : null}
          </Flex>
        </Flex>
        <Box display={{ sm: "none", lg: "block" }}>
          <SettingsButton />
        </Box>
      </Flex>
      <Flex
        w="100%"
        paddingX="20px"
        zIndex={99}
        height="60px"
        alignItems="center"
        justifyContent="space-around"
        backgroundColor={useColorModeValue(
          "rgba(255, 255, 255, 1)",
          "rgba(0, 0, 0, 1)"
        )}
        display={{ sm: "flex", lg: "none" }}
        position="fixed"
        bottom="0"
      >
        <Box onClick={goToHomePage}>
          <HomeIcon />
        </Box>
        <SettingsButton />
      </Flex>
      <Outlet />
    </>
  );
}
