import React from 'react'
import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Stack,
    Image,
    Text
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { useNavigate } from "react-router-dom";

export default function MenuBox({ category }) {
    const { title, imgUrl, route } = category

    const navigate = useNavigate()

    const handleNavigation = () => {
        navigate(route)
    };

    return (
        <Center py={12} m={3} onClick={handleNavigation}>
            <Box
                role={'group'}
                p={6}
                maxW={'480px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'lg'}
                pos={'relative'}
                zIndex={1}
                _hover={{
                    bgColor: 'blue.600'
                }}
            >
                <Box
                    rounded={'lg'}
                    mt={10}
                    pos={'relative'}
                    height={'230px'}
                >
                    <Image
                        rounded={'lg'}
                        height={'full'}
                        width={'full'}
                        objectFit={'cover'}
                        src={imgUrl}
                    />
                </Box>
                <Stack pt={10} align={'center'}>
                    <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                        {title} {category.isExternal && <ExternalLinkIcon />}
                    </Heading>
                </Stack>
            </Box>
        </Center>
    )
}
