import React from 'react';
import { Heading, Center, Image, Box } from '@chakra-ui/react';
import NotFoundIcon from './../assets/Page_not_found.png';

const NotFoundPage = () => {
  return (
    <>
      <Center h='70vh'>
        <Box boxSize='lg'>
          <Image src={NotFoundIcon} alt='Dan Abramov' />
          <Center>
            <Heading as='h2' size={{ sm: "2xl", xl: "3xl" }}>
              Page Not Found
            </Heading>
          </Center>
        </Box>
      </Center>
    </>
  );
};

export default NotFoundPage;
