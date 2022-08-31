import {
  Flex,
  ListItem,
  Text,
  UnorderedList,
  useColorModeValue,
  chakra,
} from "@chakra-ui/react";

export default function FoodMenuList({
  mainDish,
  specialDish,
  salad,
  dessert,
}) {
  return (
    <UnorderedList mb="1rem">
      <ListItem>
        <Text as="span" noOfLines={[]}>
          <chakra.b marginRight={"1rem"}>Κυρίως:</chakra.b>
          {mainDish}
        </Text>
      </ListItem>
      <ListItem>
        <Text as="span">
          <chakra.b marginRight={"1rem"}>Χορτοφαγικό:</chakra.b>
          {specialDish}
        </Text>
      </ListItem>
      <ListItem>
        <Text as="span">
          <chakra.b marginRight={"1rem"}>Σαλάτα:</chakra.b>
          {salad}
        </Text>
      </ListItem>
      <ListItem>
        <Text as="span">
          <chakra.b marginRight={"1rem"}>Γλυκό:</chakra.b>
          {dessert}
        </Text>
      </ListItem>
    </UnorderedList>
  );
}
