import React, { Component } from "react";
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

function Schedule() {
  return (
    <Box
      w={{ sm: "95%", md: "98%", lg: "99%" }}
      marginBottom="1rem"
      ml={"0.5rem"}
      borderRadius="20"
      overflow="hidden"
      border="2px"
      borderColor={useColorModeValue("#0050e0", "#f3f3f3")}
    >
      <AccordionItem border="none">
        <Text>
          <AccordionButton
            display="flex"
            direction="row"
            alignItems="start"
            justifyContent="100start"
            _hover={{ bg: "transparent" }}
            w="100%"
            h="100%"
            outline="none"
            textAlign="center"
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
              alignItems="flex-start"
              justifyContent="start"
              fontWeight="bold"
              fontFamily="Syne"
              fontSize={{ sm: 14, md: 16, lg: 18 }}
            >
              Λειτουργία Εστιατορίου
            </Text>
            <AccordionIcon />
          </AccordionButton>
        </Text>
        <AccordionPanel
          pb={4}
          w={"100%"}
          justifyContent="center"
          fontWeight="bold"
          fontFamily="Syne"
        >
          <Text>Πρωινό: 08:00-09:30</Text>
          <Text>Μεσημεριανό</Text>
          12:30-15:30(ΚΑΘΗΜΕΡΙΝΕΣ)<br></br>
          13:00-15:30(ΣΚ και ΑΡΓΙΕΣ)
          <Text>Βραδινό: 18:00-20:00</Text>
        </AccordionPanel>
      </AccordionItem>
    </Box>
  );
}

export default Schedule;
