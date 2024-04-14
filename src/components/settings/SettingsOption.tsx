import { Text, Box } from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons/lib";
interface SettingsOptionProps {
  Icon: IconType;
  text: string;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const SettingsOption: React.FC<SettingsOptionProps> = ({ Icon, text, onClick }) => {
  
  return (
    <Box display="flex" my="1.5rem" onClick={onClick} cursor="pointer">
      <Icon size="1.5rem" />
      <Text as="span" fontWeight="bold" fontSize="xl" ml="0.5rem">
        {text}
      </Text>
    </Box>
  );
};

export default SettingsOption;
