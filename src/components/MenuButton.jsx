
import React, { useContext } from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerFooter,
    VStack,
    FormControl,
    FormLabel,
    Switch,
    Select,
    IconButton,
    useDisclosure,
    useColorMode,
    Text,
    Flex
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { DepartmentContext } from '../contexts/departmentContext';
import { DEPARTMENTS } from "../assets/DepNames";


export default function MenuButton() {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();
    const { depName, changeDepartmentName } = useContext(DepartmentContext);

    const handleChange = (e) => {
        e.preventDefault();
        let selectedDepartment = e.target.selectedOptions[0].label;
        changeDepartmentName(selectedDepartment);
    };

    return (
        <>
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
                                    onChange={toggleColorMode}
                                    isChecked={colorMode === 'dark'}
                                />
                            </FormControl>

                            <Flex direction="column">
                                <Select
                                    placeholder={depName ? depName : "Select Department"}
                                    size={["sm", "md", "lg"]}
                                    onChange={handleChange}
                                >
                                    {DEPARTMENTS.filter((department => department !== depName)).map((department) => (
                                        <option value={`${department}`} key={department}>
                                            {department}
                                        </option>
                                    ))}
                                </Select>
                            </Flex>
                        </VStack>
                    </DrawerBody>

                    <DrawerFooter>
                        <Text as={"sub"}> Made By &nbsp;</Text>
                        <Text as={"i"} text={"bold"}>
                            OpenSource UoM
                        </Text>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}