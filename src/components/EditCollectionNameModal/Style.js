import styled from "@emotion/styled";
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
  width: 500px;
  height: 300px;
  border-radius: 12px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  padding: 25px;
  display: inline-block;
  text-align: center;
  margin-top: 10px;
`;

export const Title = styled.div`
  display: inline-block;
  text-align: center;
  margin-left: 30px;
  ${mobile({
    "margin-left": "0",
  })}
`;

export const TitleCloseBtn = styled.button`
  display: flex;
  justify-content: flex-end;
  background-color: transparent;
  border: none;
  font-size: 25px;
  cursor: pointer;
  float: right;
`;

export const CloseBtn = styled.button`
  background-color: #ffffff;
  border: none;
  color: black;
  text-align: center;
  -webkit-text-decoration: none;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  border-radius: 6px;
  font-weight: bold;
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

export const CollectionInput = styled.input`
  margin-top: 36px;
  width: 28rem;
  padding: 5px;
  margin-bottom: 35px;
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
`;
