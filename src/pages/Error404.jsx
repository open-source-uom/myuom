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

import { Box, Text, Button, Flex, VStack, Image, Heading, useColorModeValue } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import i18n from "../i18n";
import ErrorIllustration from "../components/ErrorIllustration";
import myUOMLogo from "../assets/myUOMLogo.png";
import { ArrowForwardIcon, ExternalLinkIcon } from "@chakra-ui/icons";

const MotionFlex = motion(Flex);

function Error404() {
  const navigate = useNavigate();
  const bgColor = useColorModeValue("gray.50", "gray.900");
  const textColor = useColorModeValue("gray.700", "gray.200");
  const secondaryTextColor = useColorModeValue("gray.500", "gray.400");

  return (
    <MotionFlex
      direction="column"
      align="center"
      justify="center"
      minH="80vh"
      bg={bgColor}
      p={4}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <VStack spacing={6} textAlign="center" maxW="600px">
        {/* Logo */}
        <Image src={myUOMLogo} alt="myUOM Logo" boxSize="60px" mb={2} />

        {/* Illustration */}
        <ErrorIllustration />

        {/* Main Text */}
        <Box>
          <Heading
            as="h1"
            size="2xl"
            fontFamily="Syne"
            color={useColorModeValue("#0050e0", "#63b3ed")}
            mb={2}
          >
            {i18n.t("error_404")}
          </Heading>
          <Text
            fontSize={{ base: "xl", md: "2xl" }}
            fontFamily="Syne"
            color={textColor}
            fontWeight="bold"
          >
            {i18n.t("page_not_found")}
          </Text>
          <Text color={secondaryTextColor} fontSize="md" mt={2} maxW="400px" mx="auto">
            Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </Text>
        </Box>

        {/* Actions */}
        <VStack spacing={4} w="100%" pt={4}>
          <Button
            onClick={() => { navigate('/') }}
            bg="#0050e0"
            color="white"
            size="lg"
            px={8}
            borderRadius="full"
            rightIcon={<ArrowForwardIcon />}
            _hover={{ bg: "#003bb8", transform: "translateY(-2px)", boxShadow: "lg" }}
            _active={{ bg: "#002a8a" }}
            transition="all 0.3s"
          >
            {i18n.t("go_to_homepage")}
          </Button>

          <Flex gap={4} fontSize="sm" color={secondaryTextColor}>
            <Button variant="link" color={secondaryTextColor} onClick={() => navigate('/library')}>
              Library
            </Button>
            <Text>•</Text>
            <Button variant="link" color={secondaryTextColor} onClick={() => navigate('/restaurant')}>
              Restaurant
            </Button>
            <Text>•</Text>
            <Button variant="link" color={secondaryTextColor} onClick={() => window.location.href = 'https://www.uom.gr/'}>
              UoM Website <ExternalLinkIcon mx="2px" />
            </Button>
          </Flex>
        </VStack>
      </VStack>
    </MotionFlex>
  );
}

export default Error404;
