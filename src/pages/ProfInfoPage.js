import { React } from "react";
import { Accordion } from "@chakra-ui/react";
import ProfList from "../components/ProfList";

function ProfInfoPage() {
  return (
    <Accordion allowToggle>
      <ProfList />
    </Accordion>
  );
}

export default ProfInfoPage;
