import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  IconButton,
  List,
  ListItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import { IoClose } from "react-icons/io5";

interface Props {
  setHelp: (value: boolean) => void;
}

const HelpDisplay = ({ setHelp }: Props) => {
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
                    How to play MLB Matchup Matrix
                  </Text>
                  <IconButton
                    colorScheme="blue"
                    aria-label="Close Help"
                    icon={<IoClose />}
                    onClick={() => setHelp(false)}
                  />
                </Flex>
              </CardHeader>
              <CardBody flex="1" overflowY="auto">
                <VStack spacing={"50px"} align="left">
                  <Text fontSize="lg">
                    MLB Matchup Matrix is a fun and challenging game where you
                    test your knowledge of Major League Baseball (MLB) teams.
                    The objective is to fill in a 3x3 grid with the correct
                    teams that meet the criteria set for each row and column.
                  </Text>
                  <Heading as="h2" size="lg">
                    Steps to Play:
                  </Heading>
                  <List spacing={3} pl={5}>
                    <ListItem>
                      <Text as="span" fontWeight="bold">
                        1. Grid Setup:
                      </Text>{" "}
                      The grid consists of 9 cells arranged in a 3x3 format.
                      Each row and column are labeled with different MLB teams.
                    </ListItem>
                    <ListItem>
                      <Text as="span" fontWeight="bold">
                        2. Filling in the Grid:
                      </Text>{" "}
                      Each cell in the grid represents the intersection of a row
                      team and a column team. To correctly fill a cell, you must
                      name a player who has played for both the row team and the
                      column team.
                    </ListItem>
                    <ListItem>
                      <Text as="span" fontWeight="bold">
                        3. Complete the Grid:
                      </Text>{" "}
                      Continue filling in all the cells until the grid is
                      complete. Aim for accuracy as you only have 9 guesses to
                      create a perfect (“immaculate”) grid.
                    </ListItem>
                  </List>
                  <Text fontSize="lg">
                    Enjoy testing your MLB knowledge and have fun completing the
                    grid!
                  </Text>
                </VStack>
              </CardBody>
            </Card>
          </Box>
        </Flex>
      </div>
    </div>
  );
};

export default HelpDisplay;
