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
import React, { useState, useEffect } from "react";
import { SearchIcon } from "@chakra-ui/icons";
import {
  Input,
  InputGroup,
  InputLeftElement,
  Box,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Category } from "../assets/ConfigRoutes";

interface SearchProps {
  setCategoriesList: React.Dispatch<React.SetStateAction<Category[]>>;
  categoriesList: Category[];
}

const Search: React.FC<SearchProps> = ({ setCategoriesList, categoriesList }) => {
  const [searchField, setSearchField] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchField(e.target.value);
  };

  const formatString = (string: string): string =>
    string.toLowerCase().normalize("NFD").replace(/\p{Diacritic}| /gu, "");

  useEffect(() => {
    if (!searchField) {
      setCategoriesList(categoriesList);
    } else {
      const categoriesBySearchTerm = categoriesList.filter((cat) =>
        formatString(cat.title).includes(formatString(searchField))
      );
      setCategoriesList(categoriesBySearchTerm);
    }
  }, [searchField, categoriesList, setCategoriesList]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const boxes = document.querySelectorAll<HTMLDivElement>(".menu-box");
      boxes.forEach((box) => {
        if (searchField.length !== 0) {
          box.classList.add("search-active");
        } else {
          box.classList.remove("search-active");
        }
      });
    }, 10);

    return () => clearTimeout(timeoutId);
  }, [searchField]);

  const handleFocus = () => {
    const homeGrid = document.querySelector<HTMLDivElement>(".home-grid");
    if (homeGrid) {
      const height = homeGrid.offsetHeight;
      homeGrid.style.minHeight = height + "px";
    }
  };

  return (
    <InputGroup
      w={{ sm: "100%", md: "80%", lg: "60%", "2xl": "60%", "3xl": "50%" }}
    >
      <InputLeftElement pointerEvents="none">
        <SearchIcon color="black" />
      </InputLeftElement>
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
};

export default Search;
