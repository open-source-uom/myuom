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

import React, { useState } from "react";
import ImageMapper from "react-img-mapper";
import { Box, Button, Text, useColorModeValue } from "@chakra-ui/react";
import i18n from "../../i18n";

export default function App({ sampleObject }) {
  //ground floor image is needed to show the user which elevator he will get in
  const [showGroundFloorImg, setShowGroundFloorImg] = useState(false);
  const [mapAreas, setMapAreas] = useState({
    name: "my-map",
    areas: [
      { id: 5, shape: "circle", coords: [0, 0, 10], preFillColor: "red" },
    ],
  });

  //use Callbacks here are not necessary,might be performance wise
  const handleUpdateMapArea =
    (evt) => updateMapArea(5, [sampleObject.x, sampleObject.y, 5])

  const handleUpdateElevatorMapArea =
    (evt) =>
      updateMapArea(5, [sampleObject.elevatorx, sampleObject.elevatory, 5])

  const updateMapArea = (id, coords) => {
    const areas = mapAreas.areas.map((item) =>
      item.id === id ? { ...item, coords } : item
    );
    setMapAreas({
      name: mapAreas.name,
      areas,
    });
  };

  const shouldOmitFloor = sampleObject.floor === i18n.t("semi_floor");
  const shouldDisableFindBuildingBtn = sampleObject.floor === i18n.t("ground_floor");
  //it might be sensible to separate those two into different components
  //one for the actual floor and one for the groundfloor with the elevator
  return (
    <Box>
      <Box>
        <Button
          onClick={() => setShowGroundFloorImg(prev => !prev)}
          variant="outline"
          disabled={shouldDisableFindBuildingBtn}
          margin="1rem"
          color={useColorModeValue("#f3f3f3", "black")}
          bgColor={useColorModeValue("#0050e0", "#f3f3f3")}
          _hover={false}
        >

          {!showGroundFloorImg ? i18n.t("cant_find_building_prompt") : i18n.t("see_room_again")}
        </Button>
        {
          showGroundFloorImg && <Text px="1rem">
            {i18n.t("closest_elevator_prompt")}{" "}
          </Text>
        }

        <ImageMapper
          src={showGroundFloorImg ? sampleObject.groundFloor : sampleObject.imageURL}
          onLoad={showGroundFloorImg ? handleUpdateElevatorMapArea : handleUpdateMapArea}
          map={mapAreas}
          width={350}
        />
        {
          showGroundFloorImg && <Text pt={"0.125rem"} px="1rem">{i18n.t("enter_elevator_prompt")}{" "}
            {sampleObject.floor.toLowerCase()} {!shouldOmitFloor && i18n.t("floor")}
          </Text>
        }
        <Text color="red" fontSize="md" fontFamily="Syne" px="1rem">
          {i18n.t("cant_see_room_prompt")}
        </Text>
      </Box>
    </Box>

  );
}
