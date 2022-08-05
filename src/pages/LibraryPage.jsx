import React from "react";
import { Flex, Box, Center, Text, Button, Image } from '@chakra-ui/react';
import { TimeIcon, PhoneIcon } from "@chakra-ui/icons";


export default function LibraryPage() {
    return (
        
        <Flex flexDirection="column">
            
            <Center>
                <Image src="https://www.uom.gr/assets/site/public/nodes/4021/2038-LibraryLogo_4slider-2.jpg" alt='library-logo' width="700px" height="220px" align='center'/>
            </Center>

            <Box bg='white' textAlign='center' display='flex' alignItems='center' justifyContent='center'>
                <Box align='center' border='2px' borderRadius='1rem' borderColor='grey.200' margin='3rem' padding='3rem' boxSize='md'>
                    <Text fontSize='25px' fontWeight='bold' fontFamily='cursive's>
                        <TimeIcon w={39} h={39} />
                        <Text> 04-29/07/2022 & 22-26/08/2022 </Text>
                        <br></br>
                        <Text> Δευτέρα & Τετάρτη: 08:00-17:00 </Text>
                        <Text> Τετάρτη - Παρασκευή: 08:00-14:30 </Text>
                        <Text> Σάββατο: ΚΛΕΙΣΤΑ </Text>
                    </Text> 
                </Box>

                <Box align='center' border='2px' borderRadius='1rem' borderColor='grey.200' margin='3rem' padding='3rem' boxSize='md'>
                    <Text fontSize='25px' fontWeight='bold' fontFamily='cursive'>
                        <PhoneIcon w={39} h={39} />
                        <Text> Ημιώροφος </Text>
                        <Text> Εγνατίας 156 </Text>
                        <Text> ΤΚ: 54636 </Text>
                        <Text> Τηλέφωνα Επικοινωνίας: </Text>
                        <Text> (2310) 891751</Text> 
                        <Text> (2310) 891752 </Text>
                        <Text> (2310) 891118 </Text>
                        <Text> (2310) 891137</Text>
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

        </Flex>
    );
};