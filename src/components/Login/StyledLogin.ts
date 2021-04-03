import styled from "styled-components";
import { Button, Grid } from "@material-ui/core";

export const StyledGrid = styled(Grid)`
  &&& {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
  }
`;

export const StyledButton = styled(Button)`
  &&& {
    border: 1px solid lightgray;
  }
`;
