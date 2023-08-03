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

import React, { useState, useCallback, useEffect } from "react";
import ImageMapper from "react-img-mapper";
import { Box, Button, Text, useColorModeValue } from "@chakra-ui/react";
import {useTranslation} from "react-i18next"


export default function App({ sampleObject }) {
  const [showGroundFloorImg, setShowGroundFloorImg] = useState(true);
  const [ButtonActivity, setButtonActivity] = useState(false);
  const [showCorrectText, setShowCorrectText] = useState(false);
  const {t} = useTranslation();
  const [mapAreas, setMapAreas] = useState({
    name: "my-map",
    areas: [
      { id: 5, shape: "circle", coords: [0, 0, 10], preFillColor: "red" },
    ],
  });

  const handleUpdateMapArea = useCallback(
    (evt) => updateMapArea(5, [sampleObject.x, sampleObject.y, 5]),
    []
  );

  const handleUpdateElevatorMapArea = useCallback(
    (evt) =>
      updateMapArea(5, [sampleObject.elevatorx, sampleObject.elevatory, 5]),
    []
  );

  const updateMapArea = (id, coords) => {
    const areas = mapAreas.areas.map((item) =>
      item.id === id ? { ...item, coords } : item
    );
    setMapAreas({
      name: mapAreas.name,
      areas,
    });
  };

  useEffect(() => {
    setShowGroundFloorImg(false);
    if (sampleObject.floor === "Ισόγειο") {
      setButtonActivity(true);
    }
  }, []);

  const HandleColor = () => {
    return useColorModeValue("#f3f3f3", "black");
  };

  const HandleBgColor = () => {
    return useColorModeValue("#0050e0", "#f3f3f3");
  };

  useEffect(() => {
    if(sampleObject.floor === "Ημιόροφο"){
      setShowCorrectText(true);
    }
  },[])

  return (
    <Box fontFamily="Syne">
      {!showGroundFloorImg && (
        <Box>
          <Button
            onClick={() => setShowGroundFloorImg(!showGroundFloorImg)}
            disabled={ButtonActivity}
            variant="outline"
            margin="1rem"
            fontFamily="Syne"
            color={HandleColor}
            bgColor={HandleBgColor}
            _hover={false}
          >
            {t("cant_find_building_prompt")}
          </Button>
          <ImageMapper
            src={sampleObject.imageURL}
            onLoad={handleUpdateMapArea}
            map={mapAreas}
            width={350}
          />
        </Box>
      )}
      {showGroundFloorImg && (
        <Box>
          <Button
            onClick={() => setShowGroundFloorImg(!showGroundFloorImg)}
            variant="outline"
            margin="1rem"
            fontFamily="Syne"
            color={HandleColor}
            bgColor={HandleBgColor}
            _hover={false}
          >
            {t("see_room_again")}
          </Button>
          <Text px="1rem">
            {t("closest_elevator_prompt")}{" "}
          </Text>
          <ImageMapper
            src={sampleObject.groundFloor}
            onLoad={handleUpdateElevatorMapArea}
            map={mapAreas}
            width={350}
          />
          {!showCorrectText && <Text fontFamily="Syne" px="1rem">
           {t("enter_elevator_prompt")}{" "}
            {sampleObject.floor.toLowerCase()} {t("floor")}
          </Text>}
          {showCorrectText && <Text fontFamily="Syne" px="1rem">Μπείτε σε αυτό το ασανσέρ και πηγαίνετε στον {sampleObject.floor.toLowerCase()}</Text>}
        </Box>
      )}
      <Text color="red" fontSize="md" fontFamily="Syne" px="1rem">
        {t("cant_see_room_prompt")}
      </Text>
    </Box>
  );
}
