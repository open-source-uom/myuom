import { Text, Box } from "@chakra-ui/react";

export default function SettingsOption({ Icon, text, onClick }) {
    return (
        <Box display="flex" my={"1.5rem"} onClick={onClick} cursor={"pointer"}>
            <Icon size="1.5rem" />
            <Text
                as="span"
                fontWeight={"bold"}
                fontSize="xl"
                ml="0.5rem"
            >
                {text}
            </Text>
        </Box>
    );
}
