import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e1e1e1;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const LinkURL = styled(Link)`
  text-decoration: none;
  color: black;
  margin-right: 25px;
`;

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
