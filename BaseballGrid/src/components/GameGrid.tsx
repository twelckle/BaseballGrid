import { Box, SimpleGrid, grid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import { gridNumbers, gridComponent } from "../data/gridNumbers";
import LogoCard from "./LogoCard";
import { Logo, logos } from "../data/logoImages";

const GameGrid = () => {
  const logoOrButton = ({ location }: gridComponent) => {
    if (location[0] === 0 || location[1] === 0)
      return <LogoCard image={logos[0]}></LogoCard>;
    else return <GameCard></GameCard>;
  };
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
