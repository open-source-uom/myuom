import { Flex, Text, chakra } from "@chakra-ui/react";

export default function TableOfContents({ articlesTitles }) {
  function ContentLink({ title, indexToAnchor }) {
    return (
      <chakra.a
        marginBottom={"1rem"}
        //gia to scroll sto article
        href={`#firstyear-articles-${indexToAnchor}`}
        border={"solid 2px"}
        // xreiazotan kati ligotero apo 1/n
        flex={{ base: "0 0 45%", md: "0 0 31%", lg: "0 0 23%", xl: "0 0 19%" }}
        borderRadius={"0.5rem"}
        padding={"0.5rem"}
        width={"max-content"}
        color="yellow.400"
        _visited={{ color: "purple" }}
      >
        {title}
      </chakra.a>
    );
  }

  return (
    <Flex
      flexDirection={{ base: "column" }}
      marginTop={"3rem"}
      mx={"1rem"}
      alignItems="center"
    >
      <Text
        as="p"
        fontSize="1.4rem"
        borderBottom={"solid 2px"}
        marginBottom="1rem"
        textAlign={"center"}
        width={"max-content"}
      >
        Περιεχόμενα
      </Text>
      <Flex
        flexDirection={"row"}
        gap={"0.75rem"}
        flexWrap={"wrap"}
        alignItems={"flex-start"}
      >
        {articlesTitles.map((title, index) => {
          return (
            <ContentLink
              key={`links-to-articles-${index}`}
              title={title}
              indexToAnchor={index}
            />
          );
        })}
      </Flex>
    </Flex>
  );
}
