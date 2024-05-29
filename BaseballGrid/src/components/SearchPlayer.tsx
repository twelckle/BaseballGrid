import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  VStack,
} from "@chakra-ui/react";
import { ChangeEventHandler, useEffect, useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";

interface Player {
  name: string;
  years: string;
  teams: string[];
  picture: string;
}

interface Props {
  onClose: () => void;
}

const SearchPlayer = ({ onClose }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const searchBarRef = useRef<HTMLInputElement>(null);
  const [isTyping, setIsTyping] = useState(false);
  const [typed, setTyped] = useState("");
  const [playersNames, setPlayersNames] = useState({} as Player);

  const getPlayersNames = () => {};

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      console.log("click outside");
      onClose(); // Trigger the close action
    }
  };

  const handleTyping: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { value } = event.target;
    setIsTyping(value.length > 0);
    setTyped(value);
    if (isTyping) {
      getPlayersNames;
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    if (searchBarRef.current) {
      searchBarRef.current.focus();
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="overlay">
      <div className="input-container" ref={ref}>
        <form>
          <VStack align="stretch" marginTop={"100px"}>
            <Box mx="auto" borderWidth={4} width={"100%"} maxWidth={"1200px"}>
              <InputGroup>
                <InputLeftElement children={<BsSearch />}></InputLeftElement>
                <Input
                  placeholder="Search Player"
                  variant="blue"
                  size="lg"
                  ref={searchBarRef}
                  onChange={handleTyping}
                />
              </InputGroup>
            </Box>
            {isTyping && (
              <Box h="50px" bg="tomato">
                {" "}
                1{" "}
              </Box>
            )}
            {isTyping && (
              <Box h="50px" bg="tomato">
                {" "}
                2{" "}
              </Box>
            )}
            {isTyping && (
              <Box h="45px" bg="tomato">
                {" "}
                3{" "}
              </Box>
            )}
          </VStack>
        </form>
      </div>
    </div>
  );
};

export default SearchPlayer;
