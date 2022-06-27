import React from "react";

import {
  Container,
  Wrapper,
  Left,
  Center,
  Logo,
  Right,
  MenuItem,
  LinkURL,
} from "./Style";

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <LinkURL to="/">HOME</LinkURL>
        </Left>
        <Center>
          <LinkURL to="/">
            <Logo>ANI.ME</Logo>
          </LinkURL>
        </Center>
        <Right>
          <LinkURL to="/list">
            <MenuItem>MY COLLECTION</MenuItem>
          </LinkURL>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
