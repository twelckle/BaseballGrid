import "./App.css";
import { Grid, GridItem, Text } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import { generateUniqueRandomNumbers } from "./data/gridNumbers";
import { createContext } from "react";

function App() {
  const teamsUsed = generateUniqueRandomNumbers();

  /*

  stats, fullName,  id
  https://statsapi.mlb.com/api/v1/people/search?names=Joey&hydrate=awards,stats(group=[hitting,pitching],type=[career,yearByYear])"

  https://img.mlbstatic.com/mlb-photos/image/upload/w_300,q_auto:best/v1/people/{playerID}/headshot/67/current
  */

  return (
    <>
      <Grid
        templateAreas={`'header'
          'main'`}
        gridTemplateColumns={"1fr"}
        gridTemplateRows={"auto 1fr"}
        height="100vh"
        width="100vw"
      >
        <GridItem pl="2" bg="orange" area={"header"}>
          Header
        </GridItem>
        <GridItem pl="2" bg="blue" area="main">
          <GameGrid teamsUsed={teamsUsed} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
