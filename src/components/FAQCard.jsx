import React from "react";
import {
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Text,
  Box,

} from "@chakra-ui/react";

export default function FAQCard({ data }) {
  return(
    <Box>
     <AccordionItem border="none">
        <AccordionButton
          _hover={{ bg: "rgb(20, 88, 148)" }}
          margin="0 auto"
          width="80vw"
          textAlign="center"
          marginBottom="0.3em"
          borderRadius="20"
          border="none"
          bgColor="rgb(20, 88, 148)"
          color="rgb(252, 180, 12)"
          _expanded={{ bg: "rgb(24, 107, 180)", color: "rgb(227, 160, 2)" }}
        >
          <Box flex="1" textAlign="center">{data.question}</Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>
          <Box  margin="0 auto"
          width="80vw"
          border="none">{data.panel}</Box>
        </AccordionPanel>
      </AccordionItem>
    </Box>

  )
}
