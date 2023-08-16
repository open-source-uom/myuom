import ReactMarkdown from "react-markdown";
import { LeftArrowIcon } from "../../assets/icons";
import { Flex, Divider, Heading, useColorModeValue } from "@chakra-ui/react";
import i18n from "../../i18n";
import { useScrollToTopOnLoad } from "../../hooks/useScrollToTopOnLoad";

const Guide = ({ guideContent, onClick }) => {
  useScrollToTopOnLoad();
  return (
    <Flex direction="column" paddingX={4} align="center">
      <Divider
        borderColor={useColorModeValue("#0050e0", "#f3f3f3")}
        w={{ sm: "100%", md: "90%", lg: "80%", "2xl": "60%", "3xl": "50%" }}
        borderBottomWidth={2}
        opacity={1}
      />
      <Flex
        direction="row"
        paddingY={5}
        paddingX={4}
        cursor="pointer"
        onClick={() => onClick()}
        w={{ sm: "100%", md: "90%", lg: "80%", "2xl": "60%", "3xl": "50%" }}
      >
        <LeftArrowIcon
          width={16}
          stroke={useColorModeValue("black", "#f3f3f3")}
        />
        <Heading
          paddingLeft={4}
          w="100%"
          fontSize={{ sm: 18, md: 22, lg: 26, xl: 32 }}
          color={useColorModeValue("black", "#f3f3f3")}
          fontWeight="mormal"
          fontFamily="Syne"
          userSelect="none"
        >
          {i18n.t("return_to_guides_list")}
        </Heading>
      </Flex>
      <Divider
        borderColor={useColorModeValue("#0050e0", "#f3f3f3")}
        w={{ sm: "100%", md: "90%", lg: "80%", "2xl": "60%", "3xl": "50%" }}
        borderBottomWidth={2}
        opacity={1}
      />
      <Flex
        direction="column"
        paddingX={4}
        paddingTop={5}
        fontFamily="Syne"
        w={{ sm: "100%", md: "90%", lg: "80%", "2xl": "60%", "3xl": "50%" }}
      >
        <div className="markdown-body">
          <ReactMarkdown linkTarget="_blank">{guideContent}</ReactMarkdown>
        </div>
      </Flex>
    </Flex>
  );
};

export default Guide;
