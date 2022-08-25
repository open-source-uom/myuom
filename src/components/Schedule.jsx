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
      bg={useColorModeValue("#0050e0", "#f3f3f3")}
      color={useColorModeValue("#f3f3f3", "black")}
    >
      <AccordionItem border="none">
        <Text>
          <AccordionButton
            display="flex"
            direction="row"
            alignItems="start"
            justifyContent="start"
            _hover={{ bg: "transparent" }}
            w="100%"
            h="100%"
            outline="none"
            bgColor="transparent"
            color={useColorModeValue("#f3f3f3", "black")}
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
              justifyContent="start"
              fontWeight="bold"
              fontFamily="Syne"
              fontSize={{ sm: 14, md: 16, lg: 18 }}
              color={useColorModeValue("#f3f3f3", "black")}
            >
              Ωράριο
            </Text>
            <AccordionIcon />
          </AccordionButton>
        </Text>
        <AccordionPanel
          pb={4}
          w={"100%"}
          justifyContent="start"
          fontFamily="Syne"
        >
          <Text fontWeight="bold">Πρωινό:</Text>
          <Text> 08:00-09:30</Text>
          <Text fontWeight="bold">Μεσημεριανό</Text>
          12:30-15:30<br></br>
          13:00-15:30 (Σ/Κ και ΑΡΓΙΕΣ)
          <Text fontWeight="bold">Βραδινό:</Text>
          <Text> 18:00-20:00</Text>
        </AccordionPanel>
      </AccordionItem>
    </Box>
  );
}

export default Schedule;
