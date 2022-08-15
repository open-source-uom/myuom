import { useEffect, useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import myUOMLogo from "../assets/myUOMLogo.png";
import { Flex, Box, Heading, Image, useColorModeValue } from "@chakra-ui/react";
import MenuButton from "./MenuButton";
import { Categories } from "../assets/categories";

function RouteDictionary(route) {
  if (route === "/") return "Αρχική";
  else {
    for (let i = 0; i < Categories.length; i++) {
      if (Categories[i].route === route) return Categories[i].title;
    }
  }
}

export default function Header() {
  const navigate = useNavigate();
  const loc = useLocation();
  const [currentName, setCurrentName] = useState(RouteDictionary(loc.pathname));
  useEffect(() => {
    setCurrentName(RouteDictionary(`${loc.pathname}`));
    console.log(loc.pathname);
    console.log(RouteDictionary(`${loc.pathname}`));
  }, [loc]);

  const goToHomePage = () => {
    navigate("/");
  };

  return (
    <>
      <Flex
        bgColor={useColorModeValue("#f3f3f3", "black")}
        position={{ sm: "relative", lg: "sticky" }}
        direction="row"
        w="100%"
        alignItems="center"
        zIndex={99}
        justifyContent="space-between"
        padding="1rem"
        top="0"
      >
        <Flex
          w={{ sm: "100%", lg: "fit-content" }}
          direction={{ sm: "column", lg: "row" }}
          alignItems={{ sm: "start", lg: "center" }}
          justifyContent="space-between"
          gap={4}
        >
          <Flex
            alignItems="center"
            justifyContent="space-between"
            w={{ sm: "100%", lg: "fit-content" }}
          >
            <Image
              src={myUOMLogo}
              onClick={goToHomePage}
              cursor="pointer"
              w={{ sm: "40px", xl: "60px" }}
            />
            <Box
              display={{ sm: "block", lg: "none" }}
              className={useColorModeValue("light-mode-svg", "dark-mode-svg")}
            >
              {loc.pathname !== "/" ? (
                <Box
                  cursor="pointer"
                  onClick={() => navigate(-1)}
                  w={{ sm: "20px", lg: "20px", xl: "24px" }}
                >
                  <svg
                    className="back-btn-svg"
                    width="100%"
                    viewBox="0 0 11 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 5.66666H10.0575"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.52881 0.999985L10.0575 5.66665L5.52881 10.3333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Box>
              ) : null}
            </Box>
          </Flex>
          <Flex
            className={useColorModeValue("light-mode-svg", "dark-mode-svg")}
            direction="column"
            alignItems="start"
            justifyContent="start"
            gap={1}
          >
            <Heading
              fontSize={{ sm: 32, lg: 34 }}
              color={useColorModeValue("black", "#f3f3f3")}
              fontWeight={500}
              fontFamily="Syne"
            >
              {currentName}
            </Heading>
            {loc.pathname !== "/" ? (
              <Box
                cursor="pointer"
                onClick={() => navigate(-1)}
                w={{ sm: "20px", lg: "20px", xl: "24px" }}
                display={{ sm: "none", lg: "block" }}
              >
                <svg
                  className="back-btn-svg"
                  width="100%"
                  viewBox="0 0 11 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 5.66666H10.0575"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.52881 0.999985L10.0575 5.66665L5.52881 10.3333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Box>
            ) : null}
          </Flex>
        </Flex>
        <Box display={{ sm: "none", lg: "block" }}>
          <MenuButton />
        </Box>
      </Flex>
      <Flex
        w="100%"
        paddingX="20px"
        zIndex={99}
        height="60px"
        alignItems="center"
        justifyContent="space-around"
        backgroundColor={useColorModeValue(
          "rgba(255, 255, 255, 1)",
          "rgba(0, 0, 0, 1)"
        )}
        display={{ sm: "flex", lg: "none" }}
        position="fixed"
        bottom="0"
      >
        <Box onClick={goToHomePage}>
          <svg
            className="home-svg"
            width="28"
            height="30.8"
            viewBox="0 0 20 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 8L10 1L19 8V19C19 19.5304 18.7893 20.0391 18.4142 20.4142C18.0391 20.7893 17.5304 21 17 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8Z"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke={useColorModeValue("#000", "#f3f3f3")}
            />
            <path
              d="M7 21V11H13V21"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke={useColorModeValue("#000", "#f3f3f3")}
            />
          </svg>
        </Box>
        <MenuButton />
      </Flex>
      <Outlet />
    </>
  );
}
