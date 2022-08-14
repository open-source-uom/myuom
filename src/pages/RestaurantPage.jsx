import React from "react";
import Menu from "../components/Menu";
import data from "../assets/DailyMenu.json";
import {
  Accordion,
  Box,
  Flex,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Schedule from "../components/Schedule";
import dinner from "../assets/dinner.png";
import TodaysMenu from "../components/TodaysMenu";

export default function RestauranPage() {
  return (
    <Flex direction="column" align="center">
      <Box
        bg={useColorModeValue("#0050e0", "#f3f3f3")}
        w={{ sm: "90%", md: "90%", lg: "80%", "2xl": "60%", "3xl": "50%" }}
        className="home-page-box"
        rounded="0.75rem"
        h={"18rem"}
        mx={"1rem"}
        py={"0.5rem"}
      >
        <TodaysMenu />
      </Box>
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
    </Flex>
  );
}
