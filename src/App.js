import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// components
import { Map } from './containers/Map.tsx';

function App() {
  return (
    <Router>
      <Switch>
        // root
        <Route
          exact
          path="/">
          <Map />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;