import { Box, Button, Image, Text } from "@chakra-ui/react";
import { AppContext, GameState, sizes } from "./GameGrid";
import { useContext } from "react";

interface Props {
  onPush: (newState: GameState) => void;
  searchBox: number[];
  spot: number[];
}

const GameCard = ({ searchBox, spot, onPush }: Props) => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("GameCard must be used within an AppContext.Provider");
  }
  const { gameState } = context;
  const handleClick = () => {
    const newState: GameState = {
      ...gameState,
      search: true,
      searchBox: spot,
      finish: false,
      playerIDSelected: null,
      playerName: "",
      teams: [],
      incorrectGuess: false,
    };
    onPush(newState);
  };

  let imageShown = "";
  let nameShown = "";
  for (let i = 1; i < 20; i++) {
    if (gameState.grid[i].location === spot) {
      imageShown = gameState.grid[i].image;
      nameShown = gameState.grid[i].name;
    }
  }

  return (
    <div>
      {imageShown !== "" ? (
        <Box height={sizes} width={sizes} position="relative">
          <Image
            src={imageShown}
            objectFit={"contain"}
            height="100%"
            width="100%"
            backgroundColor={"green"}
          />
          <Box
            position="absolute"
            bottom="0"
            height="15px"
            width="100%"
            bg="rgba(0, 0, 0, 1)"
            color="#white"
            textAlign="center"
          >
            <Text
              fontSize="xs"
              fontWeight="bold"
              overflow="hidden"
              whiteSpace="nowrap"
              lineHeight="15px"
              color={"white"}
            >
              {nameShown}
            </Text>
          </Box>
        </Box>
      ) : gameState.numberGuesses === 0 ? (
        <Box bg={"#8c8c8c"} height={sizes} width={sizes} borderRadius={0} />
      ) : (
        <Box
          bg={
            searchBox === spot && gameState.incorrectGuess === false
              ? "yellow"
              : searchBox === spot && gameState.incorrectGuess === true
              ? "red"
              : "#8c8c8c"
          }
          height={sizes}
          width={sizes}
          as={Button}
          borderRadius={0}
          onClick={handleClick}
        />
      )}
    </div>
  );
};

export default GameCard;
