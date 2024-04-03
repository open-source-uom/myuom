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
import { Divider, Flex } from "@chakra-ui/react";
import React from "react";
import Guide from "../components/freshmen/Guide.jsx";
import GuideButton from "../components/freshmen/GuideButton.jsx";
import { useGuidesMdData } from "../hooks/useGuidesMdData.js";
import { useScrollToTopOnLoad } from "../hooks/useScrollToTopOnLoad";

function ButtonListPage() {
  useScrollToTopOnLoad();
  const { guideMd, firstYearGuidesTranslated, fetchGuideByPath, setGuideMd } =
    useGuidesMdData();

  return (
    <>
      {guideMd ? (
        <Guide onClick={(e) => setGuideMd("")} guideContent={guideMd} />
      ) : null}
      {!guideMd ? (
        <Flex direction="column" paddingX={4} align="center">
          <Flex
            direction="column"
            w={{
              sm: "100%",
              md: "90%",
              lg: "80%",
              "2xl": "60%",
              "3xl": "50%",
            }}>
            {firstYearGuidesTranslated.map((item, index) => (
              <React.Fragment key={`guide-${index}`}>
                <GuideButton
                  text={item.text}
                  guidePath={item.guidePath}
                  onClick={fetchGuideByPath}
                />
                {/* Last item should not have a divider on the bottom */}
                {index !== firstYearGuidesTranslated.length - 1 ? (
                  <Divider
                    borderColor="#0050e0"
                    _dark={{ borderColor: "#f3f3f3" }}
                    w="100%"
                    borderBottomWidth={2}
                    opacity={1}
                  />
                ) : null}
              </React.Fragment>
            ))}
          </Flex>
        </Flex>
      ) : null}
    </>
  );
}

export default ButtonListPage;
