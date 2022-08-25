import React, { useState, useCallback, useEffect } from "react";
import ImageMapper from "react-image-mapper";
import {
  Box,
  Button,
  Text
} from '@chakra-ui/react'

export default function App({sampleObject}) {
  const [showGroundFloorImg, setShowGroundFloorImg] = useState(true);
  const [ButtonActivity, setButtonActivity] = useState(false);

  const [mapAreas, setMapAreas] = useState({
    name: "my-map",
    areas: [
      { id: 5, shape: "circle", coords: [0, 0, 10], preFillColor: "red" }
    ]
  });

  const handleUpdateMapArea = useCallback(
    evt =>
      updateMapArea(5, [sampleObject.x, sampleObject.y, 5]),
    []
  );

  const handleUpdateElevatorMapArea = useCallback(
    evt =>
      updateMapArea(5, [sampleObject.elevatorx, sampleObject.elevatory,5]),
    []
  )

  const updateMapArea = (id, coords) => {
    const areas = mapAreas.areas.map(item =>
      item.id === id ? { ...item, coords } : item
    );
    setMapAreas({
      name: mapAreas.name,
      areas
    });
  };

  useEffect(() => {   
      setShowGroundFloorImg(false);
      if(sampleObject.floor === "Ισόγειο"){
        setButtonActivity(true);
      }
  }, []);  

  return (
    <Box>
      {!showGroundFloorImg && <Box>
                                <Button onClick={() => setShowGroundFloorImg(!showGroundFloorImg) } disabled={ButtonActivity} colorScheme='teal' variant='outline' margin="1rem">Δεν ξέρεις που είναι το κτήριο;</Button>
                                <ImageMapper
                                    src={sampleObject.imageURL}
                                    onLoad={handleUpdateMapArea}
                                    map={mapAreas}
                                    width={350}
                                    hight={350}
                                />
                              </Box>
      }
      {showGroundFloorImg && <Box>
                                <Button onClick={() => setShowGroundFloorImg(!showGroundFloorImg) } colorScheme='teal' variant='outline' margin="1rem">Ξαναδές που είναι η αίθουσα</Button>
                                <Text>Το κοντινότερο ασανσέρ σε σχέση με την αίθουσα είναι αυτό: </Text>
                                <ImageMapper
                                    src={sampleObject.groundFloor}
                                    onLoad={handleUpdateElevatorMapArea}
                                    map={mapAreas}
                                    width={350}
                                    hight={350}
                                  /> 
                                  <Text>Μπείτε σε αυτο το ασανσέρ και πηγαίνετε στον {sampleObject.floor} όροφο</Text>
                              </Box>
        }     
    </Box>
  );
}
