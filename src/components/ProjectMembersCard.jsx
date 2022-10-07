import {
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
  Button,
  useDisclosure,
  Image,
  Text,
  VStack,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { SocialIcon } from "react-social-icons";

export default function ProjectMembersCard({ data }) {
  const SelectBorderColor = () => {
    return useColorModeValue("#0050e0", "#f3f3f3");
  };

  const SelectItemColor = () => {
    return useColorModeValue("black", "white");
  };

  return (
    <Box
      w={{ sm: "95%", md: "75%", lg: "50%" }}
      borderRadius="20"
      overflow="hidden"
      border="2px"
      borderColor={SelectBorderColor()}
    >
      <AccordionItem border="none" w="100%">
        <Flex>
          <AccordionButton
            display="flex"
            direction="row"
            alignItems="center"
            justifyContent="start"
            _hover={{ bg: "transparent" }}
            w="100%"
            h="100%"
            outline="none"
            textAlign="left"
            bgColor="transparent"
            color={SelectItemColor()}
            fontFamily="Syne"
            border="none"
            alt="profPic"
            overflow="hidden"
            gap={3}
          >
            <Image
              src={data.img}
              width="60px"
              height="60px"
              borderRadius="full"
            />
            <Text
              w="100%"
              display="flex"
              direction="row"
              alignItems="center"
              justifyContent="start"
              fontWeight="bold"
              fontSize={{ sm: 14, md: 16, lg: 18 }}
            >
              {data.name}
            </Text>
            <AccordionIcon />
          </AccordionButton>
        </Flex>
        <AccordionPanel bgColor="transparent" pb={0}>
          <Flex direction="row" alignItems="start" fontFamily="Syne">
            <SocialIcon
              url={data.email}
              style={{ marginRight: "0.5rem", marginBottom: "1rem" }}
            />
            <SocialIcon
              url={data.socialMedia}
              style={{ marginRight: "0.5rem" }}
            />
          </Flex>
        </AccordionPanel>
      </AccordionItem>
    </Box>
  );
}
