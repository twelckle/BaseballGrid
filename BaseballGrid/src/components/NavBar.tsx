import { Box, HStack, Link, Text } from "@chakra-ui/react";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { LiaDonateSolid } from "react-icons/lia";
import { FaGithub } from "react-icons/fa";
import { GrHelpBook } from "react-icons/gr";
import HelpDisplay from "./HelpDisplay";
import { useState } from "react";

const NavBar = () => {
  const iconsColor = "#4d9968";
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
              <BsFillGrid3X3GapFill size="100%" color={iconsColor} />
            </Box>
            <Text
              fontFamily="Roboto, sans-serif"
              fontSize={{ base: "lg", sm: "xl", md: "2xl", lg: "4xl" }}
              fontWeight="bold"
              overflowWrap="normal"
              whiteSpace="nowrap"
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
