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

import { useContext, useEffect, useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Image,
  DrawerCloseButton,
  DrawerFooter,
  VStack,
  HStack,
  FormControl,
  FormLabel,
  Switch,
  Select,
  IconButton,
  useDisclosure,
  useColorMode,
  Text,
  Flex,
  Box,
  useColorModeValue,
  Button,
  Spacer,
  Grid,
  GridItem,
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
        <svg
          width="100%"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
            stroke={useColorModeValue("#000", "#f3f3f3")}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15V15Z"
            stroke={useColorModeValue("#000", "#f3f3f3")}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
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
                  href="https://gitlab.com/opensourceuom/myUoM/-/blobmyUoM%20-%20User%20Documentation.pdf"
                  target="_blank"
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
                  <svg
                    width="30px"
                    version="1.1"
                    viewBox="0 0 700 700"
                    xmlns="http://www.w3.org/2000/svg"
                    fill={useColorModeValue("#0050e0", "#f3f3f3")}
                  >
                    <path d="m517.12 422.27c3.3125 3.2891 5.1758 7.7617 5.1758 12.426 0 4.668-1.8633 9.1406-5.1758 12.426-3.3008 3.2773-7.7734 5.1016-12.426 5.0742-4.6523 0.027343-9.1211-1.7969-12.426-5.0742l-142.27-142.45-142.27 142.45c-3.3047 3.2773-7.7734 5.1016-12.426 5.0742-4.6523 0.027343-9.125-1.7969-12.426-5.0742-3.3125-3.2852-5.1758-7.7578-5.1758-12.426 0-4.6641 1.8633-9.1367 5.1758-12.426l142.45-142.27-142.45-142.27c-4.4375-4.4414-6.1719-10.91-4.5469-16.973 1.625-6.0664 6.3594-10.801 12.426-12.426 6.0625-1.625 12.531 0.10938 16.973 4.5469l142.27 142.45 142.27-142.45c4.4414-4.4375 10.91-6.1719 16.973-4.5469 6.0664 1.625 10.801 6.3594 12.426 12.426 1.625 6.0625-0.10938 12.531-4.5469 16.973l-142.45 142.27z" />
                  </svg>
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
