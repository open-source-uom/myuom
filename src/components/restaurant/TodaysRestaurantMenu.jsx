/*
  MIT License

  Copyright (c) 2022 Open Source  UOM

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.

  Made by Open Source UoM (https://opensource.uom.gr)

  Project members:
    -Apostolidis
    -Davios
    -Iosifidis
    -Konstantinidis
    -Mpakalis
    -Nasis
    -Omiliades
    -Patsouras
    -Fakidis

*/

import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
import i18n from "../../i18n";
import FoodMenuList from "./FoodMenuList";
import { useTodaysMenu } from "../../hooks/useTodaysMenu";


export default function TodaysMenu() {
  const { isLunch, isTomorrow, foodMenu } = useTodaysMenu();

  return (
    <Flex
      flexDirection={"column"}
      color={useColorModeValue("white", "black")}
      height="fit-content"
      fontFamily="Syne"
    >
      <Text
        fontWeight={"bold"}
        marginBottom="1rem"
        fontSize={{ sm: 22, md: 24, lg: 26 }}
      >
        {isTomorrow ? i18n.t("avriano") : i18n.t("simerino")} {i18n.t("menou")}
      </Text>
      <Text fontWeight="bold" fontSize={{ sm: 18, md: 20, lg: 22 }} as="span">
        {isLunch ? i18n.t("gevma") : i18n.t("deipno")}:
      </Text>
      {<FoodMenuList {...foodMenu} />}{" "}
    </Flex>
  );
}
