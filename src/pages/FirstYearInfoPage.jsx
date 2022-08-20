import data from "../assets/FirstYearInfo.js";
import { Box } from "@chakra-ui/react";
import InfoCard from "../components/InfoCard";

export default function FirstYearInfoPage() {
  const firstCardArray = data.slice(0, 2);
  const secondCardArray = data.slice(2, 4);
  const thirdCardArray = data.slice(4, 7);

  return (
    <Box align="center">
      <InfoCard data={firstCardArray} key={firstCardArray.title} />
      <InfoCard data={secondCardArray} key={secondCardArray.title} />
      <InfoCard data={thirdCardArray} key={thirdCardArray.title} />
    </Box>
  );
}
