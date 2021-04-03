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
import { UserMessage } from "../../types/types";

const Chat: FC = () => {
  const [value, setValue] = useState("");
  const [user] = useAuthState(firebase.auth());
  const { firestore } = firebase;
  const [messages, loading] = useCollectionData(
    firestore().collection("messages").orderBy("time")
  );

  const userMessage: UserMessage = {
    uid: user?.uid,
    displayName: user?.displayName,
    photoURL: user?.photoURL,
    text: value,
    time: firebase.firestore.FieldValue.serverTimestamp(),
  };

  const sendMessage = () => {
    if (value.length > 0) {
      firebase
        .firestore()
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

  return (
    <Container>
      <Message>
        {loading && <Loader />}
        {messages &&
          messages.map((message, index) => (
            <MessageItem
              position={user?.uid === message.uid}
              key={index.toString()}
            >
              <Avatar src={message.photoURL} />
              <div>{message.displayName}</div>
              <div>{message.text}</div>
            </MessageItem>
          ))}
      </Message>
      <Wraper>
        <TextMessage
          id="outlined-search"
          label="Text"
          type="search"
          variant="outlined"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <StyledButton onClick={sendMessage}>Отправить</StyledButton>
      </Wraper>
    </Container>
  );
};

export default Chat;
