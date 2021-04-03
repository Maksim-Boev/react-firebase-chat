import firebase from "firebase";

export type UserMessage = {
  uid: string | undefined;
  photoURL: string | null | undefined;
  displayName: string | null | undefined;
  text: string;
  time: firebase.firestore.FieldValue;
};
