import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'


import {
    Flex, Text, Image, Spacer
} from '@chakra-ui/react';

export default function Header() {

    const navigate = useNavigate();

    const goToHomePage = () => {
        navigate('/')
    };

    return (
        <>
            <Flex w={'100%'} h={'4em'} bgColor={'blue'} _hover={{
                cursor: 'pointer'
            }}>
                <Image src='https://picsum.photos/50' onClick={goToHomePage} />
                <Spacer />
                <Text color={'white'} alignSelf={'center'} onClick={goToHomePage} _hover={{
                    cursor: 'pointer'
                }}>myUoM</Text>
                <Spacer />
                <Text color={'white'} ml={1}>This is a Menu Bar</Text>
            </Flex>
            <Outlet />
        </>
    )
}
