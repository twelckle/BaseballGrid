import React, { useEffect } from "react";
import { GameState } from "../components/GameGrid";

const useUpdatedGameGrid = (
  gameState: GameState,
  setGameState: React.Dispatch<React.SetStateAction<GameState>>
) => {
  useEffect(() => {
    let updatedPicture = "";
    let updatedLocation = -1;
    let updatedName = "";
    if (gameState.playerIDSelected === null) return;
    for (let i = 0; i < 16; i++) {
      if (gameState.grid[i].location === gameState.searchBox) {
        updatedPicture =
          "https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/" +
          gameState.playerIDSelected +
          "/headshot/67/current";
        updatedLocation = i;
        updatedName = gameState.playerName;
        break;
      }
    }

    const updatedGrid = gameState.grid.map((cell, index) => {
      if (index === updatedLocation) {
        return { ...cell, image: updatedPicture, name: updatedName };
      }
      return cell;
    });

    setGameState({ ...gameState, grid: updatedGrid });
  }, [gameState.playerIDSelected]);

  return {};
};

export default useUpdatedGameGrid;
