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
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
  Button,
  useDisclosure,
  Image,
  Text,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";
import { useTranslation } from 'react-i18next';
// import { EmailIcon } from "@chakra-ui/icons";
import i18n from "../../i18n";
export default function SecrCard({ data }) {

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      w="100%"
      borderRadius="20"
      overflow="hidden"
      border="2px"
      borderColor={useColorModeValue("#0050e0", "#f3f3f3")}
      mb="1rem"
    >
      <AccordionItem border="none" w="100%">
        <Flex>
          <AccordionButton
            display="flex"
            direction="row"
            alignItems="center"
            justifyContent="start"
            _hover={{ bg: "transparent" }}
            w="100%"
            h="100%"
            outline="none"
            textAlign="left"
            bgColor="transparent"
            color={useColorModeValue("black", "white")}
            fontFamily="Syne"
            border="none"
            alt="profPic"
            overflow="hidden"
            gap={3}
          >
            <Text
              w="100%"
              display="flex"
              direction="row"
              alignItems="center"
              justifyContent="start"
              fontWeight="bold"
              fontSize={{ sm: 14, md: 16, lg: 18 }}
            >
              {i18n.t("grammateia")} {data.name}
            </Text>
            <AccordionIcon />
          </AccordionButton>
        </Flex>
        <AccordionPanel bgColor="transparent" pb={5} textAlign="center">
          <Flex direction="column" alignItems="start" fontFamily="Syne">
            <Text as="span" fontWeight="bold">
              {i18n.t("tilefono")}&nbsp;
              <Text fontWeight="normal" as="span">
                {data.tel}
              </Text>
            </Text>

            <Text as="span" fontWeight="bold">
              {i18n.t("email")}&nbsp;
              <Text fontWeight="normal" as="span">
                {data.email}
              </Text>
            </Text>
            <Flex
              direction="row"
              alignItems="center"
              gap={4}
              marginTop="2rem"
              fontWeight="bold"
              textAlign="left"
              fontFamily="Syne"
              fontSize={{ sm: 16, md: 18, lg: 20 }}
              onClick={(e) => {
                window.open(data.link);
              }}
            >
              <span>{i18n.t("istoselidaGrammateias")}</span>
              <Box w={{ sm: "16px", lg: "18px" }}>
                <svg
                  className="stroke-svg home-svg"
                  width="100%"
                  viewBox="0 0 11 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 5.66666H10.0575"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke={useColorModeValue("black", "#f3f3f3")}
                  />
                  <path
                    d="M5.52881 0.999985L10.0575 5.66665L5.52881 10.3333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke={useColorModeValue("black", "#f3f3f3")}
                  />
                </svg>
              </Box>
            </Flex>
          </Flex>
        </AccordionPanel>
      </AccordionItem>
    </Box>
  );
}
