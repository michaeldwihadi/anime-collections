import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-bottom: 80px;
`;

export const LinkContainer = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const ListContainer = styled.div`
  width: 300px;
  margin-right: 100px;
  margin-left: 61px;
  margin-bottom: 40px;
  margin-top: 25px;
  border-radius: 12px;
  -webkit-text-decoration: none;
  text-decoration: none;
  color: black;
  text-align: center;
  border: 1px solid #efefef;
  box-shadow: 0 0 20px -5px rgb(0 0 0 / 25%);
  &:hover {
    box-shadow: 0 0 20px -5px rgb(0 0 0 / 75%);
  }
`;

export const AnimeImage = styled.img`
  width: 300px;
  height: 425px;
  border-radius: 12px 12px 0px 0px;
  object-fit: cover;
`;

export const AnimeTitle = styled.p`
  width: 200px;
  margin: auto;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const RemoveBtn = styled.button`
  background-color: #ffffff;
  border: none;
  color: red;
  padding: 8px 31px;
  text-align: center;
  -webkit-text-decoration: none;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-bottom: 8px;
  cursor: pointer;
  border-radius: 12px;
  font-weight: bold;
`;

export const CollectionTitleContainer = styled.div`
  padding-top: 50px;
  margin-left: 68px;
  font-size: 21px;
`;

export const EditCollectionBtn = styled.button`
  background-color: #000000;
  border: none;
  color: white;
  padding: 12px 33px;
  text-align: center;
  -webkit-text-decoration: none;
  text-decoration: none;
  cursor: pointer;
  border-radius: 3px;
  margin-right: 45px;
  display: block;
  font-weight: 600;
  border: 1px solid black;
  margin-left: 45px;
  display: inline-block;
  float: right;
  margin-top: 30px;
  &:hover {
    background-color: white;
    color: black;
  }
`;

export const CollectionTitleName = styled.h2`
  display: inline-block;
`;
