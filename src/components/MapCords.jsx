import React, { useState, useCallback, useEffect } from "react";
import ImageMapper from "react-image-mapper";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  AccordionIcon,
  Box,
  useDisclosure,
  Collapse,
  Button,
  Text
} from '@chakra-ui/react'

export default function App({sampleObject}) {
  //const [query, setQuery] = useState(1);
  const [showMessage, setShowMessage] = useState(true);

  const [mapAreas, setMapAreas] = useState({
    name: "my-map",
    areas: [
      { id: 5, shape: "circle", coords: [0, 0, 10], preFillColor: "red" }
    ]
  });

  const handleUpdateMapArea = useCallback(
    evt =>
      updateMapArea(5, [sampleObject.x, sampleObject.y, 10]),
    []
  );

  /*useEffect(() => {
    setQuery(Math.random());
  }, [mapAreas]);*/

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
    setTimeout(function () {
      setShowMessage(false);
    }, 10000);
  }, []);

  return (
    <Box>
      {showMessage && <Button onClick={() => setShowMessage(!showMessage) } colorScheme='teal' variant='outline' margin="1rem">Δεν ξέρεις που είναι το κτήριο;</Button>}
      {!showMessage && <Button onClick={() => setShowMessage(!showMessage) } colorScheme='teal' variant='outline' margin="1rem">Πισω</Button>}
      {showMessage && <ImageMapper
        src={sampleObject.imageURL}
        onLoad={handleUpdateMapArea}
        map={mapAreas}
        width={500}
      />}
      {!showMessage && <ImageMapper
        src={sampleObject.blackImage}
        onLoad={handleUpdateMapArea}
        map={mapAreas}
        width={500}
      />}
      
    </Box>
  );
}
