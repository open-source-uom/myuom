import React, { useState, useCallback, useEffect } from "react";
import ImageMapper from "react-image-mapper";

export default function App({sampleObject}) {
  //const [query, setQuery] = useState(1);

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

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <ImageMapper
        src={sampleObject.imageURL}
        onLoad={handleUpdateMapArea}
        map={mapAreas}
        width={500}
      />
      <pre>On each click, circle should be position of the clicked</pre>
    </div>
  );
}
