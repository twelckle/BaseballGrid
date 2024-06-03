import { createContext, useState } from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import { gridNumbers, gridComponent } from "../data/gridNumbers";
import LogoCard from "./LogoCard";
import { logos } from "../data/logoImages";
import SearchPlayer from "./SearchPlayer";
import useUpdatedGameGrid from "../hooks/useUpdatedGameGrid";
import GuessesLeftGrid from "./GuessesLeftGrid";
import EndGameCard from "./EndGameCard";

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
  numberGuesses: number;
  correctGuesses: number;
}

interface AppContextType {
  gameState: GameState;
  setGameState: React.Dispatch<React.SetStateAction<GameState>>;
}

export const AppContext = createContext<AppContextType | null>(null);

//sizes of the boxes for the grid items
export const sizes = { base: "55px", sm: "75px", md: "134px", lg: "150px" };
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
    numberGuesses: 9,
    correctGuesses: 0,
  });

  useUpdatedGameGrid(gameState, setGameState, teamsUsed);

  const returnEmpty = (location: number[]) => {
    if (location[0] === 0 && location[1] === 0) {
      return true;
    }
    if (location[0] === 4 && location[1] !== 2) {
      return true;
    }
    return false;
  };

  const logoOrButton = (gridComponent: gridComponent) => {
    const location = gridComponent.location;
    if (returnEmpty(location))
      return <Box key={`${location[0]}-${location[1]}`}></Box>;
    else if (location[0] === 4 && location[1] === 2)
      return (
        <GuessesLeftGrid
          key={`${location[0]}-${location[1]}`}
        ></GuessesLeftGrid>
      );
    else if (location[0] === 0 || location[1] === 0) {
      counter += 1;
      return (
        <LogoCard
          key={`${location[0]}-${location[1]}`}
          image={logos[teamsUsed[counter]]}
        ></LogoCard>
      );
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
      {gameState.finish && <EndGameCard></EndGameCard>}
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
            columns={5}
            columnGap={"1px"}
            rowGap={"1px"}
            maxW={{ base: "279px", sm: "379px", md: "674px", lg: "754px" }} //4 for padding
            maxH={{ base: "223px", sm: "303px", md: "539px", lg: "603px" }} //3 for padding
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
