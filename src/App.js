import React from "react";
import { Switch, Route } from "react-router-dom";
import Navs from "./components/Navs.jsx";
import Home from "./pages/Home.jsx";
import Starred from "./pages/Starred.jsx";

function App() {
  return (
    <div>
      <Navs />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/starred">
          <Starred />
        </Route>
        <Route>
          <div>Page not found</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
