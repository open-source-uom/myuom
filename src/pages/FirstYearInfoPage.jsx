import React, { useEffect } from "react";
import { Flex, Text, UnorderedList } from "@chakra-ui/react";
import ScrollToTopArrow from "../components/ScrollToTopArrow";
import {
  EudoxusInfo,
  ContactUomInfo,
  HousingRequestInfo,
  LibrarySignUpInfo,
  OpenEclassSignUpInfo,
  RestaurantSignUpInfo,
  StudentIdInfo,
} from "../articles";

import TableOfContents from "../components/TableOfContents";
export default function FirstYearInfoPage() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  const articlesTitles = [
    "Βιβλία από Εύδοξο",
    "Ακαδημαϊκή Ταυτότητα",
    "Εγγραφή στην Βιβλιοθήκη",
    "Εγγραφή στο Open eClass",
    "Πληροφορίες σίτισης",
    "Πληροφορίες στέγασης",
    "Επικοινωνία",
  ];
  const articleComponents = [
    EudoxusInfo,
    StudentIdInfo,
    LibrarySignUpInfo,
    OpenEclassSignUpInfo,
    RestaurantSignUpInfo,
    HousingRequestInfo,
    ContactUomInfo,
  ];
  return (
    <Flex direction={"column"} position="relative" maxW="100%">
      <Text
        as="h3"
        fontSize="2rem"
        textAlign="center"
        fontWeight="bold"
        noOfLines={[2]}
      >
        Πληροφορίες για πρωτοετείς
      </Text>
      <TableOfContents articlesTitles={articlesTitles} />
      {/* --Article Guides-- */}
      <Flex flexDirection={"column"} rowGap={"3rem"} marginRight={"1rem"}>
        {articleComponents.map((ArticleComponent, index) => {
          return (
            <ArticleWrap
              key={`firstyear-articles-${index}`}
              id={`firstyear-articles-${index}`}
              title={articlesTitles[index]}
            >
              <ArticleComponent />
            </ArticleWrap>
          );
        })}
      </Flex>
      <ScrollToTopArrow />
    </Flex>
  );
}

function ArticleWrap({ id, title, children }) {
  return (
    <UnorderedList
      id={id}
      spacing={"0.75rem"}
      listStyleType="none"
      wordBreak={"break-word"}
    >
      <Text
        fontSize="2xl"
        fontWeight="bold"
        borderBottom={"solid 0.125rem"}
        paddingBottom={"0.5rem"}
      >
        {title}
      </Text>
      <br></br>
      {children}
    </UnorderedList>
  );
}
