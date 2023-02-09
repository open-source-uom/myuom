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
import { useEffect, memo } from "react";

export default memo(function FirstYearInfoPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sortedData = data.sort((a, b) => {
    return a.index - b.index;
  });
  const minIndex = Math.min(
    ...sortedData.map(({ index }) => {
      return index;
    })
  );
  const maxIndex = Math.max(
    ...sortedData.map(({ index }) => {
      return index;
    })
  );
  let result = [];
  for (let i = minIndex; i <= maxIndex; i++) {
    const tabsWithSameIndexSortedByTabOrder = sortedData
      .filter(({ index }) => index === i)
      .sort((a, b) => a.tabOrder - b.tabOrder);

    result.push(tabsWithSameIndexSortedByTabOrder);
  }

  return (
    <Box align="center">
      {result.map((arrayWithTabs, index) => {
        return <InfoCard data={arrayWithTabs} key={`guide-${index}`} />;
      })}
    </Box>
  );
});
