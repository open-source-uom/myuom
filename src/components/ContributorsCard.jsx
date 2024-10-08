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
    Image,
    Text,
    useColorModeValue,
    Flex, Stat, StatLabel, StatNumber, StatHelpText, Link,
} from "@chakra-ui/react";
  import { SocialIcon } from "react-social-icons";
import {FaGithub} from "react-icons/fa";
import {RiGitRepositoryCommitsLine} from "react-icons/ri";

import {ExternalLinkIcon} from "@chakra-ui/icons";
  
  export default function ContributorsCard ({ data }) {
    const SelectBorderColor = () => {
      return useColorModeValue("#0050e0", "#f3f3f3");
    };
  
    const SelectItemColor = () => {
      return useColorModeValue("black", "white");
    };
  
    return (
      <Box
        w={{ sm: "95%", md: "75%", lg: "50%" }}
        style={{ marginBottom: "1rem" }}
        borderRadius="20"
        overflow="hidden"
        border="2px"
        borderColor={SelectBorderColor()}
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
              color={SelectItemColor()}
              fontFamily="Syne"
              border="none"
              alt="profPic"
              overflow="hidden"
              gap={3}
            >
                <Image
                  src={data.img}
                  width="60px"
                  height="60px"
                  borderRadius="full"
                />
                <Text
                    w="100%"
                    display="flex"
                    direction="row"
                    alignItems="center"
                    justifyContent="start"
                    fontWeight="bold"
                    fontSize={{ sm: 14, md: 16, lg: 18 }}
                >
                    <Link href={data.github} isExternal>
                        <ExternalLinkIcon mx='2px' as={FaGithub} /> {data.name}
                    </Link>
                </Text>
                <Stat>
                    <StatNumber fontSize={{ base: "xs", sm: "sm", md: "md" }} style={{display: "flex", flexDirection: "row", alignItems: "center", gap: "0.5rem"}}>
                        <RiGitRepositoryCommitsLine />
                        {data.contributions}
                    </StatNumber>
                    <StatHelpText fontSize={{ base: "xs", sm: "sm", md: "md" }}>Commits</StatHelpText>
                </Stat>
            </AccordionButton>
          </Flex>
        </AccordionItem>
      </Box>
    );
  }
  