import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { privatRoutes, publicRoutes } from "../../routes";
import { ConstTypes } from "../../utils/consts";

const AppRouter = () => {
  type User = boolean;
  const user: User = true;

  return user ? (
    <Switch>
      {privatRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact />
      ))}
      <Redirect to={ConstTypes.CHAT_ROUTE} />
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact />
      ))}
      <Redirect to={ConstTypes.LOGIN_ROUTE} />
    </Switch>
  );
};

export default AppRouter;
