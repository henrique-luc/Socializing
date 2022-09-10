import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Posts from "../pages/Posts";

import { Switch, Route } from "react-router-dom";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={"/"}>
        <Home />
      </Route>
      <Route exact path={"/signup"}>
        <Signup />
      </Route>
      <Route exact path={"/posts"}>
        <Posts />
      </Route>
    </Switch>
  );
};

export default Routes;
