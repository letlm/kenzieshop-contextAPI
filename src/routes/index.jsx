import { Route, Switch } from "react-router-dom";
import Bag from "../pages/Bag";
import Home from "../pages/Home";
import Shop from "../pages/Shop";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/shop">
        <Shop />
      </Route>
      <Route exact path="/bag">
        <Bag />
      </Route>
    </Switch>
  );
}

export default Routes;
