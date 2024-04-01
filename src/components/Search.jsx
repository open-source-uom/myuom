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

import { useState } from "react";
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
      w={{ sm: "100%", md: "80%", lg: "60%", "2xl": "60%", "3xl": "50%" }}
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
