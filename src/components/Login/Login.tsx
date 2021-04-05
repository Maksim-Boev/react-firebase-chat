import React, { FC } from "react";
import { Container, Grid, Box } from "@material-ui/core";

import firebase from "firebase";

import { StyledGrid, StyledButton } from "./StyledLogin";

const Login: FC = () => {
  const { auth } = firebase;

  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    await auth().signInWithPopup(provider);
  };

  return (
    <Container>
      <StyledGrid>
        <Grid>
          <Box>
            <StyledButton onClick={login}>Войти с помощью Google</StyledButton>
          </Box>
        </Grid>
      </StyledGrid>
    </Container>
  );
};

export default Login;
