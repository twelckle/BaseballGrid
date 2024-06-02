import { Box, Button, Image, Text } from "@chakra-ui/react";
import { AppContext, GameState } from "./GameGrid";
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
    };
    onPush(newState);
  };

  let imageShown = "";
  let nameShown = "";
  for (let i = 1; i < 16; i++) {
    if (gameState.grid[i].location === spot) {
      imageShown = gameState.grid[i].image;
      nameShown = gameState.grid[i].name;
    }
  }

  return (
    <div>
      {imageShown !== "" ? (
        <Box
          height={{ base: "65px", sm: "80px", lg: "150px" }}
          width={{ base: "65px", sm: "80px", lg: "150px" }}
          position="relative"
        >
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
            >
              {nameShown}
            </Text>
          </Box>
        </Box>
      ) : (
        <Box
          bg={searchBox === spot ? "yellow" : "#8c8c8c"}
          height={{ base: "65px", sm: "90px", lg: "150px" }}
          width={{ base: "65px", sm: "90px", lg: "150px" }}
          as={Button}
          borderRadius={0}
          onClick={handleClick}
        />
      )}
    </div>
  );
};

export default GameCard;
