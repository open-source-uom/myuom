/*
  MIT License

  Copyright (c) 2024 Open Source  UOM

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
import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import MapCords from "../components/maps/MapCords";
import SelectBuildingDropdown from "../components/maps/SelectBuildingDropdown";
import SelectOfficeDropdown from "../components/maps/SelectOfficeDropdown";
import { useDepName, useMapData } from "../hooks";
import i18n from "../i18n";

interface MapPageProps {}

const MapPage: React.FC<MapPageProps> = () => {
  const { depName } = useDepName();
  const {
    isSpecificForDepartment,
    categoryOptions,
    locations,
    setSelectedLocation,
    setSelectedLocationCategory,
    locationData,
    selectedLocation,
    selectedLocationCategory,
  } = useMapData();
  console.log("loca", locations);

  const departmentHint = useBreakpointValue({
    base: i18n.t(depName),
    md: i18n.t("current_department") + i18n.t(depName),
  });

  useEffect(() => {
    if (isSpecificForDepartment) {
      resetSelectedLocation();
    }
  }, [depName]);

  function resetSelectedLocation() {
    setSelectedLocation("");
    setSelectedText(i18n.t("select_location")||"");
  }

  const handleLocationCategoryChange = (selection: string) => {
    setSelectedLocationCategory(selection);
    resetSelectedLocation();
  };

  const [selectedText, setSelectedText] = useState<string>(i18n.t("select_location")||"");

  return (
    <Box sx={{"text-align": "-webkit-center"}} marginTop="1em" fontFamily="Syne">
      <Stack align="center">
        <SelectBuildingDropdown
          handleChange={handleLocationCategoryChange}
          newOptions={categoryOptions}
        />
        {isSpecificForDepartment && depName ? (
          <Text color={"#bcb6c4"} fontSize={"sm"}>
            {departmentHint}
          </Text>
        ) : null}
        <SelectOfficeDropdown
          locations={locations}
          handleChange={(selection: string) => setSelectedLocation(selection)}
          selectedText={selectedText}
          setSelectedText={setSelectedText}
        />
      </Stack>
      {selectedLocation ? <MapCords {...locationData} /> : null}
      <Button
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
};

export default MapPage;