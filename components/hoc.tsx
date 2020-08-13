import * as React from "react";
import { useSelector } from "react-redux";
import { ReactElement } from "react";
import styled from "styled-components";
import Spinner from "./spinner";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-family: "Open Sans", sans-serif;
`;
const Hoc: React.FunctionComponent = (props): ReactElement => {
  const loading = useSelector((state) => state.mainReducer.loading);
  // in case global state loading=true  - show Spinner overlay to indicate process

  return (
    <Wrapper>
      {loading && <Spinner />}
      {props.children}
    </Wrapper>
  );
};

export default Hoc;
