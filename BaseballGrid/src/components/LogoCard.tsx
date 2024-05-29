import { gridComponent } from "../data/gridNumbers";
import { Logo } from "../data/logoImages";
import { Box, Image } from "@chakra-ui/react";

interface Props {
  image: Logo;
  gridComponent: gridComponent;
}

const LogoCard = ({ gridComponent, image }: Props) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        marginBottom: gridComponent.location[1] === 0 ? "20px" : undefined,
        marginRight: gridComponent.location[0] === 0 ? "20px" : undefined,
      }}
    >
      <Image boxSize="80px" src={image.image} alt={image.name} />
    </Box>
  );
};

export default LogoCard;
