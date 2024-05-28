import "./App.css";
import { Grid, GridItem } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";

function App() {
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
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
