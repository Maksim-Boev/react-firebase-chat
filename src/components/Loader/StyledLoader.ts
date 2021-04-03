import styled, { keyframes } from "styled-components";
import { Grid } from "@material-ui/core";

export const StyledGrid = styled(Grid)`
  &&& {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
  }
`;

const rotation = keyframes` 
   0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }`;

export const Spinner = styled.div`
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #3f51b5;
  border-color: #3f51b5 transparent #3f51b5 transparent;
  animation: ${rotation} 1.2s linear infinite;
`;
