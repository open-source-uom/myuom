import { ArrowUpIcon } from "@chakra-ui/icons";
import { ButtonGroup, IconButton } from "@chakra-ui/react";

export default function ScrollToTopArrow() {
  return (
    <ButtonGroup
      border={"solid 0.125rem blue"}
      borderRadius={"2rem"}
      size="lg"
      isAttached
      variant="outline"
      position={"fixed"}
      bottom={{ base: "4rem", lg: "1rem" }}
      right="1rem"
      backgroundColor={"transparent"}
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
    >
      <IconButton
        aria-label="Scroll to top"
        icon={<ArrowUpIcon />}
        borderRadius={"2rem"}
        _focus={{ bg: "transparent" }}
        _active={{ bg: "initial" }}
      />
    </ButtonGroup>
  );
}
