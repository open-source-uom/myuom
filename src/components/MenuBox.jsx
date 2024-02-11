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

import {
  Box,
  Flex,
  GridItem,
  Heading,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { DiagonalRightArrowIcon, RightArrowIcon } from "../assets/icons";
import { useDepName, useDepartments } from "../hooks";
import i18n from "../i18n";

export default function MenuBox({ category }) {
  const { title, iconSVG, route, span, isExternal, requireSelection } =
      category;
  const { depName, depCode } = useDepName();
  const departments = useDepartments();

  const toast = useToast();
  const isDisabled =
      requireSelection && (!depCode || !departments.some((dep) => dep.code === depCode));
  const rotateIn = useMemo(
      () => ({
        initial: {
          rotateX: "180deg",
          opacity: 0,
        },
        inView: {
          rotateX: "0deg",
          opacity: isDisabled ? 0.6 : 1,
          transition: {
            duration: 0.45,
            ease: "easeIn",
          },
        },
      }),
      [isDisabled]
  );

  const navigate = useNavigate();

  const handleNavigation = () => {
    isExternal
        ? requireSelection
            ? window.location.replace(route, "_blank")
            : window.open(route, "_blank")
        : navigate(route);
  };

  const handleSelection = () => {
    const id = "1";
    if (requireSelection && !depName) {
      if (!toast.isActive(id)) {
        toast({
          id,
          title: i18n.t("error_title"),
          description: i18n.t("error_description"),
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
      }
    } else {
      handleNavigation();
    }
  };


  return (
      <GridItem
          as={motion.div}
          // force remount for isDisabled to take effect (framer motion quirk)
          key={`${title}-isDisabled-${isDisabled}`}
          variants={rotateIn}
          viewport={{ once: true }}
          cursor="pointer"
          onClick={handleSelection}
          colSpan={span}
          role={"group"}
          border="2px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-between"
          borderColor={useColorModeValue("#0050e0", "#f3f3f3")}
          backgroundColor={useColorModeValue("#0050e0", "transparent")}
          className={`menu-box span-${span}`}
          rounded="0.75rem"
          p={{ sm: 2, md: 4, lg: 6 }}>
        <Flex
            w="100%"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between">
          <Box
              minW={{ sm: "24px", md: "48px", lg: "52px" }}
              maxW={{ sm: "24px", md: "48px", lg: "52px" }}
              className={`svg-container ${useColorModeValue(
                  "light-mode-svg",
                  "dark-mode-svg"
              )}`}>
            {iconSVG}
          </Box>
          <Box
              minW={{ sm: "12px", md: "24px", lg: "28px" }}
              maxW={{ sm: "12px", md: "24px", lg: "28px" }}
              className={`svg-container ${useColorModeValue(
                  "light-mode-svg",
                  "dark-mode-svg"
              )}`}>
            {isExternal ? <DiagonalRightArrowIcon /> : <RightArrowIcon />}
          </Box>
        </Flex>
        <Heading
            fontSize={{ sm: 11.95, md: 16, lg: 26, xl: 32 }}
            color="#f3f3f3"
            w="100%"
            fontWeight={500}
            fontFamily="Syne">
          {title}
        </Heading>
      </GridItem>
  );
}
