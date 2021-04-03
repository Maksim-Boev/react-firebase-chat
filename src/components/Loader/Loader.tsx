import React, { FC } from "react";
import { Container } from "@material-ui/core";
import { StyledGrid, Spinner } from "./StyledLoader";

const Loader: FC = () => {
  return (
    <Container>
      <StyledGrid>
        <Spinner />
      </StyledGrid>
    </Container>
  );
};

export default Loader;
