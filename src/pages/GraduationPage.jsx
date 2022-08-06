import React, { useContext, useEffect } from 'react'
import { DepartmentContext } from '../contexts/departmentContext'
import { GradData } from '../assets/Graduation'
import { Heading, Box, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function GraduationPage() {

  const { depName } = useContext(DepartmentContext)
  const toast = useToast()
  const navigate = useNavigate()

  useEffect(() => {
    if (!depName) {
      toast({
        title: "Department Not Selected",
        description: "Please Select a Department From The Settings",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    }
    if (GradData.get(depName)) {
      window.open(GradData.get(depName));
      navigate("/")
    }
    
  }, [depName]);


  //<Text align={'center'}> SELECT DEPARTMENT</Text>
  return (
    <Box>
      {GradData.get(depName) ? (
        <Heading textAlign="center" marginTop="50px">
          Redirecting to
          <a href={GradData.get(depName)} target="_blank" rel="noreferrer">
            {GradData.get(depName)}
          </a>
        </Heading>
      ) : (
        <Heading textAlign="center" marginTop="50px">
          Please select a department from settings.
        </Heading>
      )}
    </Box>
  );

}

