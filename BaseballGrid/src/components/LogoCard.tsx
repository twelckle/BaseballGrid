import { Logo } from "../data/logoImages";
import { Box, Image } from "@chakra-ui/react";

interface Props {
  image: Logo;
}

const LogoCard = ({ image }: Props) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Image boxSize="80px" src={image.image} alt={image.name} />
    </Box>
  );
};

export default LogoCard;
