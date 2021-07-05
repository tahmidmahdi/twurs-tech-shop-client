import './App.css';
import React, { createContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";


import Home from './component/Home/Home/Home'
import Login from './component/Login/Login'
import NavBar from './component/SharedComponents/NavBar/NavBar';
// import DashBoard from './component/SharedComponents/AdminNavBoard/AdminNavBoard';
import AdminNavBoard from './component/SharedComponents/AdminNavBoard/AdminNavBoard'
import AddProducts from './component/Admin/AddProducts/AddProducts';
import Laptops from './component/Products/Laptops/Laptops';
import ProductDetails from './component/Products/ProductDetails/ProductDetails';
import Cart from './component/Products/Cart/Cart';
import PrivateRoute from './component/PrivateRoute/PrivateRoute'
import Mobile from './component/Products/Mobile/Mobile';
import Mouse from './component/Products/Mouse/Mouse';
import KeyBoard from './component/Products/KeyBoard/KeyBoard';
import Checkout from './component/Products/Checkout/Checkout';
import DashBoard from './component/Products/DashBoard/DashBoard';
import MakeAnAdmin from './component/Admin/MakeAnAdmin/MakeAnAdmin';
import axios from 'axios';
import DeleteAProduct from './component/Admin/DeleteAProduct/DeleteAProduct';
export const emailContext = createContext()
export const adminContext = createContext()

function App() {

  const [email, setEmail] = useState(null)
  const [loggedInUser, setLoggedInUser] = useState([])
  useEffect(() => {
    axios.get('http://localhost:4000/adminList')
      .then(function (response) {
        setLoggedInUser(response.data)
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, [email])
  console.log(loggedInUser)

  return (
   <adminContext.Provider value={[loggedInUser, setLoggedInUser]}>
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
            <Route path='/delete'>
              <AdminNavBoard></AdminNavBoard>
              <DeleteAProduct />
            </Route>
  
            <Route path='/laptop'>
              <Laptops></Laptops>
            </Route>
  
  
            <Route path='/phone'>
              <Mobile />
            </Route>
  
            <Route path='/mouse'>
              <Mouse />
            </Route>
  
  
            <Route path='/keyboard'>
              <KeyBoard />
            </Route>
  
            <Route path='/products/:e'>
              <NavBar></NavBar>
              <ProductDetails></ProductDetails>
            </Route>
  
            <PrivateRoute path='/cart'>
              <NavBar />
              <Cart />
            </PrivateRoute>
            <PrivateRoute path='/checkout'>
              <NavBar />
              <Checkout />
            </PrivateRoute>
  
            <PrivateRoute path='/dashboard'>
              <NavBar />
              <DashBoard />
            </PrivateRoute>
  
            <PrivateRoute path='/makeAdmin'>
              <AdminNavBoard />
              <MakeAnAdmin />
            </PrivateRoute>
  
          </Switch>
        </Router>
      </emailContext.Provider>
   </adminContext.Provider>
  );
}

export default App;
