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
        <Text fontSize="30px" fontWeight="bold" fontFamily="cursive">
          Menu Εστιατορίου
        </Text>
        <Image src={dinner} width="70px" height="70px" borderRadius="full" />
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
