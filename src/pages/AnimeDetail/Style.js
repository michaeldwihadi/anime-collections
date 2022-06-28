import styled from "@emotion/styled";
import { mobile } from "../../responsive";

export const AnimeImage = styled.img`
  width: 300px;
  height: 425px;
  object-fit: cover;
  margin-right: 50px;
  margin-top: 10px;
  margin-left: 17rem;
  border-radius: 12px;
  ${mobile({
    "margin-left": "3rem",
  })}
`;

export const AnimeTitle = styled.h1`
  margin-top: 0;
`;

export const AnimeDetailContainer = styled.div`
  margin-left: -10rem;
  ${mobile({
    "margin-left": "4rem",
  })}
`;

export const Columns = styled.div`
  float: left;
  width: 50%;
  margin-top: 100px;
  ${mobile({
    width: "83%",
    float: "",
  })}
`;

export const Row = styled.div`
  &:after {
    content: "";
    display: table;
    clear: both;
  }
  margin-top: 40px;
  margin-bottom: 100px;
`;

export const AnimeDesc = styled.p`
  max-width: 600px;
  text-align: justify;
`;

export const CollectionButton = styled.button`
  background-color: #ffffff;
  border: none;
  color: black;
  padding: 15px 32px;
  text-align: center;
  -webkit-text-decoration: none;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 70px 2px;
  cursor: pointer;
  border-radius: 12px;
  width: 600px;
  border: 2px solid black;
  font-weight: bold;
  &:hover {
    background-color: black;
    color: white;
  }
  ${mobile({
    width: "260px",
    padding: "8px 36px",
    height: "60px",
  })}
`;
