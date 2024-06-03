import { Logo } from "../data/logoImages";
import { Box, Image } from "@chakra-ui/react";
import { sizes } from "./GameGrid";

interface Props {
  image: Logo;
}

const LogoCard = ({ image }: Props) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      boxSize={sizes}
    >
      <Image
        boxSize={{ base: "37px", sm: "50px", md: "90px", lg: "100px" }}
        src={image.image}
        alt={image.name}
      />
    </Box>
  );
};

export default LogoCard;
