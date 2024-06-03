import "./App.css";
import { Grid, GridItem } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import { generateUniqueRandomNumbers } from "./data/gridNumbers";
import NavBar from "./components/NavBar";

function App() {
  const teamsUsed = generateUniqueRandomNumbers();

  return (
    <>
      <Grid
        templateAreas={`'header'
            'main'`}
        gridTemplateColumns={"1fr"}
        gridTemplateRows={{
          base: "20px, 1fr",
          sm: "50px 1fr",
          md: "50px 1fr",
          lg: "60px 1fr",
        }}
        height="100vh"
        width="100vw"
      >
        <GridItem pl="2" bg="#595959" area={"header"}>
          <NavBar />
        </GridItem>
        <GridItem pl="2" bg="#595959" area="main">
          <GameGrid teamsUsed={teamsUsed} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
