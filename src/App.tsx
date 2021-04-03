import React, { FC } from "react";
import { BrowserRouter } from "react-router-dom";

import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "firebase";
import Navbar from "./components/Navbar";

import AppRouter from "./components/AppRouter";
import Loader from "./components/Loader";

const App: FC = () => {
  const [, , loading] = useAuthState(firebase.auth());

  return (
    <BrowserRouter>
      {loading && <Loader />}
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
