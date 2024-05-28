import { Box, Button } from "@chakra-ui/react";

const GameCard = () => {
  return (
    <Box
      bg="tomato"
      height="100px"
      width="100px"
      as={Button}
      borderRadius={0}
    />
  );
};

export default GameCard;
