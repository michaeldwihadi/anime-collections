import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { mobile } from "../../responsive";

export const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

export const Wrapper = styled.div`
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e1e1e1;
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  ${mobile({
    "font-size": "12px",
  })}
`;

export const Center = styled.div`
  flex: 1;
  text-align: center;
`;

export const Logo = styled.h1`
  font-weight: bold;
`;
export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({
    "font-size": "12px",
    "text-align": "center",
  })}
`;

export const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

export const LinkURL = styled(Link)`
  text-decoration: none;
  color: black;
  margin-right: 25px;
`;
