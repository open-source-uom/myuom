import { Flex, Button, Link, Image, Text } from "@chakra-ui/react";

export default function ServicesCard({ srv }) {
  return (
    <Flex
      gap="10"
      margin="0 auto"
      marginBottom="25px"
      width="80vw"
      textAlign="center"
      bgColor="rgb(20, 88, 148)"
      color="rgb(252, 180, 12)"
      borderRadius="20"
      border="none"
      alt="servCard"
      overflow="hidden"
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
      <Text flex="2" marginTop="30px" fontWeight="bold">
        {srv.title}
      </Text>
      <Link href={srv.url} isExternal>
        <Button
          size="xs"
          marginTop="30px"
          marginRight="25px"
          bgColor="rgb(252, 180, 12)"
          color="rgb(20, 88, 148)"
        >
          Μεταβείτε στην ιστοσελίδα
        </Button>
      </Link>
    </Flex>
  );
}
