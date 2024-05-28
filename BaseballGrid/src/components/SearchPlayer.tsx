import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { BsSearch } from "react-icons/bs";

const SearchPlayer = ({ onClose }: { onClose: () => void }) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      console.log("click outside");
      onClose(); // Trigger the close action
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="overlay">
      <div className="input-container" ref={ref}>
        <InputGroup width="80%" top={"100px"}>
          <InputLeftElement children={<BsSearch />}></InputLeftElement>
          <Input
            borderRadius={20}
            placeholder="Search Player"
            variant="blue"
            size="lg"
          />
        </InputGroup>
      </div>
    </div>
  );
};

export default SearchPlayer;
