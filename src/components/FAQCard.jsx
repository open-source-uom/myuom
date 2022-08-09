import React from "react";
import {
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Text,

} from "@chakra-ui/react";

export default function FAQCard({ data }) {
  <AccordionItem border="none">
    <AccordionButton
      _hover={{ bg: "rgb(20, 88, 148)" }}
      σ
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
      <Text>{data.question}</Text>
      <AccordionIcon />
    </AccordionButton>
    <AccordionPanel>
      <Text>{data.panel}</Text>
    </AccordionPanel>
  </AccordionItem>;
}
