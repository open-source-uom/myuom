import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

import {
  Flex,
  Text,
  Image,
  Spacer,
} from "@chakra-ui/react";

import MenuButton from "./MenuButton";

export default function Header() {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/");
  };

  return (
    <>
      <Flex direction={"column"}>
        <Flex w={"100%"} h={"4em"} bgColor={"blue"}>
          <Image src="https://picsum.photos/80" onClick={goToHomePage} />
          <Text fontSize={'40px'} color={"white"} alignSelf={"center"} onClick={goToHomePage}>
            myUoM
          </Text>
          <Spacer />
          <MenuButton />
        </Flex>
      </Flex>
      <Outlet />
    </>
  );
}