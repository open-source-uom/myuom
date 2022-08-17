import React from "react";
import Menu from "../components/Menu";
import data from "../assets/DailyMenu.json";
import { Accordion, Box, Image, Text } from "@chakra-ui/react";
import Schedule from "../components/Schedule";
import dinner from "../assets/dinner.png";

export default function RestauranPage() {
  return (
    <Box textAlign={"center"}>
      <Box align="center">
        <Text
          mr={"2rem"}
          mb="1rem"
          // w="100%"
          w={"90%"}
          display="flex"
          direction="row"
          justifyContent="end"
          fontWeight="bold"
          fontFamily="Syne"
          fontSize={{ sm: 20, md: 24, lg: 26 }}
        >
          Όλες οι μέρες
        </Text>
      </Box>
      <Accordion allowToggle>
        {data.map((data) => {
          return <Menu data={data} key={data.day} />;
        })}
        <Schedule />
      </Accordion>
    </Box>
  );
}
