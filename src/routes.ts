import { ConstTypes } from "./utils/consts";
import Login from "./components/Login";
import Chat from "./components/Chat";

export const publicRoutes = [
  {
    path: ConstTypes.LOGIN_ROUTE,
    Component: Login,
  },
];

export const privatRoutes = [
  {
    path: ConstTypes.CHAT_ROUTE,
    Component: Chat,
  },
];
