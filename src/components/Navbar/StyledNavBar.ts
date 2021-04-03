import styled from "styled-components";
import { AppBar, Button, Grid } from "@material-ui/core";

export const StyledButton = styled(Button)`
  &&& {
    border: 1px solid #223187;
  }
`;

export const UserName = styled.div`
  padding-left: 10px;
`;

export const StyledAppBar = styled(AppBar)`
  &&& {
    position: static;
  }
`;

export const StyledGrid = styled(Grid)`
  &&& {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
`;
