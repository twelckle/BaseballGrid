import { useContext } from "react";
import { AppContext, sizes } from "./GameGrid";
import { Box, Text, VStack } from "@chakra-ui/react";

const GuessesLeftGrid = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("GameCard must be used within an AppContext.Provider");
  }
  const { gameState } = context;
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height={sizes}
      width={sizes}
    >
      <VStack justifyContent="space-between">
        <Text
          align="center"
          fontSize={{ base: "xs", sm: "l", md: "xl", lg: "2xl" }}
          fontFamily="Roboto"
        >
          Number of Guesses
        </Text>
        <Text
          fontFamily="Roboto"
          fontSize={{ base: "1xl", sm: "2xl", md: "3xl", lg: "4xl" }}
          as="b"
          align="center"
        >
          {gameState.numberGuesses}
        </Text>
        {/* <Button>End Game</Button> */}
      </VStack>
    </Box>
  );
};

export default GuessesLeftGrid;
