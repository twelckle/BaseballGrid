import { Box, SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import { gridNumbers, gridComponent } from "../data/gridNumbers";
import LogoCard from "./LogoCard";
import { logos } from "../data/logoImages";
import { useRef } from "react";

interface Props {
  teamsUsed: number[];
}

const GameGrid = ({ teamsUsed }: Props) => {
  const logoOrButton = ({ location }: gridComponent) => {
    if (location[0] === 0 || location[1] === 0) {
      if (location[0] === 0 && location[1] === 0) return <Box></Box>;
      else {
        counter.current += 1;
        return <LogoCard image={logos[teamsUsed[counter.current]]}></LogoCard>;
      }
    } else return <GameCard></GameCard>;
  };
  const counter = useRef(-1);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      width="100vw"
      padding="20px"
    >
      <SimpleGrid columns={4} rowGap="1px" spacing={1} maxW="400px" w="100%">
        {gridNumbers.map((item) => logoOrButton(item))}
      </SimpleGrid>
    </Box>
  );
};

export default GameGrid;
