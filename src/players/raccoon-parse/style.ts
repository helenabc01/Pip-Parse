import styled from "styled-components";

export interface IPipPosition {
  leftPosition: number;
  rightPosition: number;
  upPosition: number;
  bottonPosition: number;
}

export const Parse = styled.div<IPipPosition>(
  ({ leftPosition, rightPosition, upPosition, bottonPosition }) => `
  width: 30px;
  height: 30px;
  background-color: grey;
  position: absolute;
`
);
