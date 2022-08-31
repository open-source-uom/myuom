import {
  Box,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Accordion,
  Text,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";

function Menu({ data }) {
  return (
    <Box
      marginBottom="1rem"
      borderRadius="20"
      overflow="hidden"
      border="2px"
      borderColor={useColorModeValue("#0050e0", "#f3f3f3")}
    >
      <AccordionItem border="none" w="100%">
        <AccordionButton
          // display="flex"
          direction="row"
          alignItems="center"
          justifyContent="start"
          _hover={{ bg: "transparent" }}
          w="100%"
          h="100%"
          outline="none"
          textAlign="center"
          bgColor="transparent"
          color={useColorModeValue("black", "white")}
          fontFamily="Syne"
          border="none"
          alt="profPic"
          overflow="hidden"
          gap={3}
        >
          <Text
            w="100%"
            display="flex"
            direction="row"
            alignItems="center"
            justifyContent="start"
            fontWeight="bold"
            fontSize={{ sm: 14, md: 16, lg: 18 }}
          >
            {data.day}
          </Text>
          <AccordionIcon />
        </AccordionButton>

        <AccordionPanel pb={5}>
          <Accordion allowToggle>
            {/*Accordion gia geuma*/}
            <Box
              w="100%"
              marginBottom="5"
              borderRadius="20"
              overflow="hidden"
              border="2px"
              borderColor={useColorModeValue("#0050e0", "#f3f3f3")}
            >
              <AccordionItem>
                <AccordionButton
                  display="flex"
                  direction="row"
                  alignItems="center"
                  justifyContent="start"
                  _hover={{ bg: "transparent" }}
                  w="100%"
                  h="100%"
                  outline="none"
                  textAlign="center"
                  bgColor="transparent"
                  color={useColorModeValue("black", "white")}
                  fontFamily="Syne"
                  border="none"
                  alt="profPic"
                  overflow="hidden"
                  gap={3}
                >
                  <Text
                    w="100%"
                    display="flex"
                    direction="row"
                    alignItems="center"
                    justifyContent="start"
                    fontWeight="bold"
                    fontFamily="Syne"
                    fontSize={{ sm: 14, md: 16, lg: 18 }}
                  >
                    Γεύμα
                  </Text>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <Text
                    w="100%"
                    display="flex"
                    direction="row"
                    alignItems="flex-start"
                    justifyContent="center"
                    fontWeight="bold"
                    fontFamily="Syne"
                    fontSize={{ sm: 14, md: 16, lg: 18 }}
                  >
                    {data.gevmaKirios}
                    <br></br>
                    {data.gevmaEidiko}
                    <br></br>
                    {data.gevmaGarnitoura}
                    <br></br>
                    {data.gevmaSalata}
                    <br></br>
                    {data.gevmaEpidorpio}
                  </Text>
                </AccordionPanel>
              </AccordionItem>
            </Box>
            {/*Accordion gia deipno*/}
            <Box
              w="100%"
              marginBottom="5"
              borderRadius="20"
              overflow="hidden"
              border="2px"
              borderColor={useColorModeValue("#0050e0", "#f3f3f3")}
            >
              <AccordionItem>
                <AccordionButton
                  display="flex"
                  direction="row"
                  alignItems="center"
                  justifyContent="100start"
                  _hover={{ bg: "transparent" }}
                  w="100%"
                  h="100%"
                  outline="none"
                  textAlign="center"
                  bgColor="transparent"
                  color={useColorModeValue("black", "white")}
                  fontFamily="Syne"
                  border="none"
                  alt="profPic"
                  overflow="hidden"
                  gap={3}
                >
                  <Text
                    w="100%"
                    display="flex"
                    direction="row"
                    alignItems="center"
                    justifyContent="start"
                    fontWeight="bold"
                    fontFamily="Syne"
                    fontSize={{ sm: 14, md: 16, lg: 18 }}
                  >
                    Δείπνο
                  </Text>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <Text
                    w="100%"
                    display="flex"
                    direction="row"
                    alignItems="flex-start"
                    justifyContent="center"
                    fontWeight="bold"
                    fontFamily="Syne"
                    fontSize={{ sm: 14, md: 16, lg: 18 }}
                  >
                    {data.deipnoKirios}
                    <br></br>
                    {data.deipnoEidiko}
                    <br></br>
                    {data.deipnoGarnitoura}
                    <br></br>
                    {data.deipnoSalata}
                    <br></br>
                    {data.deipnoEpidorpio}
                  </Text>
                </AccordionPanel>
              </AccordionItem>
            </Box>
          </Accordion>
        </AccordionPanel>
      </AccordionItem>
    </Box>
  );
}

export default Menu;
