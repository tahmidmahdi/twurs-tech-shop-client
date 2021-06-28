import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Home from './component/Home/Home/Home'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path=''>
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
