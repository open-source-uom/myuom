import React, { Component } from 'react';
import {
    Box,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Accordion,
    Text
  } from '@chakra-ui/react';

function Menu({data}) {
  return ( 
  <Box>
        <AccordionItem>
          
            <AccordionButton _hover={{ bg: "rgb(20, 88, 148)" }}
                margin="0 auto"
                padding="8px"
                width="80vw"
                textAlign="center"
                marginBottom="0.3em"
                bgColor="rgb(20, 88, 148)"
                color="rgb(252, 180, 12)"
                borderRadius="20"
                border="none"
                alt="profPic"
                overflow="hidden"
              _expanded={{ bg: "rgb(24, 107, 180)", color: "rgb(227, 160, 2)"}}
            >
              <Box flex='1' textAlign='center' fontSize='25px'>
                {data.day}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          
          <AccordionPanel pb={4}>

            <Accordion allowToggle>
              {/*Accordion gia geuma*/}
              <AccordionItem>
                <Text>
                  <AccordionButton _hover={{ bg: "rgb(20, 88, 148)" }}
                     margin="0 auto"
                     padding="3px"
                     width="60vw"
                     textAlign="center"
                     marginBottom="0.3em"
                     bgColor="rgb(20, 88, 148)"
                     color="rgb(252, 180, 12)"
                     borderRadius="20"
                     border="none"
                     alt="profPic"
                     overflow="hidden"
                    _expanded={{ bg: "rgb(24, 107, 180)", color: "rgb(227, 160, 2)"}}
                  >
                    <Box flex='1' textAlign='center' fontSize='20px'>
                    Γεύμα
                    </Box>
                  <AccordionIcon />
                  </AccordionButton>
                </Text>
                <AccordionPanel pb={4}>
                  <div>
                    {data.gevmaKirios}<br></br>
                    {data.gevmaEidiko}<br></br>
                    {data.gevmaGarnitoura}<br></br>
                    {data.gevmaSalata}<br></br>
                    {data.gevmaEpidorpio} 
                  </div>
                </AccordionPanel>
            </AccordionItem>
              {/*Accordion gia deipno*/}
            <AccordionItem>
                <Text>
                  <AccordionButton _hover={{ bg: "rgb(20, 88, 148)" }}
                     margin="0 auto"
                     padding="3px"
                     width="60vw"
                     textAlign="center"
                     marginBottom="0.3em"
                     bgColor="rgb(20, 88, 148)"
                     color="rgb(252, 180, 12)"
                     borderRadius="20"
                     border="none"
                     alt="profPic"
                     overflow="hidden"
                    _expanded={{ bg: "rgb(24, 107, 180)", color: "rgb(227, 160, 2)"}}
                  >
                    <Box flex='1' textAlign='center' fontSize='20px'>
                    Δείπνο
                    </Box>
                  <AccordionIcon />
                  </AccordionButton>
                </Text>
                <AccordionPanel pb={4}>
                  <div>
                    {data.deipnoKirios}<br></br>
                    {data.deipnoEidiko}<br></br>
                    {data.deipnoGarnitoura}<br></br>
                    {data.deipnoSalata}<br></br>
                    {data.deipnoEpidorpio} 
                  </div>
                </AccordionPanel>
            </AccordionItem>
            </Accordion>
            
          </AccordionPanel>
        </AccordionItem>
</Box>
   );
}

export default Menu;
