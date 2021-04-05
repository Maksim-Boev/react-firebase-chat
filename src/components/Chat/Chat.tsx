import React, { FC, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import { useCollectionData } from "react-firebase-hooks/firestore";
import firebase from "firebase";

import { Avatar } from "@material-ui/core";
import {
  StyledButton,
  Container,
  Message,
  TextMessage,
  Wraper,
  MessageItem,
} from "./StyledChat";
import Loader from "../Loader";
import { UserMessageType } from "../../types/types";

const Chat: FC = () => {
  const [value, setValue] = useState("");
  const [user] = useAuthState(firebase.auth());
  const { firestore } = firebase;
  const [messages, loading] = useCollectionData(
    firestore().collection("messages").orderBy("time")
  );

  const userMessage: UserMessageType = {
    uid: user?.uid,
    displayName: user?.displayName,
    photoURL: user?.photoURL,
    text: value,
    time: firebase.firestore.FieldValue.serverTimestamp(),
  };

  const sendMessage = () => {
    if (value.length > 0) {
      firestore()
        .collection("messages")
        .doc()
        .set(userMessage)
        .then(() => console.log("Document successfully written!"))
        .catch((error) => {
          console.error("Error writing document: ", error);
        });
    }
    setValue("");
  };

  const handlerKey = (e: any) => e.key === "Enter" && sendMessage();

  return (
    <Container>
      <Message>
        {loading && <Loader />}
        {messages &&
          messages.map(({ uid, photoURL, displayName, text }, index) => (
            <MessageItem position={user?.uid === uid} key={index.toString()}>
              <Avatar src={photoURL} />
              <div>{displayName}</div>
              <div>{text}</div>
            </MessageItem>
          ))}
      </Message>
      <Wraper>
        <TextMessage
          id="outlined-basic"
          label="Text"
          variant="outlined"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyPress={handlerKey}
        />
        <StyledButton onClick={sendMessage}>Send</StyledButton>
      </Wraper>
    </Container>
  );
};

export default Chat;
