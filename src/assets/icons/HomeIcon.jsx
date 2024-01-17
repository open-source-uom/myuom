import { useColorModeValue } from "@chakra-ui/react";
import React from "react";

function HomeIcon() {
  return (
    <svg
      className="home-svg"
      width="28"
      height="30.8"
      viewBox="0 0 20 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      cursor={"pointer"}
    >
      <path
        d="M1 8L10 1L19 8V19C19 19.5304 18.7893 20.0391 18.4142 20.4142C18.0391 20.7893 17.5304 21 17 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8Z"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={useColorModeValue("#000", "#f3f3f3")}
      />
      <path
        d="M7 21V11H13V21"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={useColorModeValue("#000", "#f3f3f3")}
      />
    </svg>
  );
}

export default HomeIcon;
