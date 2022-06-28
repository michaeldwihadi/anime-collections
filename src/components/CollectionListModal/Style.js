import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { mobile } from "../../responsive";

export const ModalBackground = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.25);
`;

export const ModalContainer = styled.div`
  max-height: 500px;
  min-height: 375px;
  width: 500px;
  border-radius: 12px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  padding: 25px;
  display: inline-block;
  text-align: center;
  margin-top: 10px;
  ${mobile({
    width: "300px",
  })}
`;

export const TitleContainer = styled.div`
  display: inline-block;
  text-align: center;
`;

export const TitleModal = styled.h1`
  padding: 0;
  margin: 10px;
`;

export const TitleCloseBtn = styled.button`
  display: flex;
  justify-content: flex-end;
  background-color: transparent;
  border: none;
  font-size: 25px;
  cursor: pointer;
`;

export const Body = styled.div`
  flex: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  text-align: center;
`;

export const Footer = styled.div`
  flex: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 90px;
  margin-top: 15px;
`;

export const TableDesc = styled.td`
  text-align: left;
  padding-top: 20px;
  padding-left: 8px;
  padding-bottom: 8px;
  padding-right: 8px;
`;

export const TableHeader = styled.td`
  border-bottom: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
  font-weight: bold;
`;

export const TableHeaderButton = styled.td`
  border-bottom: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
  font-weight: bold;
`;

export const TableDescButton = styled.td`
  padding-top: 20px;
  text-align: left;
  width: 25%;
`;

export const AddCollectionBtn = styled.button`
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
    transform: scale(1.02);
    transition: all 0.4s;
  }
  ${mobile({
    "padding-left": "8px 110px",
  })}
`;

export const FooterLink = styled(Link)`
  background-color: #ffffff;
  border: none;
  color: black;
  padding: 8px 177px;
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
    transform: scale(1.02);
    transition: all 0.4s;
  }
  ${mobile({
    padding: "8px 120px",
  })}
`;

export const LeftBtn = styled.button`
  background-color: #ffffff;
  border: none;
  color: black;
  padding: 6px 22px;
  text-align: center;
  -webkit-text-decoration: none;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  border-radius: 6px;
  font-weight: bold;
  margin-right: 26rem;
  margin-left: -25px;
`;

export const RightBtn = styled.button`
  background-color: #ffffff;
  border: none;
  color: black;
  text-align: center;
  -webkit-text-decoration: none;
  -webkit-text-decoration: none;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  border-radius: 6px;
  font-weight: bold;
  ${mobile({
    "margin-left": "-13rem",
  })}
`;

export const CollectionInput = styled.input`
  margin-top: 36px;
  width: 28rem;
  padding: 5px;
  margin-bottom: 35px;
  ${mobile({
    width: "16rem",
  })}
`;

export const CollectionSubmitBtn = styled.input`
  background-color: #000000;
  border: none;
  color: white;
  padding: 7px 210px;
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
  ${mobile({
    padding: "7px 113px",
  })}
`;
