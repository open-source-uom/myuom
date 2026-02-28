/*
  MIT License

  Copyright (c) 2025 Open Source  UOM

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

import { useState, useEffect } from "react";
import { SearchIcon, SmallCloseIcon } from "@chakra-ui/icons";
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Box,
  Text,
  List,
  ListItem,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";

const MotionSearchIcon = motion(SearchIcon);

export default function Search({ setCategoriesList, categoriesList }) {
  const [searchField, setSearchField] = useState("");
  const [filteredCount, setFilteredCount] = useState(categoriesList.length);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleChange = (e) => {
    setSearchField(e.target.value);
    setShowSuggestions(true);
  };

  const handleClear = () => {
    setSearchField("");
    setCategoriesList(categoriesList);
    setFilteredCount(categoriesList.length);
    setShowSuggestions(false);
  };

  const formatString = (string) =>
    string
      .toLowerCase()
      .normalize("NFD")
      .replace(/\p{Diacritic}| /gu, "");

  // Filter categories whenever searchField changes
  useEffect(() => {
    if (!searchField) {
      setCategoriesList(categoriesList);
      setFilteredCount(categoriesList.length);
      return;
    }
    const categoriesBySearchTerm = categoriesList.filter((cat) => {
      return formatString(cat.title).includes(formatString(searchField));
    });
    setCategoriesList(categoriesBySearchTerm);
    setFilteredCount(categoriesBySearchTerm.length);
  }, [searchField, categoriesList, setCategoriesList]);

  // Handle visual class for grid animation (legacy/existing logic)
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
    let homeGrid = document.querySelector(".home-grid"); // Note: might be null if removed in previous step, checking existence
    if (homeGrid) {
      let height = homeGrid.offsetHeight;
      homeGrid.style.minHeight = height + "px";
    }
    setShowSuggestions(true);
  }

  const suggestions = categoriesList.filter((cat) =>
    formatString(cat.title).includes(formatString(searchField))
  ).slice(0, 5); // Limit suggestions

  const suggestionsBg = useColorModeValue("white", "gray.700");
  const suggestionsHoverBg = useColorModeValue("gray.100", "gray.600");

  return (
    <Box w={{ sm: "100%", md: "80%", lg: "60%", "2xl": "60%", "3xl": "50%" }} position="relative" zIndex={10}>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <MotionSearchIcon
            color="black"
            animate={{ scale: searchField ? 1.2 : 1 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </InputLeftElement>
        <Input
          onFocus={handleFocus}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)} // Delay to allow click
          color="black"
          type="text"
          placeholder=""
          value={searchField}
          onChange={handleChange}
          borderRadius={"2rem"}
          focusBorderColor="blue.400"
          _focus={{ boxShadow: "0 0 0 3px rgba(66, 153, 225, 0.6)" }}
          bg="white"
        />
        {searchField && (
          <InputRightElement cursor="pointer" onClick={handleClear}>
            <SmallCloseIcon color="gray.500" />
          </InputRightElement>
        )}
      </InputGroup>

      {/* Results Count */}
      {searchField && (
        <Text fontSize="xs" mt={1} ml={4} color="gray.500">
          Found {filteredCount} result{filteredCount !== 1 ? "s" : ""}
        </Text>
      )}

      {/* Autocomplete Suggestions */}
      <AnimatePresence>
        {showSuggestions && searchField && suggestions.length > 0 && (
          <Box
            as={motion.div}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            position="absolute"
            top="100%"
            left={0}
            right={0}
            mt={2}
            bg={suggestionsBg}
            borderRadius="md"
            boxShadow="lg"
            overflow="hidden"
          >
            <List spacing={0}>
              {suggestions.map((cat) => (
                <ListItem
                  key={cat.title}
                  px={4}
                  py={2}
                  cursor="pointer"
                  _hover={{ bg: suggestionsHoverBg }}
                  onClick={() => {
                    setSearchField(cat.title);
                    setShowSuggestions(false);
                  }}
                >
                  <Text fontSize="sm" color={useColorModeValue("black", "white")}>{cat.title}</Text>
                </ListItem>
              ))}
            </List>
          </Box>
        )}
      </AnimatePresence>
    </Box>
  );
}
