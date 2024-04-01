/*
  MIT License

  Copyright (c) 2024 Open Source  UOM

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

import { Flex, Text } from "@chakra-ui/react";
import i18n from "../../i18n";
import MenuTable from "./MenuTable";
import { useTodaysMenu } from "../../hooks/useTodaysMenu";
import { useEffect, useState, useRef } from "react";
import { register } from "swiper/element/bundle";

export default function TodaysMenu() {
  const swiperRef = useRef(null);

  const { isLunch, isTomorrow } = useTodaysMenu();

  let aggregatedMenu = { today: {}, tomorrow: {} };
  aggregatedMenu["today"]["gevma"] = useTodaysMenu("gevma");
  aggregatedMenu["today"]["deipno"] = useTodaysMenu("deipno");
  aggregatedMenu["tomorrow"]["gevma"] = useTodaysMenu("gevma epomenhs");
  aggregatedMenu["tomorrow"]["deipno"] = useTodaysMenu("deipno epomenhs");

  function updateActiveIndex() {
    return isLunch || isTomorrow ? 0 : 1;
  }

  const [activeIndex, setActiveIndex] = useState(updateActiveIndex());

  useEffect(() => {
    register();

    const params = {
      initialSlide: activeIndex,
      centeredSlides: true,
      breakpoints: {
        0: {
          slidesPerView: 1.1,
        },
        768: {
          slidesPerView: 1.1,
        },
        960: {
          slidesPerView: 1.2,
        },
        1200: {
          slidesPerView: 1.2,
        },
        1600: {
          slidesPerView: 1.3,
        },
        1920: {
          slidesPerView: 1.3,
        },
      },
    };

    Object.assign(swiperRef.current, params);

    swiperRef.current.initialize();
  }, []);

  useEffect(() => {
    setActiveIndex(updateActiveIndex());
    swiperRef.current.swiper.slideTo(activeIndex);
  }, [isLunch, isTomorrow]);

  return (
    <>
      <Flex w="100%" justifyContent="center">
        <Flex
          w={{ sm: "90%", md: "90%", lg: "80%", "2xl": "60%", "3xl": "50%" }}
          alignItems="center"
          fontFamily="Syne"
        >
          <Text
            fontWeight="bold"
            marginTop="2rem"
            marginBottom="1rem"
            fontSize={{ sm: 22, md: 24, lg: 26 }}
          >
            {isTomorrow ? i18n.t("avriano") : i18n.t("simerino")}{" "}
            {i18n.t("menou")}
          </Text>
        </Flex>
      </Flex>
      <swiper-container init="false" ref={swiperRef}>
        {Object.keys(aggregatedMenu[isTomorrow ? "tomorrow" : "today"]).map(
          (key, index) => (
            <swiper-slide key={key}>
              <MenuTable
                title={key}
                foodMenu={
                  aggregatedMenu[isTomorrow ? "tomorrow" : "today"][key]
                    .foodMenu
                }
                isActive={activeIndex === index && !isTomorrow}
              />
            </swiper-slide>
          )
        )}
      </swiper-container>
    </>
  );
}
