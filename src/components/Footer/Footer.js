import { Facebook, Instagram, Pinterest, Twitter } from "@material-ui/icons";

import {
  Container,
  Left,
  Title,
  Logo,
  SocialContainer,
  SocialIcon,
  Center,
  Right,
} from "./Style";

const Footer = () => {
  return (
    <Container>
      <Left />
      <Center>
        <Title>Follow Us On</Title>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
        <Logo>ANI.ME</Logo>
      </Center>
      <Right />
    </Container>
  );
};

export default Footer;
