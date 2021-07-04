import './App.css';
import React, { createContext, useState } from "react";
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

        </Switch>
      </Router>
    </emailContext.Provider>
  );
}

export default App;
