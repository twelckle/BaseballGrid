import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  VStack,
} from "@chakra-ui/react";
import { ChangeEventHandler, useEffect, useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import DisplayPlayer from "./DisplayPlayer";

interface Props {
  onClose: () => void;
}

const SearchPlayer = ({ onClose }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const searchBarRef = useRef<HTMLInputElement>(null);
  const [isTyping, setIsTyping] = useState(false);
  const [typed, setTyped] = useState("");

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      onClose(); // Trigger the close action
    }
  };

  const handleTyping: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { value } = event.target;
    setIsTyping(value.length > 0);
    setTyped(value);
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
        <form onSubmit={(event) => event.preventDefault()}>
          <VStack align="stretch" marginTop={"100px"}>
            <Box mx="auto" width={"100%"} maxWidth={"1200px"}>
              <InputGroup>
                <InputLeftElement
                  color="grey"
                  children={<BsSearch />}
                ></InputLeftElement>
                <Input
                  borderRadius="10px"
                  placeholder="Search Player"
                  variant="blue"
                  size="lg"
                  ref={searchBarRef}
                  onChange={handleTyping}
                  backgroundColor="white"
                  color={"grey"}
                />
              </InputGroup>
            </Box>
            {isTyping && <DisplayPlayer userInput={typed} />}
          </VStack>
        </form>
      </div>
    </div>
  );
};

export default SearchPlayer;
