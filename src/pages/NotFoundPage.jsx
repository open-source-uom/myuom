import React from 'react';
import { Heading, Center } from '@chakra-ui/react';

const NotFoundPage = () => {
  return (
    <>
      <Center h='70vh'>
        <Heading as='h2' size={{ sm: "2xl", xl: "3xl" }} >
         Page Not Found
        </Heading>
      </Center>
    </>
  );
};

export default NotFoundPage;
