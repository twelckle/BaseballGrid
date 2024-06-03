import React, { useEffect } from "react";
import { GameState } from "../components/GameGrid";
import locationMapping, { logos } from "../data/logoImages";

const playedOnThoseteams = (
  teamsUsed: number[],
  gameState: GameState,
  i: number
): boolean => {
  console.log("here" + gameState.grid[i].location);
  const teamLocations = locationMapping.get(
    JSON.stringify(gameState.grid[i].location)
  );
  console.log(teamLocations);
  if (teamLocations === undefined) return false;
  const teamOne = logos[teamsUsed[teamLocations[0]]].name;
  const teamTwo = logos[teamsUsed[teamLocations[1]]].name;
  console.log(teamOne);
  console.log(teamTwo);
  let count = 0;
  for (let i = 0; i < gameState.teams.length; i++) {
    console.log(gameState.teams[i]);
    if (gameState.teams[i] == teamOne || gameState.teams[i] == teamTwo) {
      count++;
    }
  }

  return count === 2;
};

const useUpdatedGameGrid = (
  gameState: GameState,
  setGameState: React.Dispatch<React.SetStateAction<GameState>>,
  teamsUsed: number[]
) => {
  useEffect(() => {
    let updatedPicture = "";
    let updatedLocation = -1;
    let updatedName = "";
    if (gameState.playerIDSelected === null) return;
    for (let i = 0; i < 20; i++) {
      if (gameState.grid[i].location === gameState.searchBox) {
        if (playedOnThoseteams(teamsUsed, gameState, i)) {
          updatedPicture =
            "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/" +
            gameState.playerIDSelected +
            "/headshot/67/current";
          updatedLocation = i;
          updatedName = gameState.playerName;
        }
        break;
      }
    }

    const updatedGrid = gameState.grid.map((cell, index) => {
      if (index === updatedLocation) {
        return { ...cell, image: updatedPicture, name: updatedName };
      }
      return cell;
    });

    setGameState({ ...gameState, searchBox: [0, 0], grid: updatedGrid });
  }, [gameState.playerIDSelected]);

  return {};
};

export default useUpdatedGameGrid;
