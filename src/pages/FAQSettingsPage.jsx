import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
  Text,
} from "@chakra-ui/react";
import FAQCard from "../components/FAQCard";
import questionsForFAQ from "../assets/questionsForFAQ";

export default function FAQSettingsPage() {
  return (
    <Box bg="white" textAlign={"center"}>
      <Text as="h1" fontSize="3.5ch" fontWeight="bold" marginBottom="1em">
        Συχνές Ερωτήσεις
      </Text>
      <Text>
        Εδώ θα βρείτε απαντήσεις σε ερωτήσεις που ενδέχεται να σας ενδιαφέρουν.
      </Text>
      <Accordion allowToggle>
        {questionsForFAQ.map((data) => {
          return <FAQCard data={data} key={data.id} />;
        })}
      </Accordion>
    </Box>
  );
}
