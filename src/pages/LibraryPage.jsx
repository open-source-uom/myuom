import React from "react";
import {
  Flex,
  Box,
  Text,
  Button,
  Image,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";

import {
  TimeIcon,
  PhoneIcon,
  ExternalLinkIcon,
  ArrowForwardIcon,
} from "@chakra-ui/icons";

export default function LibraryPage() {
  return (
    <Flex
      w="100vw"
      overflowX="hidden"
      flexDirection="column"
      alignItems="center"
    >
      {/* Wrapper container */}
      <Flex
        textAlign="center"
        flexDirection={{ base: "column", lg: "row" }}
        columnGap={"3rem"}
        alignItems="center"
        justifyContent={"center"}
        width={{ sm: "100%", lg: "fit-content" }}
        height={{ lg: "75vh" }}
        paddingX="16px"
      >
        {/* Ωράριο */}
        <Box
          border="2px"
          borderRadius="1rem"
          bg={useColorModeValue("#0050e0", "#f3f3f3")}
          borderColor={useColorModeValue("#0050e0", "#f3f3f3")}
          marginBottom={{ base: "1rem", lg: "0" }}
          marginTop="1rem"
          px="1.5rem"
          py="1.5rem"
          width="100%"
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          height={{ lg: "30%" }}
        >
          <Flex
            flexDirection={"column"}
            alignItems="flex-start"
            h="fit-content"
            fontFamily="Syne"
            w="100%"
            fontSize={{ base: "md", lg: "xl" }}
            color={useColorModeValue("#f3f3f3", "black")}
          >
            <Flex flexDirection={"row"} alignItems="center">
              <TimeIcon w={30} h={30} />
              <Text
                fontSize={{ base: "lg", lg: "2xl" }}
                ml="1rem"
                as="span"
                fontWeight={"bold"}
              >
                Ωράριο
              </Text>
            </Flex>
            <Flex mt="1rem" flexDirection={"row"} alignItems="center">
              <Box mx="0.5rem">
                <Text as="span" fontWeight={"bold"}>
                  Δευ-Παρ
                </Text>{" "}
                <br />
                8:00 - 20:00
              </Box>
              <Box mx="1rem">
                <Text as="span" fontWeight={"bold"}>
                  Σάββατο
                </Text>{" "}
                <br />
                9.00-15.00
              </Box>
              <Box mx="1rem">
                <Text as="span" fontWeight={"bold"}>
                  Κυριακή
                </Text>{" "}
                <br />
                Κλειστά
              </Box>
            </Flex>
          </Flex>
        </Box>
        {/* Επικοινωνία  */}
        <Box
          border="2px"
          borderRadius="1rem"
          borderColor={useColorModeValue("#0050e0", "#f3f3f3")}
          bg={useColorModeValue("#0050e0", "#f3f3f3")}
          marginBottom={{ base: "1rem", lg: "0" }}
          marginTop="1rem"
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          py="1rem"
          px="0.75rem"
          width="100%"
          height={{ lg: "30%" }}
        >
          <Flex
            mx="1rem"
            flexDirection={"column"}
            alignItems="flex-start"
            rowGap={"0.75rem"}
            justifyContent={"flex-start"}
            columnGap={"1rem"}
            color={useColorModeValue("#f3f3f3", "black")}
            fontFamily="Syne"
            w="100%"
            fontSize={{ base: "md", lg: "2xl" }}
          >
            <Flex flexDirection={"row"} alignItems="center">
              <PhoneIcon w={27} h={27} />
              <Text
                fontSize={{ base: "lg", lg: "2xl" }}
                ml="1rem"
                as="span"
                fontWeight={"bold"}
              >
                Επικοινωνία
              </Text>
            </Flex>

            <Flex
              flexDirection={"row"}
              alignItems="center"
              justifyContent="space-between"
              w="100%"
              gap="2rem"
            >
              <Text>
                2310891751 <br />
                2310891752
              </Text>
              <Text>
                {" "}
                2310891118 <br /> 2310891137{" "}
              </Text>
              <Text fontWeight="bold"> Ημιόροφος </Text>
            </Flex>
          </Flex>
        </Box>
      </Flex>
      <Button
        color={useColorModeValue("#0050e0", "#f3f3f3")}
        variant="ghost"
        fontWeight="bold"
        fontFamily="Syne"
        fontSize={{ base: "lg", lg: "2xl" }}
        rightIcon={
          <Box ml="0.5rem">
            <svg
              width="15px"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.873535 9L8.91951 1"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                stroke={useColorModeValue("#0050e0", "#f3f3f3")}
              />
              <path
                d="M0.873535 1H8.91951V9"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                stroke={useColorModeValue("#0050e0", "#f3f3f3")}
              />
            </svg>
          </Box>
        }
        onClick={(e) => {
          window.open("https://www.lib.uom.gr/index.php/el/");
        }}
        justifyContent="center"
      >
        Ιστοσελίδα Βιβλιοθήκης
      </Button>
    </Flex>
  );
}
