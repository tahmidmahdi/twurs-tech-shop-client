import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Home from './component/Home/Home/Home'
import Login from './component/Login/Login'
import NavBar from './component/SharedComponents/NavBar/NavBar';
// import DashBoard from './component/SharedComponents/AdminNavBoard/AdminNavBoard';
import AdminNavBoard from './component/SharedComponents/AdminNavBoard/AdminNavBoard'
import AddProducts from './component/Admin/AddProducts/AddProducts';

export const emailContext = createContext()

function App() {

  const [email, setEmail] = useState(null)
  return (
    <emailContext.Provider value={[email, setEmail]}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/login'>
            <NavBar></NavBar>
            <Login></Login>
          </Route>
          <Route path='/admin'>
            <AdminNavBoard></AdminNavBoard>
          </Route>
          <Route path='/addProduct'>
            <AdminNavBoard></AdminNavBoard>
            <AddProducts></AddProducts>
          </Route>
        </Switch>
      </Router>
    </emailContext.Provider>
  );
}

export default App;
