import { useContext, useEffect } from 'react'
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
        title: "Δεν έχει επιλεγεί τμήμα",
        description: "Παρακαλώ επιλέξτε τμήμα από τις ρυθμίσεις",
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
          Ανακατεύθυνση στο τμήμα
          <a href={GradData.get(depName)} target="_blank" rel="noreferrer">
            {GradData.get(depName)}
          </a>
        </Heading>
      ) : (
        <Heading textAlign="center" marginTop="50px">
          Παρακαλώ επιλέξτε τμήμα από τις ρυθμίσεις.
        </Heading>
      )}
    </Box>
  );

}

