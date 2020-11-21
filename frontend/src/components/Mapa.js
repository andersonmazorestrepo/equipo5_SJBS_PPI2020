import React from 'react';
import '../styles/Mapa.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MapView from '../components/MapView';
import Home from '../components/Home';

function Mapa() {
  return (

    <Router>
      <Switch>
        <Route path="/map">
          <MapView />;
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
export default Mapa;
