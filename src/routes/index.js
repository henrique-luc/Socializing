import Home from "../pages/Home";
import Signup from "../pages/Signup";

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
    </Switch>
  );
};

export default Routes;
