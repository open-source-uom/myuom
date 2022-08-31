import { useContext, useEffect } from "react";
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
import { motion } from "framer-motion";

const rotateIn = {
  initial: {
    rotateX: "180deg",
    opacity: 0,
  },
  inView: {
    rotateX: "0deg",
    opacity: 1,
    transition: {
      duration: 0.45,
      ease: "easeIn",
    },
  },
};

export default function MenuBox({ category }) {
  const { title, iconSVG, route, span, isExternal, requireSelection } =
    category;
  const { depName } = useContext(DepartmentContext);
  const toast = useToast();
  let condition = requireSelection && !DEPARTMENTS.includes(depName);

  const navigate = useNavigate();

  const handleNavigation = () => {
    isExternal
      ? requireSelection
        ? window.location.replace(route, "_blank")
        : window.open(route, "_blank")
      : navigate(route);
  };

  useEffect(() => {
    // if (requireSelection) console.log(title);
  }, []);

  const handleSelection = () => {
    const id = "1";
    if (requireSelection && !depName) {
      if (!toast.isActive(id)) {
        toast({
          id,
          title: "Δεν έχει επιλεγεί τμήμα",
          description: "Παρακαλώ επιλέξτε τμήμα από τις ρυθμίσεις",
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
      className={`menu-box span-${span} ${condition ? "disabled" : ""}`}
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
          minW={{ sm: "24px", md: "48px", lg: "52px" }}
          maxW={{ sm: "24px", md: "48px", lg: "52px" }}
          className={`svg-container ${useColorModeValue(
            "light-mode-svg",
            "dark-mode-svg"
          )}`}
        >
          {iconSVG}
        </Box>
        <Box
          minW={{ sm: "12px", md: "24px", lg: "28px" }}
          maxW={{ sm: "12px", md: "24px", lg: "28px" }}
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
        fontSize={{ sm: 11.95, md: 16, lg: 26, xl: 32 }}
        color="#f3f3f3"
        w="100%"
        fontWeight={500}
        fontFamily="Syne"
      >
        {title}
      </Heading>
    </GridItem>
  );
}
