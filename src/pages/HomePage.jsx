import React, { useState } from "react";
import { Categories } from "../assets/categories";
import MenuBox from "../components/MenuBox";
import { Flex, Grid, Heading } from "@chakra-ui/react";

import { motion } from "framer-motion";
import Search from "../components/Search";

const stagger = {
  inView: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function HomePage() {
  const [categoriesListForSearch, setCategoriesListForSearch] =
    useState(Categories);
  return (
    <Flex
      direction="column"
      align="center"
      justify="start"
      w="100%"
      h="100%"
      pt="1rem"
      gap="3rem"
      px={{ sm: "1rem", md: "0px" }}
    >
      <Grid
        as={motion.section}
        initial="initial"
        animate="inView"
        variants={stagger}
        className="home-grid"
        w={{ sm: "100%", md: "80%", lg: "60%", "2xl": "60%", "3xl": "50%" }}
        gap={{ sm: 4, md: 6, lg: 8 }}
      >
        {categoriesListForSearch.length === 0 ? (
          <Heading
            gridColumnStart={1}
            gridColumnEnd={3}
            fontSize={{ sm: 11.95, md: 16, lg: 26, xl: 32 }}
            w="100%"
            fontWeight={500}
            fontFamily="Syne"
          >
            Η αναζήτηση δεν επέστρεψε αποτελέσματα.
          </Heading>
        ) : null}
        {categoriesListForSearch.map((category) => (
          <MenuBox category={category} key={category.title} />
        ))}
      </Grid>
    </Flex>
  );
}
