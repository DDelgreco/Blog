import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";
import SingleBlog from "./SingleBlog";




class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/:id" component={SingleBlog} />
            {/* <Route exact path="/:id" component={SingleBlog} /> */}
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;