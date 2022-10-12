/*
  MIT License

  Copyright (c) 2022 Open Source  UOM

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
              <Text fontWeight="bold">Μεσημεριανό:</Text>
              <Text align="center">
                12:30-15:30<br></br>
                13:00-15:30 (Σ/Κ και αργίες)
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
