import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { mobile } from "../../responsive";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 60px;
  margin-bottom: 20px;
  margin-left: 100px;
  ${mobile({
    "margin-left": "12px",
  })}
`;

export const ListContainer = styled(Link)`
  width: 300px;
  margin: 25px 100px 40px 36px;
  border-radius: 12px;
  -webkit-text-decoration: none;
  text-decoration: none;
  color: black;
  text-align: center;
  border: 1px solid #efefef;
  box-shadow: 0 0 20px -5px rgb(0 0 0 / 25%);
  &:hover {
    transform: scale(1.02);
    transition: all 0.4s;
  }
`;

export const AnimeImage = styled.img`
  width: 300px;
  height: 425px;
  border-radius: 12px 12px 0px 0px;
  object-fit: cover;
`;

export const AnimeTitle = styled.p`
  width: 260px;
  margin-left: 14px;
`;
