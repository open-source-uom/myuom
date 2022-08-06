import React from "react";
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Stack,
  Image,
  useToast,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { DepartmentContext } from "../contexts/departmentContext";
import { DEPARTMENTS } from '../assets/DepNames'


export default function MenuBox({ category }) {
  const { title, imgUrl, route, isExternal, requireSelection } = category;
  const { depName } = React.useContext(DepartmentContext);
  const toast = useToast();
  let condition = requireSelection && !DEPARTMENTS.includes(depName);

  const lightModeColour = condition ? "red" : "white";
  const darkModeColour = condition ? "gray.600" : "red";

  const navigate = useNavigate();

  const handleNavigation = () => {
    isExternal ? window.open(route) : navigate(route);
  };

  React.useEffect(() => {
    if (requireSelection)
      console.log(title);
  }, [])

  const handleSelection = () => {
    if (requireSelection && !depName) {
      if (!depName) {
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
    } else {
      handleNavigation();
    }
  };

  return (
    <Center py={12} m={3} onClick={handleSelection}>
      <Box
        role={"group"}
        p={6}
        maxW={"480px"}
        w={"full"}
        bg={useColorModeValue(lightModeColour, darkModeColour)}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
        _hover={{
          bgColor: "blue.600",
        }}
      >
        <Box rounded={"lg"} mt={10} pos={"relative"} height={"230px"}>
          <Image
            rounded={"lg"}
            height={"full"}
            width={"full"}
            objectFit={"cover"}
            src={imgUrl}
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
            {title} {category.isExternal && <ExternalLinkIcon />}
          </Heading>
        </Stack>
      </Box>
    </Center>
  );
}
