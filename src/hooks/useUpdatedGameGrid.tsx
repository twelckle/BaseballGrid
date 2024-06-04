import React, { useEffect } from "react";
import { GameState } from "../components/GameGrid";
import locationMapping, { logos } from "../data/logoImages";
import { currentTeams } from "../data/getTeams";

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
  let teamOneMatch = false;
  let teamTwoMatch = false;
  for (let i = 0; i < gameState.teams.length; i++) {
    const checkingTeam = currentTeams(gameState.teams[i]);
    if (checkingTeam === teamOne) {
      teamOneMatch = true;
    } else if (checkingTeam === teamTwo) {
      teamTwoMatch = true;
    }
  }

  return teamOneMatch && teamTwoMatch;
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
    let correctGuess = 0;
    let incorrectGuess = true;
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
          correctGuess = 1;
          incorrectGuess = false;
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

    setGameState({
      ...gameState,
      correctGuesses: gameState.correctGuesses + correctGuess,
      grid: updatedGrid,
      incorrectGuess: incorrectGuess,
    });
  }, [gameState.playerIDSelected]);

  return {};
};

export default useUpdatedGameGrid;
