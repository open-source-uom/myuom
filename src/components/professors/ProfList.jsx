/*
  MIT License

  Copyright (c) 2022 Open Source  UOM

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

import {
  VStack,
  Input,
  InputLeftElement,
  InputGroup,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useContext, useEffect, useState } from "react";
import ProfComponent from "./ProfCard.jsx";
import SecrCard from "../SecrCard.jsx";
import profData from "../../assets/data/professors.js";
import secrData from "../../assets/data/secretaries.js";
import { DepartmentContext } from "../../contexts/departmentContext.jsx";
import { useTranslation } from 'react-i18next';

export default function ProfList() {
  const { t, i18n } = useTranslation();
  const { depName } = useContext(DepartmentContext);
  const [profArray, setProfArray] = useState([]);
  const [filteredProfArray, setFilteredProfArray] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [secretary, setSecretary] = useState([]);

  useEffect(() => {
    const professorList = getProfessorsByDepartment(depName);
    setProfArray(professorList);
  }, [depName]);

  useEffect(() => {
    const professorList = getProfessorsByDepartment(depName);
    setProfArray(professorList);
    setFilteredProfArray(professorList);
  }, []);

  useEffect(() => {
    const specificSecretary = getSecretaryFromDepartment(depName);
    setSecretary(specificSecretary);
  }, [depName]);

  useEffect(() => {
    if (searchTerm) {
      let temp_filtered = profArray.filter((prof) => {
        const formattedFirstName = formatString(prof.fname);
        const formattedLastName = formatString(prof.lname);
        const formattedSearchTerm = formatString(searchTerm);
        const searchTermExists =
          formattedFirstName
            .concat(formattedLastName)
            .includes(formattedSearchTerm) ||
          formattedLastName
            .concat(formattedFirstName)
            .includes(formattedSearchTerm);

        if (searchTermExists) return prof;

        if (prof.email.includes(searchTerm)) return prof;

        return null;
      });
      setFilteredProfArray(temp_filtered);
    } else setFilteredProfArray(profArray);
  }, [searchTerm, profArray]);

  const formatString = (string) =>
    string
      .toLowerCase()
      .normalize("NFD")
      .replace(/\p{Diacritic}| /gu, "");

  const getProfessorsByDepartment = (depName) =>
    profData.filter((prof) => prof.department === depName);

  const onTextChangeHandler = (e) => {
    setSearchTerm(e.target.value);
  };

  const getSecretaryFromDepartment = (depName) =>
    secrData.find((data) => data.name === depName);

  return (
    <VStack>
      {/* <input type="text" onChange={onTextChangeHandler} /> */}
      <SecrCard data={secretary} key={secretary.tel} />
      <InputGroup w="100%" mb="1rem">
        <InputLeftElement
          pointerEvents="none"
          children={
            <SearchIcon color={useColorModeValue("black", "#f3f3f3")} />
          }
        />
        <Input
          fontFamily="Syne"
          type="text"
          placeholder={t("searchProf")}
          onChange={onTextChangeHandler}
          borderRadius={"2rem"}
          focusBorderColor="initial"
          color={useColorModeValue("black", "#f3f3f3")}
        />
      </InputGroup>

      {filteredProfArray.length ? (
        filteredProfArray.map((prof) => (
          <ProfComponent prof={prof} key={prof.tel} />
        ))
      ) : (
        <Text as="h1" fontFamily="Syne">
          {t("noResults")}
        </Text>
      )}
    </VStack>
  );
}
