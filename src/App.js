import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Show from "./pages/Show.jsx";
import Starred from "./pages/Starred.jsx";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/starred">
          <Starred />
        </Route>
        <Route exact path="/show/:id">
          <Show />
        </Route>
        <Route>
          <div>Page not found</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
