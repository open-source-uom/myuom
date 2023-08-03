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
import { mapData } from "../assets/data/mapData.js";
import MapCords from "../components/maps/MapCords";
import { useEffect } from "react";
import i18n from "../i18n";
import SelectBuildingDropdown from "../components/maps/SelectBuildingDropdown.jsx";
import SelectOfficeDropdown from "../components/maps/SelectOfficeDropdown.jsx";

function MapPage() {
  const [office, setOffice] = useState("");
  const [building, setBuilding] = useState("");
  const [locationObject, setLocationObject] = useState([]);
  const handleChange = (e) => {
    setBuilding(e.target.value);
    setOffice("");
    document.getElementById("title").value = "default";
  };

  useEffect(() => {
    const sampleObject = getSampleObjectByBuilding(building);
    setLocationObject(sampleObject);
  }, [building, office]);

  const getSampleObjectByBuilding = (value) =>
    mapData.filter(
      (data) => data.title === office && data.building + " " + data.dep === value
    );
  return (
    <Box align="center" marginTop="1em" fontFamily="Syne">
      <Stack align="center">
        <SelectBuildingDropdown handleChange={handleChange} />
        <SelectOfficeDropdown building={building} handleTitle={(e) => setOffice(e.target.value)} />

      </Stack>
      {locationObject.map((locObject) => (
        <MapCords sampleObject={locObject} key={locObject.title} />
      ))}
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
