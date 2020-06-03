import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";

import Home from './components/Home';
import Favorites from './components/Favorites';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/favorites" component={Favorites} />
    </Switch>
  );
}

export default Routes;