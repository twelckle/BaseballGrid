import getPlayer from "../hooks/getPlayer";
import { Box, Button, HStack } from "@chakra-ui/react";
// import {Team, Split, PlayerStats, Player, People} from "../hooks/getPlayer";
import { Player } from "../hooks/getPlayer";
import getPlayerYears from "../data/getPlayerInfo";
import { useContext } from "react";
import { AppContext } from "./GameGrid";
import getTeams from "../data/getTeams";

interface Props {
  userInput: string;
}

const DisplayPlayer = ({ userInput }: Props) => {
  const { playerInfo, error, isLoading } = getPlayer({ userInput });
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("GameCard must be used within an AppContext.Provider");
  }
  const { gameState, setGameState } = context;

  if (isLoading) {
    return (
      <Box
        h="50px"
        bg="#423f40"
        paddingLeft={"10px"}
        paddingTop={"12px"}
        borderRadius="10px"
      >
        Loading...
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        h="50px"
        bg="#423f40"
        paddingLeft={"10px"}
        paddingTop={"5px"}
        borderRadius="10px"
      >
        {error}
      </Box>
    );
  }

  if (!playerInfo || playerInfo.length === 0) {
    return (
      <Box
        h="50px"
        bg="#423f40"
        paddingLeft={"10px"}
        paddingTop={"12px"}
        borderRadius="10px"
      >
        No player information available
      </Box>
    );
  }

  const selectPlayer = (player: Player) => {
    const teams = getTeams(player);
    console.log(teams);
    setGameState({
      ...gameState,
      search: false,
      finish: false,
      playerIDSelected: player.id,
      playerName: player.fullName,
      teams: teams,
    });
  };
  return (
    <>
      <Box overflowY="auto" maxHeight="400px" borderRadius="10px">
        {playerInfo.map((player: Player) =>
          getPlayerYears(player) === " " ? null : (
            <Box
              h="50px"
              bg="#423f40"
              paddingLeft={"10px"}
              paddingTop={"5px"}
              key={player.id}
              _hover={{ bg: "#b37300" }}
            >
              <HStack justifyContent="space-between">
                <>
                  {player.fullName} | {getPlayerYears(player)}
                </>
                <Button
                  marginRight="15px"
                  color="#26f326"
                  backgroundColor="#314e31"
                  _hover={{
                    backgroundColor: "#26f326",
                    color: "white",
                  }}
                  onClick={() => {
                    selectPlayer(player);
                  }}
                >
                  Select
                </Button>
              </HStack>
            </Box>
          )
        )}
      </Box>
    </>
  );
};

export default DisplayPlayer;
