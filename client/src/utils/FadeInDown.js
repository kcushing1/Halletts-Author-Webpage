import React from "react";
import styled, { keyframes } from "styled-components";
import { fadeInDown } from "react-animations";

const fadeAnim = keyframes`${fadeInDown}`;
const FadeDiv = styled.div`
  animation: 1.5s ${fadeAnim};
`;

export default FadeDiv;
