import React from "react";
import { Categories } from "../assets/categories";
import MenuBox from "../components/MenuBox";
import { Flex, Box, Grid } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";

export default function HomePage() {
  return (
    <Flex
      direction="column"
      align="center"
      justify="start"
      w="100%"
      h="100%"
      pt="3rem"
      gap="3rem"
      px={{ sm: "1rem", md: "0px" }}
    >
      <Box
        bg={useColorModeValue("#0050e0", "#f3f3f3")}
        w={{ sm: "100%", md: "90%", lg: "80%", "2xl": "60%", "3xl": "50%" }}
        className="home-page-box"
        rounded="0.75rem"
      ></Box>
      <Grid
        className="home-grid"
        w={{ sm: "100%", md: "90%", lg: "80%", "2xl": "60%", "3xl": "50%" }}
        gap={{ sm: 4, md: 6, lg: 8 }}
      >
        {Categories.map((category) => (
          <MenuBox category={category} key={category.title} />
        ))}
      </Grid>
    </Flex>
  );
}
