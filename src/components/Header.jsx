import React from 'react'


import {
    Flex, Text, Image, Spacer
} from '@chakra-ui/react';

export default function Header() {
    return (
        <Flex w={'100%'} h={'4em'} bgColor={'blue'} >
            <Image src='https://picsum.photos/50' />
            <Spacer />
            <Text color={'white'} alignSelf={'center'}>myUoM</Text>
            <Spacer />
            <Text color={'white'} ml={1}>This is a Menu Bar</Text>
        </Flex>
    )
}
