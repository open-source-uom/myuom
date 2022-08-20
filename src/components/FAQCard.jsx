import React from "react";
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
  return (
    <Box mx={"0.5rem"} mb={"1rem"}>
      <AccordionItem border="none">
        <AccordionButton
          _hover={{ bgColor: "transparent" }}
          margin="0 auto"
          width="80vw"
          textAlign="center"
          marginBottom="0.3em"
          color={useColorModeValue("black", "white")}
          border={"solid 2px"}
          borderRadius="1rem"
          borderColor={useColorModeValue("#0050e0", "#f3f3f3")}
          bgColor="transparent"
        >
          <Box flex="1" textAlign="center">
            <Text fontFamily="Syne" as={"span"}>
              {data.question}
            </Text>
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>
          <Box margin="0 auto" width="80vw" fontFamily="Syne" border="none">
            {data.panel}
          </Box>
        </AccordionPanel>
      </AccordionItem>
    </Box>
  );
}
