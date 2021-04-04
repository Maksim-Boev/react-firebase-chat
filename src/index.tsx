import React from "react";
import ReactDOM from "react-dom";

import firebase from "firebase";

import "./index.css";

import App from "./App";

firebase.initializeApp({
  apiKey: process.env.REACT_APP_KEY,
  authDomain: "feribase-1.firebaseapp.com",
  projectId: "feribase-1",
  storageBucket: "feribase-1.appspot.com",
  messagingSenderId: "648498671825",
  appId: "1:648498671825:web:b8e15424eeebee6a3b95f0",
});

ReactDOM.render(<App />, document.getElementById("root"));
