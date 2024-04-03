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

import { Flex, Link, Image, Text, useColorModeValue } from "@chakra-ui/react";

export default function ServicesCard({ srv }) {
  return (
    <Link href={srv.url} isExternal w="100%" display="flex" flexDir="column" alignItems="center">
      <Flex
        display="flex"
        direction="row"
        alignItems="center"
        justifyContent="start"
        _hover={{ bg: "transparent" }}
        w={{
          sm: "100%",
          md: "90%",
          lg: "80%",
          "2xl": "60%",
          "3xl": "50%",
        }}
        h="100%"
        outline="none"
        textAlign="center"
        fontFamily="Syne"
        alt="profPic"
        overflow="hidden"
        gap={3}
        borderRadius="20"
        border="2px"
        mb="1rem"
        borderColor={useColorModeValue("#0050e0", "#f3f3f3")}
      >
        <Image
          src={srv.imgUrl}
          width="60px"
          height="60px"
          borderRadius="full"
          marginLeft="25px"
          marginTop="10px"
          marginBottom="10px"
        />
        <Text
          w="100%"
          display="flex"
          direction="row"
          alignItems="center"
          justifyContent="center"
          fontWeight="bold"
          fontSize={{ sm: 14, md: 16, lg: 18 }}
        >
          {srv.title}
        </Text>
      </Flex>
    </Link>
  );
}
