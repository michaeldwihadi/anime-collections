import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  text-align: center;
  border-top: 1px solid #e1e1e1;
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const Logo = styled.h1``;

export const SocialContainer = styled.div`
  display: inline-flex;
  margin-left: 25px;
`;

export const SocialIcon = styled.div`
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

export const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

export const Title = styled.h3`
  margin-bottom: 30px;
`;

export const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
