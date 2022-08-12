import React, { useState } from "react";
import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useEffect } from "react";
export default function Search({ setCategoriesList, categoriesList }) {
  const [searchField, setSearchField] = useState("");
  const handleChange = (e) => {
    setSearchField(e.target.value);
  };
  const formatString = (string) =>
    string
      .toLowerCase()
      .normalize("NFD")
      .replace(/\p{Diacritic}| /gu, "");
  useEffect(() => {
    if (!searchField) setCategoriesList(categoriesList);
    const categoriesBySearchTerm = categoriesList.filter((cat) => {
      return formatString(cat.title).includes(formatString(searchField));
    });
    setCategoriesList(categoriesBySearchTerm);
  }, [searchField]);
  return (
    <InputGroup
      w={{ sm: "100%", md: "90%", lg: "80%", "2xl": "60%", "3xl": "50%" }}
    >
      <InputLeftElement
        pointerEvents="none"
        children={<SearchIcon color="black" />}
      />
      <Input
        color="black"
        type="text"
        placeholder=""
        onChange={handleChange}
        borderRadius={"2rem"}
        focusBorderColor="initial"
        bg="white"
      />
    </InputGroup>
  );
}
