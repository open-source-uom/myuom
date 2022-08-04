import { useEffect, useState, useContext } from "react";
import { Heading, Toast, useToast } from "@chakra-ui/react";
import GradData from "../assets/Graduation.js";
import { DepartmentContext } from "../contexts/departmentContext";
import { useDisclosure } from "@chakra-ui/react";
import { DEPARTMENTS } from "../assets/DepNames";

function GraduationPage() {
  const { depName } = useContext(DepartmentContext);
  const [Gdata, setGdata] = useState([]);

  useEffect(() => {
    const filteredData = getdataByDepartment(depName);
    setGdata(filteredData);
  }, [depName]);

  const getdataByDepartment = (depName) => {
    let findGradData = GradData.find(
      (gData) => gData.departmentName === depName
    );
    return findGradData;
  };

  {
    /*const showToast = () =>
    toast({
      title: "Account created.",
      description: "We've created your account for you.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });*/
  }

  // function redirectToPage() {
  //   //console.log(Gdata.departmentURL);
  //   //window.location.replace(JSON.stringify(Gdata.departmentURL));
  // }

  return (
    <>
      {!depName ? (
        <Heading textAlign="center" marginTop="50px">
          Select department from settings
        </Heading>
      ) : (
        <Heading textAlign="center" marginTop="50px">
          Redirecting to {Gdata.departmentURL}...
          {window.location.replace(Gdata.departmentURL)}
        </Heading>
      )}
    </>
  );
}

export default GraduationPage;
