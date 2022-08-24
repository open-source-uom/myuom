import { Box, Select, Stack } from "@chakra-ui/react";
import { useState } from 'react';
import { mapData } from '../assets/mapData.js'
import MapCords from '../components/MapCords'
import { useEffect } from "react";

/* Insert all buildings into an array and convert set to remove duplicates */
// Possibly just add them to a set? Not sure about complexity
const Buildings = () => {
    const arr = mapData.map((info) => info.building)
    const options = [...new Set(arr)]
    return options.map((building) => <option value={building} key={building}>{building}</option>)
}

/* If the dropdown choice is unknown building, add every office there is,
    otherwise filter by what building is chosen */
const Offices = (prop) => { 
    
   const options = mapData.reduce((filtered, option) => {
    if(prop.building === "unknown")
        filtered.push(option.title+" "+option.dep)

    if (option.building === prop.building) 
        filtered.push(option.title);

    return filtered
    }, [])
    
    return options.map((info) => <option value={info} key={info}>{info}</option>)
    }

function MapPage() {
    const [title,setTitle] = useState("");
    const [value, setValue] = useState("");
    const [sampleObject, setSampleObject] = useState([]);

    const handleChange = (e) => {
      setValue(e.target.value);
    };

    const handleTitle = (e) => {
        setTitle(e.target.value);
    }

    useEffect(() => {
        const sampleObject = getSampleObjectByBuilding(value);
        setSampleObject(sampleObject)
    },[value,title]);

    const getSampleObjectByBuilding = (value) => 
        mapData.filter((data) => (data.title === title && data.building === value) || (data.title+ " " + data.dep === title && value === "unknown"))
    
    
    
    return (
        <Box align="center" marginTop="1em">
            <Stack spacing={3}>
                <Select onChange={handleChange} defaultValue={"default"}>
                <option hidden disabled value="default">Επιλέξτε ένα κτήριο</option>
                <option value="unknown">Άγνωστο κτήριο</option>
                    <Buildings/>
                </Select >
                <Select isDisabled={!value} onChange={handleTitle} defaultValue={"default"}>
                <option hidden value="default">Επιλέξτε ένα γραφείο</option>
                    <Offices building={value}/> 
                    {/* Get {value} & do whatever you want with it */}
                    {/* Another option is to set the value to the object
                        and not have to traverse the json again */}
                </Select>   
            </Stack>
            {sampleObject.map((sampleObject) => (
                <MapCords sampleObject={sampleObject} key={sampleObject.title} />
             ))}
            
            
            
        </Box>
    );
}

export default MapPage;