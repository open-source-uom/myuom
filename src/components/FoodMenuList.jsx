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
  console.log(mainDish, specialDish, salad, dessert);
  return (
    <UnorderedList mb="1rem">
      <ListItem>
        <Text as="span" noOfLines={[]}>
          <chakra.u marginRight={"1rem"}>Κυρίως:</chakra.u>
          {mainDish}
        </Text>
      </ListItem>
      <ListItem>
        <Text as="span">
          <chakra.u marginRight={"1rem"}>Χορτοφαγικό:</chakra.u>
          {specialDish}
        </Text>
      </ListItem>
      <ListItem>
        <Text as="span">
          <chakra.u marginRight={"1rem"}>Σαλάτα:</chakra.u>
          {salad}
        </Text>
      </ListItem>
      <ListItem>
        <Text as="span">
          <chakra.u marginRight={"1rem"}>Γλυκό:</chakra.u>
          {dessert}
        </Text>
      </ListItem>
    </UnorderedList>
  );
}
