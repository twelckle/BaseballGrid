import { useState } from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import { gridNumbers, gridComponent } from "../data/gridNumbers";
import LogoCard from "./LogoCard";
import { logos } from "../data/logoImages";
import SearchPlayer from "./SearchPlayer";

interface Props {
  teamsUsed: number[];
}

export interface GameState {
  search: boolean;
  searchBox: gridComponent;
  finish: boolean;
}

const GameGrid = ({ teamsUsed }: Props) => {
  const logoOrButton = (gridComponent: gridComponent) => {
    const location = gridComponent.location;
    if (location[0] === 0 || location[1] === 0) {
      if (location[0] === 0 && location[1] === 0)
        return <Box key={`${location[0]}-${location[1]}`}></Box>;
      else {
        counter += 1;
        return (
          <LogoCard
            key={`${location[0]}-${location[1]}`}
            image={logos[teamsUsed[counter]]}
          ></LogoCard>
        );
      }
    } else
      return (
        <GameCard
          key={`${location[0]}-${location[1]}`}
          searchBox={gameState.searchBox}
          spot={location}
          onPush={toggleSearch}
        ></GameCard>
      );
  };

  let counter = -1;

  const [gameState, setGameState] = useState<GameState>({
    search: false,
    searchBox: { location: [0, 0] },
    finish: false,
  } as GameState);

  const toggleSearch = (newState: GameState) => {
    setGameState(newState);
  };

  const onClose = () => {
    setGameState({
      ...gameState,
      search: false,
      searchBox: { location: [0, 0] },
    });
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
      {gameState.search && <SearchPlayer onClose={onClose} />}
      <div className="main-content">
        <SimpleGrid columns={4} rowGap="1px" spacing={1} maxW="400px" w="100%">
          {gridNumbers.map((item) => logoOrButton(item))}
        </SimpleGrid>
      </div>
    </Box>
  );
};

export default GameGrid;
