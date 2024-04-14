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
import React, { useRef, useEffect, useState } from "react";
import { Flex, Text } from "@chakra-ui/react";
import i18n from "../../i18n";
import MenuTable from "./MenuTable";
import { useTodaysMenu, TodaysMenuResult } from "../../hooks/useTodaysMenu";
import SwiperCore, { Swiper } from "swiper";
import "swiper/swiper-bundle.css";

SwiperCore.use([]);

interface TodaysMenuProps {}

const TodaysMenu: React.FC<TodaysMenuProps> = () => {
  type MenuKey = "gevma" | "deipno";
  const swiperRef = useRef<Swiper | null>(null);

  const { isLunch, isTomorrow } = useTodaysMenu();

  const aggregatedMenu = {
    today: {
      gevma: useTodaysMenu("gevma") as TodaysMenuResult,
      deipno: useTodaysMenu("deipno") as TodaysMenuResult,
    },
    tomorrow: {
      gevma: useTodaysMenu("gevma epomenhs") as TodaysMenuResult,
      deipno: useTodaysMenu("deipno epomenhs") as TodaysMenuResult,
    },
  };

  function updateActiveIndex(): number {
    return isLunch || isTomorrow ? 0 : 1;
  }

  const [activeIndex, setActiveIndex] = useState<number>(updateActiveIndex());

  useEffect(() => {
    const newSwiper = new Swiper(".swiper-container", {
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
    });

    newSwiper.slideTo(activeIndex);

    swiperRef.current = newSwiper;

    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy();
      }
    };
  }, [activeIndex]);

  useEffect(() => {
    setActiveIndex(updateActiveIndex());
    if (swiperRef.current) {
      swiperRef.current.slideTo(activeIndex);
    }
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
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {isTomorrow
            ? Object.keys(aggregatedMenu["tomorrow"]).map((key, index) => (
                <div className="swiper-slide" key={key}>
                  <MenuTable
                    title={key}
                    foodMenu={aggregatedMenu["tomorrow"][key as MenuKey].foodMenu}
                    isActive={activeIndex === index && isTomorrow}
                  />
                </div>
              ))
            : Object.keys(aggregatedMenu["today"]).map((key, index) => (
                <div className="swiper-slide" key={key}>
                  <MenuTable
                    title={key}
                    foodMenu={aggregatedMenu["today"][key as MenuKey].foodMenu}
                    isActive={activeIndex === index && !isTomorrow}
                  />
                </div>
              ))}
        </div>
      </div>
    </>
  );
};

export default TodaysMenu;
