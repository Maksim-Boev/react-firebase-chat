import React, { FC } from "react";
import { Grid, Toolbar } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { ConstTypes } from "../../utils/consts";
import { StyledAppBar, StyledButton } from "./StyledNavBar";

const Navbar: FC = () => {
  const user = false;
  return (
    <StyledAppBar>
      <Toolbar>
        <Grid container justify="flex-end">
          {user ? (
            <StyledButton>Выйти</StyledButton>
          ) : (
            <NavLink to={ConstTypes.LOGIN_ROUTE}>
              <StyledButton>Логин</StyledButton>
            </NavLink>
          )}
        </Grid>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar;
