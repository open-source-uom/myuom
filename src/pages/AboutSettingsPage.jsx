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

import { Box, Image, Text, Accordion } from "@chakra-ui/react";
import membersData from "../assets/data/projectMembers";
import ProjectMembersCard from "../components/ProjectMembersCard";
import UoMLogo from "../assets/myUOMLogo.png";
import { SocialIcon } from "react-social-icons";
import i18n from "../i18n";
import { useSocialMediaURLs } from "../hooks";
function AboutSettingsPage() {
  const SOCIAL_MEDIA_URLS = useSocialMediaURLs();
  return (
    <Box
      align="center"
      marginTop="1em"
      fontFamily="Syne"
      fontSize={{ sm: 11.95, md: 16, lg: 26, xl: 32 }}
    >
      <Image src={UoMLogo} width="200px" height="200px" />
      <Text marginTop="1em" marginBottom="2rem" fontSize={{ sm: 26, md: 30, lg: 34, xl: 38 }}>
        {i18n.t("about_title")}
        <br />
        {i18n.t("about_version")}
      </Text>
      <Text fontSize={{ sm: 17, md: 21, lg: 26, xl: 30 }}>
        @2024 OpenSourceUoM Team
        <br />
        All rights reserved
        <br />
        <br />
      </Text>
      <Text fontSize={{ sm: 17, md: 21, lg: 26, xl: 30 }}>
        {i18n.t("about_find_us_on_socials")}
      </Text>
      <Box paddingTop="10px">
        <SocialIcon
          url={SOCIAL_MEDIA_URLS.facebook}
          style={{ marginRight: "0.5rem" }}
        />
        <SocialIcon
          url={SOCIAL_MEDIA_URLS.instagram}
          style={{ marginRight: "0.5rem" }}
        />
        <SocialIcon
          url={SOCIAL_MEDIA_URLS.youtube}
          style={{ marginRight: "0.5rem" }}
        />
        <SocialIcon
          url={SOCIAL_MEDIA_URLS.twitter}
          style={{ marginRight: "0.5rem" }}
        />
        <SocialIcon
          url={SOCIAL_MEDIA_URLS.LinkedIn}
          style={{ marginRight: "0.5rem" }}
        />
        <SocialIcon
          url={SOCIAL_MEDIA_URLS.gitlab}
          style={{ marginRight: "0.5rem" }}
        />
        <SocialIcon
          url={SOCIAL_MEDIA_URLS.discord}
          style={{ marginRight: "0.5rem" }}
        />
      </Box>
      <Text
        fontSize={{ sm: 15, md: 18, lg: 23, xl: 27 }}
        textAlign="center"
        mt="2rem"
        mx="2rem"
      >
        {i18n.t("about_project_members_title")}
      </Text>
      <Accordion allowToggle mt="1rem">
        {membersData.map((data) => (
          <ProjectMembersCard data={data} key={data.name} />
        ))}
      </Accordion>
    </Box>
  );
}

export default AboutSettingsPage;
