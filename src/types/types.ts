import firebase from "firebase";

export type UserMessageType = {
  uid: string | undefined;
  photoURL: string | null | undefined;
  displayName: string | null | undefined;
  text: string;
  time: firebase.firestore.FieldValue;
};
