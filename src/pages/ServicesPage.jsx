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

import { Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useColorModeValue,
} from "@chakra-ui/react";
import { servicesData } from "../assets/services";
import ServicesCard from "../components/ServicesCard";

export default function ServicesPage() {
  const [officeServicesArray, setOfficeServicesArray] = useState([]);
  const [societyServicesArray, setSocietyServicesArray] = useState([]);
  const [restServicesArray, setRestServicesArray] = useState([]);

  const getOfficeServices = () =>
    servicesData.filter((srv) => srv.category === "Γραφείο");

  const getSocietyServices = () =>
    servicesData.filter((srv) => srv.category === "Σύλλογος");

  const getRestServices = () =>
    servicesData.filter((srv) => srv.category === "Υπόλοιπες");

  useEffect(() => {
    const officeServicesList = getOfficeServices();
    setOfficeServicesArray(officeServicesList);
  }, []);

  useEffect(() => {
    const societyServicesList = getSocietyServices();
    setSocietyServicesArray(societyServicesList);
  }, []);

  useEffect(() => {
    const restServicesList = getRestServices();
    setRestServicesArray(restServicesList);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box>
      <Tabs
        fontFamily="Syne"
        variant="enclosed"
        colorScheme={useColorModeValue("#0050e0", "#f3f3f3")}
      >
        <TabList flex="1">
          <Tab>Γραφεία</Tab>
          <Tab>Φοιτητικοί σύλλογοι</Tab>
          <Tab>Υπόλοιπες υπηρεσίες</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            {officeServicesArray.map((srv) => {
              return <ServicesCard srv={srv} key={srv.url} />;
            })}
          </TabPanel>
          <TabPanel>
            {societyServicesArray.map((srv) => {
              return <ServicesCard srv={srv} key={srv.url} />;
            })}
          </TabPanel>
          <TabPanel>
            {restServicesArray.map((srv) => {
              return <ServicesCard srv={srv} key={srv.url} />;
            })}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
