import { Facebook, Instagram, Pinterest, Twitter } from "@material-ui/icons";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  text-align: center;
  border-top: 1px solid #e1e1e1;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const SocialContainer = styled.div`
  display: inline-flex;
  margin-left: 25px;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

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
