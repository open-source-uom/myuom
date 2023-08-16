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
  Box,
  Button,
  Select,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import MapCords from "../components/maps/MapCords";
import i18n from "../i18n";
import SelectBuildingDropdown from "../components/maps/SelectBuildingDropdown.jsx";
import SelectOfficeDropdown from "../components/maps/SelectOfficeDropdown.jsx";
import { merged_map_data } from "../assets/data/map_data/merged_map_data.js";

const getRequiredDataForMapWithOfficeAndDepartment = (department, office) => {
  console.log("Params: ", department, office,)
  if (!department || !office) return;
  console.log(department, office)
  let myLocationObject = merged_map_data.find(
    (buildingObj) =>
      buildingObj.building === department
  )

  console.log("The data: ", office.floor, office.office_label)
  let locObject = myLocationObject?.map_data[Number(office.floor)];
  let officeData = locObject.offices.find(
    (officeObj) => officeObj.title === office.office_label
  );
  //extra case for primary building
  let ground_floor_elevator_x = myLocationObject.ground_floor_elevator_x;
  let ground_floor_elevator_y = myLocationObject.ground_floor_elevator_y;

  if (myLocationObject.depname == "") {
    // case for semi-floor,ground-floor,first-floor
    ground_floor_elevator_x = locObject.ground_floor_elevator_x;
    ground_floor_elevator_y = locObject.ground_floor_elevator_y;
  }
  return { floor: locObject.floor, floorImgUrl: locObject.imageURL, marked_x: officeData.marked_position_x, marked_y: officeData.marked_position_y, ground_img_url: "https://www.uom.gr/site/images/katopseis/esot_isogeio.jpg", ground_floor_elevator_x, ground_floor_elevator_y }
}

console.log(i18n.t("primary_building"))




function MapPage() {
  const [office, setOffice] = useState();
  const [building, setBuilding] = useState("");
  const handleChange = (e) => {
    setBuilding(e.target.value);
    setOffice("");
    document.getElementById("title").value = "default";
  };
  const handleOfficeChange = (e) => {
    console.log("Changing value to: ", e.target.value)
    const [floor, office_label] = e.target.value.split(" ");
    setOffice({ floor: Number(floor), office_label: office_label });
  }

  const result = getRequiredDataForMapWithOfficeAndDepartment(building, office);
  console.log("rerender")
  return (
    <Box align="center" marginTop="1em" fontFamily="Syne">
      <Stack align="center">
        <SelectBuildingDropdown handleChange={handleChange} />
        <SelectOfficeDropdown building={building} handleTitle={handleOfficeChange} />

      </Stack>
      {
        result && <MapCords {...result} />
      }
      {/* <MapCords sampleObject={locObject} /> */}
      <Button
        _hover={false}
        bgColor={useColorModeValue("#0050e0", "#f3f3f3")}
        color={useColorModeValue("#f3f3f3", "black")}
        variant="outline"
        margin="1rem"
        onClick={(e) => {
          window.open(
            "https://www.uom.gr/about/eikonikh-perihghsh-360-sup-o-sup-sto-panepisthmio-makedonias"
          );
        }}
      >
        {i18n.t("virtual_tour")} 360°
      </Button>
    </Box>
  );
}

export default MapPage;
