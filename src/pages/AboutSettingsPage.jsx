import {
  Box,
  Button,
  HStack,
  Icon,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import UoMLogo from "../assets/myUOMLogo.png";
import { SocialIcon } from "react-social-icons";

function AboutSettingsPage() {
  return (
    <Box
      align="center"
      marginTop="1em"
      fontFamily="Syne"
      fontSize={{ sm: 11.95, md: 16, lg: 26, xl: 32 }}
    >
      <Image src={UoMLogo} width="200px" height="200px" />
      <Text marginTop="1em" fontSize={{ sm: 26, md: 30, lg: 34, xl: 38 }}>
        myUoM για κινητά
        <br />
        Έκδοση v1.0.0
        <br />
        <br />
      </Text>
      <Text fontSize={{ sm: 17, md: 21, lg: 26, xl: 30 }}>
        @2022 OpenSourceUoM Team
        <br />
        All rights reserved
        <br />
        <br />
      </Text>
      <Text fontSize={{ sm: 17, md: 21, lg: 26, xl: 30 }}>
        Βρες μας στα Social Media
      </Text>
      <Box paddingTop="10px">
        <SocialIcon
          url="https://www.facebook.com/OpenSourceUoM/"
          style={{ marginRight: "0.5rem" }}
        />
        <SocialIcon
          url="https://www.instagram.com/opensourceuom/"
          style={{ marginRight: "0.5rem" }}
        />
        <SocialIcon
          url="https://www.youtube.com/channel/UC98Ggzq6dl_nn5Y0BHb6SLA?sub_confirmation=1"
          style={{ marginRight: "0.5rem" }}
        />
        <SocialIcon
          url="https://twitter.com/opensource_uom"
          style={{ marginRight: "0.5rem" }}
        />
        <SocialIcon
          url="https://www.linkedin.com/company/80766091/"
          style={{ marginRight: "0.5rem" }}
        />
        <SocialIcon
          url="https://gitlab.com/opensourceuom"
          style={{ marginRight: "0.5rem" }}
        />
        <SocialIcon
          url="https://discord.com/invite/XtxtM3ZHUm"
          style={{ marginRight: "0.5rem" }}
        />
      </Box>
    </Box>
  );
}

export default AboutSettingsPage;
