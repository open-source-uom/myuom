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
