import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { mobile } from "../../responsive";

export const Table = styled.table`
  border-collapse: collapse;
  width: 95%;
  margin-bottom: 50px;
  margin-top: 15px;
  margin-left: 50px;
  margin-bottom: ${(props) => props.marginBottom};
  ${mobile({
    "margin-left": "8px",
  })}
`;

export const TableDesc = styled.td`
  text-align: left;
  padding-top: 20px;
  padding-left: 8px;
  padding-bottom: 20px;
  padding-right: 8px;
  border-bottom: 1px solid #dddddd;
`;

export const TableHeader = styled.td`
  border-bottom: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
  font-weight: bold;
`;

export const RemoveCollectionBtn = styled.button`
  background-color: #ffffff;
  border: none;
  color: black;
  padding: 4px 32px;
  text-align: center;
  -webkit-text-decoration: none;
  text-decoration: none;
  cursor: pointer;
  border-radius: 3px;
  margin: auto;
  display: block;
  font-weight: 600;
  border: 1px solid black;
  &:hover {
    background-color: white;
    color: black;
  }
`;

export const AnimeImg = styled.img`
  width: 70%;
  box-shadow: 0 0 20px -5px rgb(0 0 0 / 25%);
  border-radius: 12px;
`;

export const AnimeList = styled.li`
  list-style: none;
`;

export const AnimeLink = styled(Link)`
  text-decoration: none;
`;

export const TableImage = styled.td`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 40px;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #dddddd;
`;

export const AnimeListContainer = styled.ul`
  text-align: center;
  ${mobile({
    "padding-left": "0",
  })}
`;

export const NewCollectionBtn = styled.button`
  background-color: #000000;
  border: none;
  color: white;
  padding: 12px 33px;
  text-align: center;
  -webkit-text-decoration: none;
  text-decoration: none;
  cursor: pointer;
  border-radius: 3px;
  float: right;
  margin-top: 80px;
  margin-bottom: 2px;
  display: block;
  font-weight: 600;
  border: 1px solid black;
  margin-right: 45px;
  ${mobile({
    "margin-left": "100px",
    float: "none",
  })}
`;
