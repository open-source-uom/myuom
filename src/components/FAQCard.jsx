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
  Text,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";

export default function FAQCard({ data }) {
  // Call useColorModeValue at the top level
  const borderColor = useColorModeValue("#0050e0", "#f3f3f3");
  const textColor = useColorModeValue("white", "black");
  const panelBgColor = useColorModeValue("white", "#2D3748");
  const hoverBgColor = useColorModeValue("#276ff8", "#d0d0d0");

  return (
      <Box
          mx={{ base: "0.5rem", md: "1rem" }}
          mb="1rem"
          borderRadius="lg"
          overflow="hidden"
          boxShadow="md"
      >
        <AccordionItem border="none">
          {({ isExpanded }) => (
              <>
                <AccordionButton
                    _hover={{ bgColor: hoverBgColor }}
                    bgColor={borderColor}
                    color={textColor}
                    border={`0px solid ${borderColor}`}
                    borderRadius="md"
                    p={4}
                    textAlign="left"
                    _focus={{ boxShadow: "outline" }}
                    _expanded={{ borderColor }}
                >
                  <Box flex="1" textAlign="left">
                    <Text
                        fontFamily="Syne"
                        fontSize={{ base: "md", md: "lg" }}
                        fontWeight="bold"
                        noOfLines={isExpanded ? 1 : 2}
                    >
                      {data.question}
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel
                    bgColor={panelBgColor}
                    p={4}
                    fontFamily="Syne"
                    fontSize={{ base: "sm", md: "md" }}
                    borderTop={`0px solid ${borderColor}`} // Border at the top of the panel
                    textAlign={"left"}
                >
                  {data.panel}
                </AccordionPanel>
              </>
          )}
        </AccordionItem>
      </Box>
  );
}

