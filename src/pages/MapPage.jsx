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
import MapCords from "../components/MapCords";
import { useEffect } from "react";
import {useTranslation} from "react-i18next"
/* Insert all buildings into an array and convert set to remove duplicates */
// Possibly just add them to a set? Not sure about complexity
const Buildings = () => {
  const arr = mapData.map((info) => info.building + " " + info.dep);
  const options = [...new Set(arr)];
  return options.map((building) => (
    <option value={building} key={building}>
      {building}
    </option>
  ));
};

/* If the dropdown choice is unknown building, add every office there is,
    otherwise filter by what building is chosen */
const Offices = (prop) => {
  const options = mapData.reduce((filtered, option) => {
    if (option.building + " " + option.dep === prop.building)
      filtered.push(option.title);

    return filtered.sort();
  }, []);

  return options.map((info) => (
    <option value={info} key={info}>
      {info}
    </option>
  ));
};

function MapPage() {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [sampleObject, setSampleObject] = useState([]);
  const {t,i18n} = useTranslation()
  const handleChange = (e) => {
    setValue(e.target.value);
    setTitle("");
    document.getElementById("title").value = "default";
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  useEffect(() => {
    const sampleObject = getSampleObjectByBuilding(value);
    setSampleObject(sampleObject);
  }, [value, title]);

  const getSampleObjectByBuilding = (value) =>
    mapData.filter(
      (data) => data.title === title && data.building + " " + data.dep === value
    );

  return (
    <Box align="center" marginTop="1em" fontFamily="Syne">
      <Stack align="center">
        <Select
          w={{ base: "75%", lg: "50%" }}
          justifyContent={"center"}
          onChange={handleChange}
          defaultValue={"default"}
        >
          <option hidden disabled value="default">
           {t("select_building")}
          </option>
          <Buildings />
        </Select>
        <Select
          w={{ base: "75%", lg: "50%" }}
          isDisabled={!value}
          onChange={handleTitle}
          defaultValue={"default"}
          id="title"
        >
          <option hidden value="default">
            {t("select_office")}
          </option>
          <Offices building={value} />
          {/* Get {value} & do whatever you want with it */}
          {/* Another option is to set the value to the object
                        and not have to traverse the json again */}
        </Select>
      </Stack>
      {sampleObject.map((sampleObject) => (
        <MapCords sampleObject={sampleObject} key={sampleObject.title} />
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
        {t("virtual_tour")} 360°
      </Button>
    </Box>
  );
}

export default MapPage;
