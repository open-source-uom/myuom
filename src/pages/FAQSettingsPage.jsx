import React from "react";
import { Accordion, Box, Text, VStack } from "@chakra-ui/react";
import FAQCard from "../components/FAQCard";
import data from "../assets/questionsForFAQ";

export default function FAQSettingsPage() {
  return (
    <Box textAlign={"center"}>
      <Box textAlign="center" marginBottom="1em">
        <Text
          as="h1"
          fontSize="3.5ch"
          fontWeight="bold"
          marginBottom="1em"
          paddingTop="10px"
          fontFamily="Syne"
        >
          Συχνές Ερωτήσεις
        </Text>
        <Text padding="15px" fontFamily="Syne">
          Εδώ θα βρείτε απαντήσεις σε ερωτήσεις που ενδέχεται να σας
          ενδιαφέρουν.
        </Text>
      </Box>
      <Accordion allowToggle>
        {data.map((data) => {
          return <FAQCard data={data} key={data.question} />;
        })}
      </Accordion>
    </Box>
  );
}
