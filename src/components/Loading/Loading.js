import React from "react";
import { Rings } from "react-loader-spinner";

import { LoadingWrapper } from "./Style";

const Loading = () => {
  return (
    <LoadingWrapper>
      <Rings color="black" height={80} width={80} />
    </LoadingWrapper>
  );
};

export default Loading;
