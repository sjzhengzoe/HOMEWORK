import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "./components/core/Home";
import Shop from "./components/core/Shop";
import SignIn from "./components/core/SignIn";
import SignUp from "./components/core/SignUp";

export default function Routes() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/shop" component={Shop} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </HashRouter>
  );
}
