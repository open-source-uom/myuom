import React from "react";
import { Categories } from "../assets/categories";
import MenuBox from "../components/MenuBox";
import { SimpleGrid } from "@chakra-ui/react";

export default function HomePage() {
  return (
    <SimpleGrid columns={{ sm: 2, md: 2, lg: 3 }}>
      {Categories.map((category) => (
        <MenuBox category={category} key={category.title} />
      ))}
    </SimpleGrid>
  );
}
