import React, { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerFooter,
} from "@chakra-ui/react";
import {
  Flex,
  Text,
  Image,
  Spacer,
  useDisclosure,
  Select,
  useColorMode,
  VStack,
  FormControl,
  FormLabel,
  Switch,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import { DepartmentContext } from "../contexts/departmentContext";
import { DEPARTMENTS } from "../assets/DepNames";
import { SettingsContext } from "../contexts/SettingsContext";

export default function Header() {
  const navigate = useNavigate();
  const { changeDepartmentName } = useContext(DepartmentContext);
  const { toggleDarkMode, isDarkModeSelected } = useContext(SettingsContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  const goToHomePage = () => {
    navigate("/");
  };

  const handleChange = (e) => {
    e.preventDefault();
    let selectedDepartment = e.target.selectedOptions[0].label;
    changeDepartmentName(selectedDepartment);
  };

  const switchColorMode = () => {
    toggleColorMode();
    toggleDarkMode();
  };

  return (
    <>
      <Flex direction={"column"}>
        <Flex w={"100%"} h={"4em"} bgColor={"blue"}>
          <Image src="https://picsum.photos/80" onClick={goToHomePage} />
          <Spacer />
          <Text color={"white"} alignSelf={"center"} onClick={goToHomePage}>
            myUoM
          </Text>
          <Spacer />

          <IconButton
            aria-label="Open Menu"
            size="lg"
            mt={2}
            mr={2}
            icon={<HamburgerIcon />}
            onClick={onOpen}
          />

          <Drawer
            placement={"right"}
            onClose={onClose}
            isOpen={isOpen}
            size={["full", "md", "lg"]}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />

              <DrawerHeader borderBottomWidth="1px">Settings</DrawerHeader>
              <DrawerBody>
                <VStack spacing={10}>
                  <FormControl
                    display="flex"
                    alignItems="flex-start"
                    justifyContent={"space-between"}
                  >
                    <FormLabel htmlFor="switch-color-mode" mb="0">
                      <Text as="span" fontWeight={"bold"}>
                        Dark Mode
                      </Text>
                    </FormLabel>
                    <Switch
                      id="switch-color-mode"
                      onChange={switchColorMode}
                      isChecked={isDarkModeSelected}
                    />
                  </FormControl>

                  <Flex direction="column">
                    <Select
                      placeholder="Select Department"
                      size={["sm", "md", "lg"]}
                      onChange={handleChange}
                    >
                      {DEPARTMENTS.map((department) => (
                        <option value={`${department}`} key={department}>
                          {department}
                        </option>
                      ))}
                    </Select>
                  </Flex>
                </VStack>
              </DrawerBody>

              <DrawerFooter>
                <Text as={"sub"}> Made By &nbsp;</Text>{" "}
                <Text as={"i"} text={"bold"}>
                  OpenSource UoM
                </Text>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </Flex>
      </Flex>
      <Outlet />
    </>
  );
}
