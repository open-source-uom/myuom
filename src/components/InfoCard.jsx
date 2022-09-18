import { forwardRef } from "react";
import {
  Tabs,
  ListItem,
  UnorderedList,
  TabList,
  TabPanels,
  TabPanel,
  useTab,
  useMultiStyleConfig,
  Button,
  Box,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export default function InfoCard({ data }) {
  const CustomTab = forwardRef((props, ref) => {
    const tabProps = useTab({ ...props, ref });
    const isSelected = !!tabProps["aria-selected"]; // Use if you need styling on the selected tab - eg. Make the background red if the tab is selected
    const icon = tabProps["icon"]; // 2. Access icon prop from the tab prop

    const styles = useMultiStyleConfig("Tabs", tabProps);

    return (
      <Button __css={styles.tab} {...tabProps}>
        <Box as="span" mr="2">
          <Icon as={icon}> </Icon>
          {/* 3. Pass icon as object - 4. Imported from FirstYearInfo.js and passed into the object as an object*/}
        </Box>
        {tabProps.children}
      </Button>
    );
  });

  const SelectColor = () => {
    return useColorModeValue("#f3f3f3", "black");
  };

  const SelectBgColor = () => {
    return useColorModeValue("#0050e0", "#f3f3f3");
  };

  const SelectLinkColor = () => {
    return useColorModeValue("#0050e0", "#F4B042");
  };

  return (
    <Tabs
      w={{ base: "initial", lg: "100vh" }}
      fontFamily="Syne"
      color={useColorModeValue("black", "#f3f3f3")}
      border="none"
      align="center"
      mx="0.5rem"
    >
      <TabList>
        {data.map((info) => (
          <CustomTab
            key={info.title}
            icon={info.icon}
            variant="enclosed"
            color={{ color: "#0050e0", bg: "#f3f3f3" }}
            fontSize={{ base: "0.85rem", lg: "1rem" }}
            _selected={{
              color: SelectColor(),
              bg: SelectBgColor(),
            }}
          >
            {/* 1. pass icon as prop */}
            {info.title}
          </CustomTab>
        ))}
      </TabList>

      <TabPanels>
        {data.map((info) => {
          return (
            <TabPanel key={info.title}>
              <UnorderedList listStyleType={"none"}>
                {info.content.map((curContent) => (
                  <ListItem>
                    <Text>{curContent}</Text>
                  </ListItem>
                ))}
              </UnorderedList>

              {info.links.map((link) => (
                <Box color={SelectLinkColor()}>
                  <a href={link}>{link}</a>
                </Box>
              ))}
            </TabPanel>
          );
        })}
      </TabPanels>
    </Tabs>
  );
}
