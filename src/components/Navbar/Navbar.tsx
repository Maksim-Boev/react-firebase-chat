import React, { FC } from "react";
import { Avatar, Toolbar } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "firebase";
import { ConstTypes } from "../../utils/consts";
import {
  StyledAppBar,
  StyledButton,
  StyledGrid,
  UserName,
} from "./StyledNavBar";

const Navbar: FC = () => {
  const [user] = useAuthState(firebase.auth());

  const img = user?.photoURL;
  console.log(`"${img}"`);
  const name = user?.displayName;
  return (
    <StyledAppBar>
      <Toolbar>
        <Avatar src={`${img}`} alt="avatar" />
        <UserName>{name}</UserName>
        <StyledGrid>
          {user ? (
            <StyledButton onClick={() => firebase.auth().signOut()}>
              Выйти
            </StyledButton>
          ) : (
            <NavLink to={ConstTypes.LOGIN_ROUTE}>
              <StyledButton>Логин</StyledButton>
            </NavLink>
          )}
        </StyledGrid>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar;
