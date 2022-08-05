import React, { useContext, useEffect } from "react";
import { DepartmentContext } from "../contexts/departmentContext";
import { GradData } from "../assets/Graduation";
import { Heading, useToast, Box } from "@chakra-ui/react";
export default function GraduationPage() {
  const { depName } = useContext(DepartmentContext);
  const toast = useToast();

  //Toast and Window.open action moved to useEffect so that they run on client-side and dont create any problems.

  useEffect(() => {
    if (!depName) {
      toast({
        title: "Department Not Selected",
        description: "Please Select a Department From The Settings",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
    }
    if (GradData.get(depName)) window.open(GradData.get(depName));
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
