import { Box, HStack, Link, Text, Image } from "@chakra-ui/react";
import { LiaDonateSolid } from "react-icons/lia";
import { FaGithub } from "react-icons/fa";
import { GrHelpBook } from "react-icons/gr";
import HelpDisplay from "./HelpDisplay";
import { useState } from "react";
import logo from "../assets/baseball-favicon.png";

const NavBar = () => {
  const iconsColor = "white";
  const [help, setHelp] = useState(false);
  return (
    <>
      {help && <HelpDisplay setHelp={setHelp} />}
      <HStack paddingLeft="5px" paddingTop="5px" justifyContent="space-between">
        <div>
          <HStack spacing={{ base: "8px", sm: "12px", md: "16px", lg: "20px" }}>
            <Box
              width={{ base: "15px", sm: "45px", md: "45px", lg: "55px" }}
              height={{ base: "15px", sm: "45px", md: "45px", lg: "55px" }}
            >
              <Image src={logo} />
              <Image></Image>
            </Box>
            <Text
              fontFamily="Roboto, sans-serif"
              fontSize={{ base: "lg", sm: "xl", md: "2xl", lg: "4xl" }}
              fontWeight="bold"
              overflowWrap="normal"
              whiteSpace="nowrap"
              color={"white"}
            >
              BASEBALL GRID
            </Text>
          </HStack>
        </div>
        <div>
          <HStack
            paddingRight="30px"
            spacing={{ base: "8px", sm: "12px", md: "16px", lg: "20px" }}
          >
            <Link onClick={() => setHelp(true)}>
              <Box
                width={{ base: "15px", sm: "45px", md: "45px", lg: "55px" }}
                height={{ base: "15px", sm: "45px", md: "45px", lg: "55px" }}
              >
                <GrHelpBook size="90%" color={iconsColor} />
              </Box>
            </Link>
            <Link href="https://github.com/twelckle/BaseballGrid" isExternal>
              <Box
                width={{ base: "15px", sm: "45px", md: "45px", lg: "55px" }}
                height={{ base: "15px", sm: "45px", md: "45px", lg: "55px" }}
              >
                <FaGithub size="90%" color={iconsColor} />
              </Box>
            </Link>
            <Link href="https://account.venmo.com/u/Theo-Welckle" isExternal>
              <Box
                width={{ base: "15px", sm: "45px", md: "45px", lg: "55px" }}
                height={{ base: "15px", sm: "45px", md: "45px", lg: "55px" }}
              >
                <LiaDonateSolid size="100%" color={iconsColor} />
              </Box>
            </Link>
          </HStack>
        </div>
      </HStack>
    </>
  );
};

export default NavBar;
