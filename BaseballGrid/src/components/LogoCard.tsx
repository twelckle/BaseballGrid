import React from "react";
import { Logo } from "../data/logoImages";
import { Image } from "@chakra-ui/react";

interface Props {
  image: Logo;
}

const LogoCard = ({ image }: Props) => {
  return <Image src={image.image} alt={image.name} />;
};

export default LogoCard;
