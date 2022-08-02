import { useEffect, useState, useContext } from "react";
import { Heading } from "@chakra-ui/react";
import GradData from "../assets/Graduation.js";
import { DepartmentContext } from "../contexts/departmentContext";

function GraduationPage() {
  const { depName } = useContext(DepartmentContext);
  const [Gdata, setGdata] = useState("");

  useEffect(() => {
    const GradData = getdataByDepartment(depName);
    setGdata(GradData);
  }, [depName]);

  const getdataByDepartment = (depName) =>
    GradData.find((Gdata) => Gdata.department === depName);

  return (
    <Heading textAlign="center" marginTop="50px">
      Redirecting to {Gdata.departmentURL}...
      {window.location.replace(Gdata.departmentURL)}
    </Heading>
  );
}

export default GraduationPage;
