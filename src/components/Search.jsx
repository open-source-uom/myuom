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

  useEffect(() => {
    console.log(searchField);
    setTimeout(() => {
      if (searchField.length !== 0) {
        document.querySelectorAll(".menu-box").forEach((box) => {
          box.classList.add("search-active");
        });
      } else if (searchField.length === 0) {
        document.querySelectorAll(".menu-box").forEach((box) => {
          box.classList.remove("search-active");
        });
      }
    }, 10);
  }, [searchField]);

  function handleFocus() {
    let homeGrid = document.querySelector(".home-grid");
    let height = homeGrid.offsetHeight;
    homeGrid.style.minHeight = height + "px";
  }

  return (
    <InputGroup
      w={{ sm: "100%", md: "90%", lg: "80%", "2xl": "60%", "3xl": "50%" }}
    >
      <InputLeftElement
        pointerEvents="none"
        children={<SearchIcon color="black" />}
      />
      <Input
        onFocus={handleFocus}
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
