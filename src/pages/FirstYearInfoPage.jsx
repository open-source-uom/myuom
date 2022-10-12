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

import data from "../assets/FirstYearInfo.js";
import { Box } from "@chakra-ui/react";
import InfoCard from "../components/InfoCard";
import { useEffect } from "react";

export default function FirstYearInfoPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const firstCardArray = data.slice(0, 2);
  const secondCardArray = data.slice(2, 4);
  const thirdCardArray = data.slice(4, 6);
  const fourthCardArray = data.slice(6, 8);
  const fifthCardArray = data.slice(8, 10);
  const sixthCardArray = data.slice(10, 13);

  return (
    <Box align="center">
      <InfoCard data={firstCardArray} key={firstCardArray.title} />
      <InfoCard data={secondCardArray} key={secondCardArray.title} />
      <InfoCard data={thirdCardArray} key={thirdCardArray.title} />
      <InfoCard data={fourthCardArray} key={fourthCardArray.title} />
      <InfoCard data={fifthCardArray} key={fifthCardArray.title} />
      <InfoCard data={sixthCardArray} key={sixthCardArray.title} />
    </Box>
  );
}
