import React from "react";
import { RightArrowIcon } from "../../assets/icons";
import { Flex, Spacer, Heading, useColorModeValue } from "@chakra-ui/react";

interface GuideButtonProps{
  text:string,
  guidePath: string,
  onClick: (guidePath: string) => void;
}

const GuideButton: React.FC<GuideButtonProps> = ({ text, guidePath, onClick }) => {
  const handleClick = () => {
    onClick(guidePath);
  };
  return (
    <Flex
      align="center"
      color="red"
      paddingY={5}
      cursor="pointer"
      onClick={handleClick}
      paddingX={4}
    >
      <Heading
        fontSize={{ sm: 16, md: 18, lg: 20 }}
        w="100%"
        color={useColorModeValue("black", "#f3f3f3")}
        fontWeight="mormal"
        fontFamily="Syne"
        userSelect="none"
      >
        {text}
      </Heading>
      <Spacer />
      <RightArrowIcon
        width={16}
        stroke={useColorModeValue("black", "#f3f3f3")}
      />
    </Flex>
  );
};

export default GuideButton;
