import { Accordion, Flex } from "@chakra-ui/react";
import ProfList from "../components/ProfList";

function ProfInfoPage() {
  return (
    <Flex
      paddingX={{ sm: "1rem", lg: 0 }}
      direction="row"
      alignItems="start"
      justifyContent="center"
    >
      <Accordion w={{ sm: "100%", lg: "65%", xl: "60%" }} allowToggle>
        <ProfList />
      </Accordion>
    </Flex>
  );
}

export default ProfInfoPage;
