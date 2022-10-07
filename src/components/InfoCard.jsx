/*
  MIT License

  Copyright (c) 2022 Open Source  UOM

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.

  Made by Open Source UoM (https://opensource.uom.gr)

  Project members:
    -Apostolidis
    -Davios
    -Iosifidis
    -Konstantinidis
    -Mpakalis
    -Nasis
    -Omiliades
    -Patsouras
    -Fakidis

*/

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
            <TabPanel key={info.title} textAlign='left'>
              <UnorderedList listStyleType={"none"}>
                {info.content.map((curContent) => (
                  <ListItem>
                    <Text>{curContent}</Text>
                  </ListItem>
                ))}
              </UnorderedList>
              <UnorderedList listStyleType={"none"}>
                {info.links.map((link) => (
                  <Box color={SelectLinkColor()}>
                    <a href={link}>{link}</a>
                  </Box>
                ))}
              </UnorderedList>
            </TabPanel>
          );
        })}
      </TabPanels>
    </Tabs>
  );
}
