import "./App.css";
import { Grid, GridItem } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import { generateUniqueRandomNumbers } from "./data/gridNumbers";

function App() {
  const teamsUsed = generateUniqueRandomNumbers();

  return (
    <>
      <Grid
        templateAreas={`'header'
            'main'`}
        gridTemplateColumns={"1fr"}
        gridTemplateRows={{ base: "1fr", lg: "50px 1fr" }}
        height="100vh"
        width="100vw"
      >
        <GridItem pl="2" bg="orange" area={"header"}>
          Header
        </GridItem>
        <GridItem pl="2" bg="#595959" area="main">
          <GameGrid teamsUsed={teamsUsed} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
