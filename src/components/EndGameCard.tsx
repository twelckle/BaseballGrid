import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  IconButton,
  Text,
  VStack,
  Image,
  Link,
} from "@chakra-ui/react";
import { useContext } from "react";
import { AppContext } from "./GameGrid";
import { IoClose } from "react-icons/io5";

const EndGameCard = () => {
  const fontUsed = "Roboto, sans-serif";
  const colorUsed = "black";
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("GameCard must be used within an AppContext.Provider");
  }
  const { gameState, setGameState } = context;

  const scoreImage = () => {
    if (gameState.correctGuesses <= 4) {
      return (
        <>
          <Image
            src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnBkenZ0bml5azFhc3d0ZDZwdW83czd4eHo5emVkcHpxc29lZ2dzbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/AAnIjZPUhrUM8/giphy.gif"
            alt="End of Game GIF"
            borderRadius="10px"
            mx="auto"
          />
          <Link href="https://mlb.com" isExternal>
            <Text
              fontSize="2xl"
              as="span"
              textAlign="center"
              color={colorUsed}
              fontFamily={fontUsed}
            >
              Yikes! We should probably watch a little more Baseball
            </Text>
          </Link>
        </>
      );
    }

    if (gameState.correctGuesses <= 7) {
      return (
        <>
          <Image
            src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWN3cTFjZTFpM3dmMTIzdmt5ZGhzaDhsODh1cGd0NWplNWt4dnJtbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0HlLhPzX5ezlPObS/giphy.gif"
            alt="End of Game GIF"
            borderRadius="10px"
            mx="auto"
          />
          <Link href="https://www.baseball-reference.com/" isExternal>
            <Text
              fontSize="2xl"
              as="span"
              textAlign="center"
              color={colorUsed}
              fontFamily={fontUsed}
            >
              There we go! A little more studying and we will be running this
              show soon
            </Text>
          </Link>
        </>
      );
    } else {
      return (
        <>
          <Image
            src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHZycXpveXNmMTd3b2F6bWt1aHBlbjVxejJvcmRxYWp3b3ljM2p6eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/R2N60qZeMuRLW/giphy.gif"
            alt="End of Game GIF"
            borderRadius="10px"
            mx="auto"
          />
          <Link href="https://baseballhall.org/" isExternal>
            <Text
              fontSize="2xl"
              as="span"
              textAlign="center"
              color={colorUsed}
              fontFamily={fontUsed}
            >
              Take a bow!
            </Text>
          </Link>
        </>
      );
    }
  };

  return (
    <div className="overlay">
      <div className="input-container">
        <Flex align="center" justify="center" height="100vh" overflow="hidden">
          <Box
            mx="auto"
            width={"100%"}
            maxWidth={"1200px"}
            marginTop="50px"
            maxHeight="80vh"
            overflow="hidden"
            display="flex"
            flexDirection="column"
          >
            <Card
              flex="1"
              display="flex"
              flexDirection="column"
              overflow="hidden"
            >
              <CardHeader>
                <Flex justifyContent="space-between">
                  <Box />
                  <Text
                    fontFamily="Roboto"
                    fontSize={{ base: "1xl", sm: "2xl", md: "3xl", lg: "4xl" }}
                    as="b"
                    align="center"
                  >
                    End of Game
                  </Text>
                  <IconButton
                    colorScheme="blue"
                    aria-label="Close Help"
                    icon={<IoClose />}
                    onClick={() =>
                      setGameState({ ...gameState, finish: false })
                    }
                  />
                </Flex>
              </CardHeader>
              <CardBody flex="1" overflowY="auto">
                <VStack spacing={"50px"}>
                  <Text
                    fontSize="4xl"
                    as="b"
                    align="center"
                    color={colorUsed}
                    fontFamily={fontUsed}
                  >
                    {gameState.correctGuesses}/9
                  </Text>
                  {scoreImage()}
                </VStack>
              </CardBody>
            </Card>
          </Box>
        </Flex>
      </div>
    </div>
  );
};

export default EndGameCard;
