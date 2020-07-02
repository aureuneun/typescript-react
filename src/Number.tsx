import React from "react";
import styled from "styled-components";

const Container = styled.div<{ current: boolean }>`
  color: ${(props) => (props.current ? props.theme.mainColor : "red")};
`;

interface IProps {
  count: number;
}

const Number = ({ count }: IProps) => {
  return <Container current={count >= 10}>{count}</Container>;
};

export default Number;
