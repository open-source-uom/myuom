import React, { useState, useCallback, useEffect } from "react";
import ImageMapper from "react-image-mapper";
import { Box, Button, Text } from "@chakra-ui/react";

export default function App({ sampleObject }) {
  const [showGroundFloorImg, setShowGroundFloorImg] = useState(true);
  const [ButtonActivity, setButtonActivity] = useState(false);

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
          >
            Δεν γνωρίζετε που βρίσκεται το κτήριο;
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
          >
            Ξαναδείτε που είναι η αίθουσα
          </Button>
          <Text px="1rem">
            Το κοντινότερο ασανσέρ σε σχέση με την αίθουσα είναι αυτό:{" "}
          </Text>
          <ImageMapper
            src={sampleObject.groundFloor}
            onLoad={handleUpdateElevatorMapArea}
            map={mapAreas}
            width={350}
          />
          <Text fontFamily="Syne" px="1rem">
            Μπείτε σε αυτο το ασανσέρ και πηγαίνετε στον{" "}
            {sampleObject.floor.toLowerCase()} όροφο
          </Text>
        </Box>
      )}
      <Text color="red" fontSize="md" fontFamily="Syne" px="1rem">
        Σε περίπτωση που δεν βλέπετε την αίθουσα μπορείτε να κάνετε zoom
      </Text>
    </Box>
  );
}
