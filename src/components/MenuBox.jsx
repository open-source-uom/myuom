import React from "react";
import {
  Box,
  useColorModeValue,
  Heading,
  GridItem,
  Flex,
  useToast,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { DepartmentContext } from "../contexts/departmentContext";
import { DEPARTMENTS } from "../assets/DepNames";

export default function MenuBox({ category }) {
  const { title, iconSVG, route, span, isExternal, requireSelection } =
    category;
  const { depName } = React.useContext(DepartmentContext);
  const toast = useToast();
  let condition = requireSelection && !DEPARTMENTS.includes(depName);

  const lightModeColour = condition ? "red" : "white";
  const darkModeColour = condition ? "red" : "gray.600";

  const navigate = useNavigate();

  const handleNavigation = () => {
    isExternal ? window.open(route) : navigate(route);
  };

  React.useEffect(() => {
    if (requireSelection) console.log(title);
  }, []);

  const handleSelection = () => {
    if (requireSelection && !depName) {
      toast({
        title: "Department Not Selected",
        description: "Please Select a Department From The Settings",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    } else {
      handleNavigation();
    }
  };

  return (
    <GridItem
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
      className={`menu-box span-${span}`}
      rounded="0.75rem"
      p={{ sm: 2, md: 4, lg: 6 }}
    >
      <Flex
        w="100%"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box
          minW={{ sm: "32px", md: "48px", lg: "64px" }}
          maxW={{ sm: "32px", md: "48px", lg: "64px" }}
          className={`svg-container ${useColorModeValue(
            "light-mode-svg",
            "dark-mode-svg"
          )}`}
        >
          {iconSVG}
        </Box>
        <Box
          minW={{ sm: "18px", md: "24px", lg: "30px" }}
          maxW={{ sm: "18px", md: "24px", lg: "30px" }}
          className={`svg-container ${useColorModeValue(
            "light-mode-svg",
            "dark-mode-svg"
          )}`}
        >
          {isExternal ? (
            <svg
              className="stroke-svg"
              width="100%"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.873535 9L8.91951 1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M0.873535 1H8.91951V9"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              className="stroke-svg"
              width="120%"
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 5.66666H10.0575"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.52881 0.999985L10.0575 5.66665L5.52881 10.3333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </Box>
      </Flex>
      <Heading
        fontSize={{ sm: 13, md: 16, lg: 26, xl: 38 }}
        color={useColorModeValue("black", "#f3f3f3")}
        w="100%"
        fontWeight={{ sm: 600, lg: 500 }}
        fontFamily="Syne"
      >
        {title}
      </Heading>
    </GridItem>
  );
}
