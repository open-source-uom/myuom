import React from 'react';
import data from '../assets/FirstYearInfo.js';
import { Accordion, Box, Text } from '@chakra-ui/react';
import Schedule from '../components/Schedule';
import InfoCard from '../components/InfoCard';

export default function FirstYearInfoPage() {
  return (
    <Box bg="white" textAlign={'center'}>
      <Box align="center">
        <Text fontSize="3.5ch" fontWeight="bold" marginBottom="1em">
          Πληροφορίες για πρωτοετής
        </Text>
        <InfoCard data={data} key={data.title} />
      </Box>
    </Box>
  );
}
