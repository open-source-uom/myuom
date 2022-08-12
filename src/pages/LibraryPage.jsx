import React from "react";
import { Flex, Box, Text, Button, Image, HStack } from "@chakra-ui/react";
import { TimeIcon, PhoneIcon } from "@chakra-ui/icons";

export default function LibraryPage() {
  //thelw sto desktop na mikrynei h eikona kai na mpoun ta koutia dipla dipla
  return (
    <Flex flexDirection="column" alignItems="center">
      <Image
        src="https://www.uom.gr/assets/site/public/nodes/4021/2038-LibraryLogo_4slider-2.jpg"
        alt="uom-library-logo"
        // width="70%"
        height="20%"
        alignSelf={"center"}
        objectFit={"contain"}
        px="1rem"
      />
      {/* Wrapper container */}
      <Flex
        textAlign="center"
        flexDirection={{ base: "column", lg: "row" }}
        alignItems="center"
        justifyContent={"center"}
        width="100%"
      >
        {/* Ωράριο */}
        <Box
          border="2px"
          borderRadius="1rem"
          borderColor="grey.200"
          marginRight={{ base: "0", lg: "1rem" }}
          marginBottom={{ base: "1rem", lg: "0" }}
          marginTop="1rem"
          px="1.5rem"
          py="1.5rem"
          width={{ base: "initial", lg: "40%" }}
          height={{ base: "initial", lg: "40%!important" }}
        >
          <Flex
            fontWeight="bold"
            flexDirection={"column"}
            alignItems="center"
            rowGap={{ base: "0.5rem", lg: "1.5rem" }}
          >
            <HStack
              marginBottom={"1rem"}
              paddingBottom="0.5rem"
              px="1rem"
              border={"solid 2px "}
              borderTop={"none"}
            >
              <Text as="span">Ωράριο</Text>
              <TimeIcon w={39} h={39} />
            </HStack>
            <Text> 04-29/07/2022 & 22-26/08/2022 </Text>

            <Text> Δευτέρα - Τετάρτη: 08:00-17:00 </Text>
            <Text> Τετάρτη - Παρασκευή: 08:00-14:30 </Text>
            <Text> Σάββατο: ΚΛΕΙΣΤΑ </Text>
          </Flex>
        </Box>
        {/* Επικοινωνία  */}
        <Box
          border="2px"
          borderRadius="1rem"
          borderColor="grey.200"
          marginLeft={{ base: "0", lg: "1rem" }}
          marginTop={"1rem"}
          marginBottom={"1rem"}
          py="2rem"
          px="3rem"
          width={{ base: "initial", lg: "40%" }}
          height={{ base: "initial", lg: "40%" }}
        >
          {/* Ligo doubt pws akrivws voithaei o TK kai h odos  */}
          <Flex
            fontWeight="bold"
            flexDirection={"column"}
            alignItems="center"
            rowGap={"0.75rem"}
          >
            <HStack
              marginBottom={"1rem"}
              paddingBottom="0.5rem"
              px="1rem"
              border={"solid 2px "}
              borderTop={"none"}
            >
              <Text as="span">Επικοινωνία</Text>
              <PhoneIcon w={39} h={39} />
            </HStack>
            <Text> Ημιώροφος </Text>
            {/* <Text> Εγνατίας, 156 </Text>
            <Text> ΤΚ: 54636 </Text> pio poly san subtext */}
            <Text textDecoration={"underline"}> Τηλέφωνα Επικοινωνίας: </Text>
            <Text> (2310) 891751</Text>
            <Text> (2310) 891752 </Text>
            <Text> (2310) 891118 </Text>
            <Text> (2310) 891137</Text>
            <Button
              // xreiazetai to !important logw VStack mlln
              marginTop="1rem !important"
              textAlign="center"
              colorScheme="green"
              variant="solid"
              onClick={(e) => {
                window.open("https://www.lib.uom.gr/index.php/el/");
              }}
              justifyContent="center"
            >
              Ιστοσελίδα Βιβλιοθήκης
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
}
