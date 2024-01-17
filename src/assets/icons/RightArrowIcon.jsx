import React from "react";

function RightArrowIcon({ stroke, width }) {
  return (
    <svg
      className="stroke-svg"
      width={width || "120%"}
      viewBox="0 0 11 11"
      stroke={stroke || "#000"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 5.66666H10.0575"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.52881 0.999985L10.0575 5.66665L5.52881 10.3333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default RightArrowIcon;
