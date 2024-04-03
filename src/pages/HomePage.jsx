/*
  MIT License

  Copyright (c) 2024 Open Source  UOM

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.

  Made by Open Source UoM (https://opensource.uom.gr)

  Project members:
    -Apostolidis
    -Davios
    -Iosifidis
    -Konstantinidis
    -Mpakalis
    -Nasis
    -Omiliades
    -Patsouras
    -Fakidis

*/

import { useState } from "react";
import { Categories } from "../assets/ConfigRoutes";
import MenuBox from "../components/MenuBox";
import { Flex, Grid, Heading } from "@chakra-ui/react";

import { motion } from "framer-motion";
import { useScrollToTopOnLoad } from "../hooks/useScrollToTopOnLoad";

const stagger = {
  inView: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

function sortToPlaceInDefinedOrder(categories) {
  return categories.sort((a, b) => a.position - b.position);
}

function filterOutHiddenPages(categories) {
  return categories.filter(({ hide }) => hide === false);
}

export default function HomePage() {
  const [categoriesListForSearch, setCategoriesListForSearch] =
    useState(Categories);
  const categoriesSorted = sortToPlaceInDefinedOrder(Categories);
  const categoriesSortedAndWithoutHiddenPages =
    filterOutHiddenPages(categoriesSorted);
  useScrollToTopOnLoad();
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
        {categoriesSortedAndWithoutHiddenPages.map((category) => (
          <MenuBox category={category} key={category.title} />
        ))}
      </Grid>
    </Flex>
  );
}
