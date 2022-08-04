import React from "react";
import { Box, Center } from '@chakra-ui/react';
import { Text } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import library from "../assets/library-logo.jpg";
import clock from "../assets/clock.png";
import contact from "../assets/contact.png";


export default function LibraryPage() {
    return (
        <div>
            
            <Center>
                <Image src={library} alt='library-logo' width="700px" height="220px" align='center'/>
            </Center>

            <Box bg='white' textAlign='center' display='flex' alignItems='center' justifyContent='center'>
                <Box align='center' border='2px' borderRadius='1rem' borderColor='grey.200' margin='3rem' padding='3rem' boxSize='md'>
                    <Text fontSize='25px' fontWeight='bold' fontFamily='cursive's>
                        <Image src={clock} alt='schedule-logo' width='50px' height='50px' borderRadius='full'/>
                        <Text> 04-29/07/2022 & 22-26/08/2022 </Text>
                        <br></br>
                        <Text> Δευτέρα & Τετάρτη: 08:00-17:00 </Text>
                        <Text> Τετάρτη - Παρασκευή: 08:00-14:30 </Text>
                        <Text> Σάββατο: ΚΛΕΙΣΤΑ </Text>
                    </Text> 
                </Box>

                <Box align='center' border='2px' borderRadius='1rem' borderColor='grey.200' margin='3rem' padding='3rem' boxSize='md'>
                    <Text fontSize='25px' fontWeight='bold' fontFamily='cursive'>
                        <Image src={contact} alt='contact-logo' width='50px' height='50px' borderRadius='full'/>
                        <Text> Ημιώροφος </Text>
                        <Text> Εγνατίας 156 </Text>
                        <Text> ΤΚ: 54636 </Text>
                        <Text> Τηλ: (2310) 891751, 752, 118, 137 </Text>
                        <Button
                            textAlign='center'
                            colorScheme='green'
                            variant='solid'
                            onClick={(e) => {
                            window.open(
                                'https://www.lib.uom.gr/index.php/el/'
                            );
                            }}
                            justifyContent='center'
                        >
                            Ιστοσελίδα Βιβλιοθήκης
                        </Button>
                    </Text> 
                </Box>
            </Box>

        </div>
    );
};