import React from 'react';

import {
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  useTab,
  useMultiStyleConfig,
  Button,
  Box,
  Icon,
} from '@chakra-ui/react';

export default function InfoCard({ data }) {
  const CustomTab = React.forwardRef((props, ref) => {
    const tabProps = useTab({ ...props, ref });
    const isSelected = !!tabProps['aria-selected']; // Use if you need styling on the selected tab - eg. Make the background red if the tab is selected
    const icon = tabProps['icon']; // 2. Access icon prop from the tab prop

    const styles = useMultiStyleConfig('Tabs', tabProps);

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

  return (
    <Tabs
      orientation="vertical"
      isFitted
      display="grid"
      gridTemplateColumns="auto 1fr"
    >
      <TabList aria-orientation="vertical">
        {data.map((info) => (
          <CustomTab key={info.title} icon={info.icon}>
            {/* 1. pass icon as prop */}
            {info.title}
          </CustomTab>
        ))}
      </TabList>
      <TabPanels>
        {data.map((info) => (
          <TabPanel key={info.title}>{info.content}</TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
}
