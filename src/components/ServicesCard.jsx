import { Flex, Link, Image, Text, useColorModeValue } from "@chakra-ui/react";

export default function ServicesCard({ srv }) {
  return (
    <Link href={srv.url} isExternal>
      <Flex
        display="flex"
        direction="row"
        alignItems="center"
        justifyContent="start"
        _hover={{ bg: "transparent" }}
        w="100%"
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
