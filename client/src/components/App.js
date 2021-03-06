import React from "react";
import { Router, Route, Redirect, Switch } from "react-router-dom";
import StreamsList from "./streams/StreamsList";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";

import history from "../history.js";

const App = (props) => {
  return (
    <Router history={history}>
      <Header />
      <Switch>
        <Route path="/" exact component={StreamsList} />
        <Route path="/streams/new" exact component={StreamCreate} />
        <Route path="/streams/edit/:id" exact component={StreamEdit} />
        <Route path="/streams/delete/:id" exact component={StreamDelete} />
        <Route path="/streams/:id" exact component={StreamShow} />

        <Redirect to="/" />
      </Switch>
    </Router>
  );
};
export default App;
