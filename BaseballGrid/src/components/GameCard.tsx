import { Box, Button } from "@chakra-ui/react";
import { GameState } from "./GameGrid";
import { gridComponent } from "../data/gridNumbers";

interface Props {
  onPush: (newState: GameState) => void;
  searchBox: gridComponent;
  spot: number[];
}

const GameCard = ({ searchBox, spot, onPush }: Props) => {
  const handleClick = () => {
    const newState: GameState = {
      search: true,
      searchBox: { location: spot },
      finish: false,
    };
    onPush(newState);
  };

  return (
    <Box
      bg={searchBox.location === spot ? "yellow" : "tomato"}
      height="100px"
      width="100px"
      as={Button}
      borderRadius={0}
      onClick={handleClick}
    />
  );
};

export default GameCard;
