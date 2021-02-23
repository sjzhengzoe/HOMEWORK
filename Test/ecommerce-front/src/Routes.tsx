import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "./components/core/Home";
import Shop from "./components/core/Shop";

export default function Routes() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/shop" component={Shop} />
      </Switch>
    </HashRouter>
  );
}
