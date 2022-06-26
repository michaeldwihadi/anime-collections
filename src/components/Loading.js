import React from "react";
import { Rings } from "react-loader-spinner";
import styled from "@emotion/styled";

const LoadingWrapper = styled.div`
  position: fixed;
  z-index: 999;
  overflow: show;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100px;
  height: 100px;
`;

const Loading = () => {
  return (
    <LoadingWrapper>
      <Rings color="black" height={80} width={80} />
    </LoadingWrapper>
  );
};

export default Loading;
