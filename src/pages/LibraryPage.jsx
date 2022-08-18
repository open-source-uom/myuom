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
    <Flex flexDirection="column" alignItems="center">
      {/* Wrapper container */}
      <Flex
        textAlign="center"
        flexDirection={{ base: "column", lg: "row" }}
        columnGap={"3rem"}
        alignItems="center"
        justifyContent={"center"}
        width="100%"
        height={{ lg: "100vh" }}
      >
        {/* Ωράριο */}
        <Box
          border="2px"
          borderRadius="1rem"
          bg={useColorModeValue("#0050e0", "#f3f3f3")}
          borderColor={useColorModeValue("#0050e0", "#f3f3f3")}
          marginBottom={{ base: "1rem", lg: "0" }}
          marginTop="1rem"
          px="0.75rem"
          py="1.5rem"
          width="max-content"
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          height={{ lg: "30%" }}
        >
          <Flex
            flexDirection={"row"}
            alignItems="center"
            fontFamily="Syne"
            color={useColorModeValue("#f3f3f3", "black")}
          >
            <TimeIcon w={39} h={39} />
            <Box mx="1rem">
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
              κλειστά
            </Box>
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
          width="max-content"
          height={{ lg: "30%" }}
        >
          <Flex
            mx="1rem"
            flexDirection={"row"}
            alignItems="center"
            rowGap={"0.75rem"}
            justifyContent={"flex-start"}
            columnGap={"1rem"}
            color={useColorModeValue("#f3f3f3", "black")}
            fontFamily="Syne"
          >
            <PhoneIcon w={39} h={39} />

            <Text fontWeight="bold">
              {" "}
              (2310) <br />
            </Text>
            <Text>
              891751 <br />
              891752
            </Text>
            <Text>
              {" "}
              891118 <br /> 891137{" "}
            </Text>
            <Text fontWeight="bold"> Ημιώροφος </Text>
          </Flex>
        </Box>
        <Button
          color={useColorModeValue("#0050e0", "#f3f3f3")}
          variant="ghost"
          fontWeight="bold"
          fontFamily="Syne"
          fontSize={{ sm: 16, md: 18, lg: 20 }}
          rightIcon={<ArrowForwardIcon w={6} h={6} />}
          onClick={(e) => {
            window.open("https://www.lib.uom.gr/index.php/el/");
          }}
          justifyContent="center"
        >
          Ιστοσελίδα Βιβλιοθήκης
        </Button>
      </Flex>
    </Flex>
  );
}
