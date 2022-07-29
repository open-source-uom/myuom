import React from "react";
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
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
// import { EmailIcon } from "@chakra-ui/icons";

const contactButtonStyle = {
  margin: "10px",
  padding: "15px 30px",
  textAlign: "center",
  transition: "0.5s",
  backgroundSize: "200% auto",
  borderRadius: "10px",
  border: "0px",
  fontWeight: "700",
  boxShadow: "0px 0px 14px -7px #f09819",
  backgroundImage:
    "linear-gradient(45deg, #FF512F 0%, rgb(24, 107, 180)  51%, rgb(227, 160, 2) 100%)",
  cursor: "pointer",
  userSelect: "none",
  WebkitUserSelect: "none",
  touchAction: "manipulation",
  _active: {
    transform: "scale(0.95)",
  },
};

export default function ProfCard({ prof }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <AccordionItem>
        <Text as="h2">
          <AccordionButton
            _hover={{ bg: "rgb(20, 88, 148)" }}
            margin="0 auto"
            width="80vw"
            textAlign="center"
            marginBottom="0.3em"
            bgColor="rgb(20, 88, 148)"
            color="rgb(252, 180, 12)"
            borderRadius="20"
            border="none"
            alt="profPic"
            overflow="hidden"
            _expanded={{ bg: "rgb(24, 107, 180)", color: "rgb(227, 160, 2)" }}
          >
            <Image
              src={prof.imgUrl}
              width="80px"
              height="80px"
              borderRadius="full"
            />
            <Box flex="1">
              <Text fontWeight="bold" fontSize="18">
                {prof.fname} {prof.lname}
              </Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </Text>
        <AccordionPanel pb={5} textAlign="center">
          <VStack>
            <Text as="span" fontWeight="bold">
              Τίτλος:&nbsp;
              <Text fontWeight="normal" as="span">
                {prof.title}
              </Text>
            </Text>

            <Text as="span" fontWeight="bold">
              Τηλέφωνο:&nbsp;
              <Text fontWeight="normal" as="span">
                {prof.tel}
              </Text>
            </Text>

            <Text as="span" fontWeight="bold">
              Email:&nbsp;
              <Text fontWeight="normal" as="span">
                {prof.email}
              </Text>
            </Text>

            <Text
              onClick={onOpen}
              fontWeight="bold"
              _hover={{ cursor: "pointer" }}
              as="span"
            >
              <u>Κτήριο</u>:&nbsp;
              <Text fontWeight="normal" as="span">
                {prof.building}
              </Text>
            </Text>
            <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
              <ModalOverlay backdropFilter="blur(10px)" />
              <ModalContent
                width={{ md: "500px", base: "300px" }}
                height={{ md: "500px", base: "300px" }}
              >
                <ModalHeader>Μπροστινή όψη Πανεπιστημίου</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Image src="https://www.uom.gr/site/images/katopseis/exot_mprostini.jpg" />
                </ModalBody>
              </ModalContent>
            </Modal>
            <Text as="span" fontWeight="bold">
              Γραφείο:&nbsp;
              <Text fontWeight="normal" as="span">
                {prof.office}
              </Text>
            </Text>
          </VStack>
          <Button
            // leftIcon={<EmailIcon />}
            textAlign="center"
            colorScheme="teal"
            variant="solid"
            onClick={(e) => {
              window.open(
                `https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${prof.email}`
              );
            }}
            justifyContent="center"
            style={contactButtonStyle}
          >
            Επικοινωνήστε με <br />
            τον/την καθηγητή/τρια
          </Button>
        </AccordionPanel>
      </AccordionItem>
    </Box>
  );
}
