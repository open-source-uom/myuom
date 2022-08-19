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
