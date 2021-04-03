import styled, { css } from "styled-components";
import { Button, TextField } from "@material-ui/core";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 200px;
`;

export const Wraper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 10px;
`;

export const Message = styled.div`
  border: 1px solid #80808082;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  height: 70vh;
  width: 100%;
  margin-top: 20px;
  justify-content: center;
  overflow-y: auto;
`;

export const MessageItem = styled.div<{ position: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  ${({ position }) =>
    position
      ? css`
          align-items: flex-end;
        `
      : css`
          align-items: flex-start;
        `}
`;

export const StyledButton = styled(Button)`
  &&& {
    border: 1px solid #80808082;
  }
`;

export const TextMessage = styled(TextField)`
  &&& {
    width: 80%;
  }
`;
