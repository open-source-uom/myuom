import React from "react";
import data from "../assets/FirstYearInfo.js";
import { Accordion, Box, Text, Tabs } from "@chakra-ui/react";
import Schedule from "../components/Schedule";
import InfoCard from "../components/InfoCard";

export default function FirstYearInfoPage() {
  return (
    <Box textAlign={"center"}>
        <InfoCard data={data} key={data.title} />
    </Box>
  );
}
