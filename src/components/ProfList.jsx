import {
  VStack,
  Input,
  InputLeftElement,
  InputGroup,
  useColorModeValue,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import React, { useContext, useEffect, useState } from "react";
import ProfComponent from "./ProfCard.jsx";
import profData from "../assets/professors.js";
import { DepartmentContext } from "../contexts/departmentContext";

export default function ProfList() {
  const { depName } = useContext(DepartmentContext);
  const [profArray, setProfArray] = useState([]);
  const [filteredProfArray, setFilteredProfArray] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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

  return (
    <VStack>
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
          placeholder="Εισάγετε όνομα, επίθετο ή email"
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
        <h1>Not found.</h1>
      )}
    </VStack>
  );
}
