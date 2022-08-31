import {
  Box,
  Grid,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";

function Schedule() {
  return (
    <Box
      marginBottom="1rem"
      borderRadius="20"
      overflow="hidden"
      border="2px"
      borderColor={useColorModeValue("#0050e0", "#f3f3f3")}
      bg={useColorModeValue("#0050e0", "#f3f3f3")}
      color={useColorModeValue("#f3f3f3", "black")}
    >
      <AccordionItem border="none">
        <Text>
          <AccordionButton
            display="flex"
            direction="row"
            alignItems="center"
            justifyContent="start"
            _hover={{ bg: "transparent" }}
            w="100%"
            h="100%"
            outline="none"
            bgColor="transparent"
            color={useColorModeValue("#f3f3f3", "black")}
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
              justifyContent="start"
              fontWeight="bold"
              fontFamily="Syne"
              fontSize={{ sm: 16, md: 18, lg: 20 }}
              color={useColorModeValue("#f3f3f3", "black")}
            >
              Ωράριο
            </Text>
            <AccordionIcon />
          </AccordionButton>
        </Text>
        <AccordionPanel
          pb={4}
          w={"100%"}
          justifyContent="start"
          fontFamily="Syne"
        >
          <Grid
            templateColumns={{ sm: "repeat(1, 1fr)", lg: "repeat(3, 1fr)" }}
            justifyContent="start"
            alignItems="start"
          >
            <Flex direction="column">
              <Text fontWeight="bold">Πρωινό:</Text>
              <Text> 08:00-09:30</Text>
            </Flex>
            <Flex direction="column">
              <Text fontWeight="bold">Μεσημεριανό</Text>
              <Text align="center">
                12:30-15:30<br></br>
                13:00-15:30 (Σ/Κ και ΑΡΓΙΕΣ)
              </Text>
            </Flex>
            <Flex direction="column">
              <Text fontWeight="bold">Βραδινό:</Text>
              <Text> 18:00-20:00</Text>
            </Flex>
          </Grid>
        </AccordionPanel>
      </AccordionItem>
    </Box>
  );
}

export default Schedule;
