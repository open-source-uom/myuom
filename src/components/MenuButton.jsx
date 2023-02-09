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

import { useContext, useEffect } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerFooter,
  FormControl,
  FormLabel,
  Switch,
  Select,
  useDisclosure,
  useColorMode,
  Text,
  Flex,
  Box,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import {
  FaQuestionCircle,
  FaInfoCircle,
  FaFileAlt,
  FaShareAlt,
  FaGitlab,
  FaBook,
} from "react-icons/fa";
import { DepartmentContext } from "../contexts/departmentContext";
import { DEPARTMENTS } from "../assets/DepNames";
import { Link } from "react-router-dom";
import { SettingsIcon, CloseIcon } from "../assets/icons";
export default function MenuButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const { depName, changeDepartmentName } = useContext(DepartmentContext);

  const handleChange = (e) => {
    e.preventDefault();
    let selectedDepartment = e.target.selectedOptions[0].label;
    changeDepartmentName(selectedDepartment);
    onClose();
  };

  const handleShare = (e) => {
    const shareOpts = {
      title: "myUoM",
      url: "https://gitlab.com/opensourceuom/myUoM/",
    };
    navigator.share(shareOpts);
  };

  useEffect(() => {
    window.addEventListener("popstate", () => {
      onClose();
    });
  }, []);

  const handleClick = () => {
    window.history.pushState(null, "", "/");
    onOpen();
  };

  return (
    <>
      <Box
        w={{ sm: "30px", lg: "40px" }}
        cursor="pointer"
        aria-label="Open Menu"
        onClick={handleClick}
        fontFamily="Syne"
      >
        <SettingsIcon />
      </Box>

      <Drawer
        fontFamily="Syne"
        placement={"right"}
        onClose={onClose}
        isOpen={isOpen}
        autoFocus={false}
        size={["full", "md", "lg"]}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader
            color={useColorModeValue("#0050e0", "#f3f3f3")}
            backgroundColor={useColorModeValue("#f3f3f3", "black")}
            borderBottomWidth="1px"
            fontFamily="Syne"
          >
            Ρυθμίσεις
          </DrawerHeader>
          <DrawerBody
            backgroundColor={useColorModeValue("#f3f3f3", "black")}
            fontFamily="Syne"
          >
            <Flex
              direction="column"
              fontFamily="Syne"
              justifyItems={"center"}
              color={useColorModeValue("#0050e0", "#f3f3f3")}
              borderRadius="0.5rem"
              my={"2rem"}
            >
              <Select
                fontWeight={"bold"}
                placeholder={depName ? depName : "Επιλέξτε τμήμα"}
                onChange={handleChange}
              >
                {DEPARTMENTS.filter((department) => department !== depName).map(
                  (department) => (
                    <option value={`${department}`} key={department}>
                      {department}
                    </option>
                  )
                )}
              </Select>
            </Flex>

            <Box>
              <FormControl
                display="flex"
                alignItems="flex-start"
                justifyContent={"space-between"}
                color={useColorModeValue("#0050e0", "#f3f3f3")}
                my={"2rem"}
              >
                <FormLabel htmlFor="switch-color-mode" mb="0">
                  <Text as="span" fontWeight={"bold"}>
                    Σκούρο θέμα
                  </Text>
                </FormLabel>
                <Switch
                  id="switch-color-mode"
                  onChange={toggleColorMode}
                  isChecked={colorMode === "dark"}
                />
              </FormControl>

              <Box
                color={useColorModeValue("#0050e0", "#f3f3f3")}
                alignItems="flex-start"
                justifyContent={"space-between"}
              >
                <Link to="/faq">
                  <Box display="flex" my={"1.5rem"} onClick={onClose}>
                    <FaQuestionCircle size="1.5rem" />
                    <Text
                      as="span"
                      fontWeight={"bold"}
                      fontSize="xl"
                      ml="0.5rem"
                    >
                      Συχνές ερωτήσεις
                    </Text>
                  </Box>
                </Link>
                <Link to="/about">
                  <Box
                    display="flex"
                    justifyContent={"start"}
                    my={"1.5rem"}
                    onClick={onClose}
                  >
                    <FaInfoCircle size="1.5rem" />
                    <Text
                      as="span"
                      fontWeight={"bold"}
                      fontSize="xl"
                      ml="0.5rem"
                    >
                      Σχετικά
                    </Text>
                  </Box>
                </Link>
                <a
                  href="https://gitlab.com/opensourceuom/myUoM/-/blob/main/LICENSE"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Box display="flex" justifyContent={"start"} my={"1.5rem"}>
                    <FaFileAlt size="1.5rem" />
                    <Text
                      as="span"
                      fontWeight={"bold"}
                      fontSize="xl"
                      ml="0.5rem"
                    >
                      Άδεια χρήσης
                    </Text>
                  </Box>
                </a>
                <a
                  href="https://drive.google.com/file/d/1SpkIMa7EXiAo-SpGZzbSDk9i8kn4xtkk/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Box display="flex" justifyContent={"start"} my={"1.5rem"}>
                    <FaBook size="1.5rem" />
                    <Text
                      as="span"
                      fontWeight={"bold"}
                      fontSize="xl"
                      ml="0.5rem"
                    >
                      Εγχειρίδιο εφαρμογής
                    </Text>
                  </Box>
                </a>
                <Box
                  display="flex"
                  justifyContent={"start"}
                  my={"1.5rem"}
                  cursor="pointer"
                  onClick={handleShare}
                >
                  <FaShareAlt size="1.5rem" />
                  <Text
                    as="span"
                    className="share"
                    fontWeight={"bold"}
                    fontSize="xl"
                    ml="0.5rem"
                  >
                    Κοινοποιήστε την εφαρμογή
                  </Text>
                </Box>
                <a
                  href="https://gitlab.com/opensourceuom/myUoM"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Box display="flex" justifyContent={"start"} my={"1.5rem"}>
                    <FaGitlab size="1.5rem" />
                    <Text
                      as="span"
                      fontWeight={"bold"}
                      fontSize="xl"
                      ml="0.5rem"
                    >
                      Συνεισφέρετε στο έργο μας
                    </Text>
                  </Box>
                </a>
              </Box>
            </Box>
          </DrawerBody>

          <DrawerFooter
            backgroundColor={useColorModeValue("#f3f3f3", "black")}
            color={useColorModeValue("#0050e0", "#f3f3f3")}
            justifyContent={"center"}
          >
            <Button
              onClick={onClose}
              variant="ghost"
              fontWeight="bold"
              fontFamily="Syne"
              fontSize={{ base: "sm", lg: "lg" }}
              _hover={false}
              leftIcon={
                <Box ml="0.5rem" pt="0.4rem">
                  <CloseIcon />
                </Box>
              }
            >
              Κλείσιμο
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
