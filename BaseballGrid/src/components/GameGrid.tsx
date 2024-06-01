import { createContext, useState } from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import { gridNumbers, gridComponent } from "../data/gridNumbers";
import LogoCard from "./LogoCard";
import { logos } from "../data/logoImages";
import SearchPlayer from "./SearchPlayer";
import useUpdatedGameGrid from "../hooks/useUpdatedGameGrid";

interface Props {
  teamsUsed: number[];
}

export interface GameState {
  search: boolean;
  searchBox: number[];
  finish: boolean;
  playerIDSelected: number | null;
  playerName: string;
  teams: string[];
  grid: gridComponent[];
}

interface AppContextType {
  gameState: GameState;
  setGameState: React.Dispatch<React.SetStateAction<GameState>>;
}

export const AppContext = createContext<AppContextType | null>(null);

const GameGrid = ({ teamsUsed }: Props) => {
  console.log(teamsUsed);
  const [gameState, setGameState] = useState<GameState>({
    search: false,
    searchBox: [0, 0],
    finish: false,
    playerIDSelected: null,
    playerName: "",
    teams: [],
    grid: gridNumbers,
  });

  useUpdatedGameGrid(gameState, setGameState);

  //   console.log(gameState.playerIDSelected);
  //   console.log(gameState.teams);
  console.log(gameState.grid);

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
            gridComponent={gridComponent}
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

  const toggleSearch = (newState: GameState) => {
    setGameState(newState);
  };

  const onClose = () => {
    setGameState({
      ...gameState,
      search: false,
      searchBox: [0, 0],
    });
  };

  return (
    <AppContext.Provider value={{ gameState, setGameState }}>
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
          <SimpleGrid
            columns={4}
            rowGap="1px"
            spacing={1}
            maxW="400px"
            w="100%"
          >
            {gameState.grid.map((item) => logoOrButton(item))}
          </SimpleGrid>
        </div>
      </Box>
    </AppContext.Provider>
  );
};

export default GameGrid;
