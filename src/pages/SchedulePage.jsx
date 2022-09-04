import { useContext, useEffect } from "react";
import { DepartmentContext } from "../contexts/departmentContext";
import { schedulesData } from "../assets/ScheduleLink";
import { Heading, Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function SchedulePage({ examsProp, semesterProp }) {
  const { depName } = useContext(DepartmentContext);
  const navigate = useNavigate();

  const redirectTo = (link) => {
    window.open(link);
    navigate("/");
  };

  useEffect(() => {
    let scheduleData = schedulesData.get(depName);

    if (examsProp) {
      redirectTo(scheduleData.exam);
    }

    if (semesterProp) {
      redirectTo(scheduleData.semester);
    }
  }, [depName]);

  //<Text align={'center'}> SELECT DEPARTMENT</Text>
  return (
    <Box>
      {schedulesData.get(depName) ? (
        <Heading textAlign="center" marginTop="50px">
          Γίνεται ανακατεύθυνση...
        </Heading>
      ) : (
        <Heading textAlign="center" marginTop="50px">
          Παρακαλώ επιλέξτε τμήμα από τις ρυθμίσεις.
        </Heading>
      )}
    </Box>
  );
}
