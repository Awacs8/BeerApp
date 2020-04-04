import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Header from './layout/public/components/Header';
import Home from './layout/public/components/Home';
import {Register} from './layout/public/components/Register';
import {LogIn} from './layout/public/components/LogIn'
import {LogOut} from './layout/private/components/LogOut'
import Main from './layout/private/components/Main';
import PublicRoute from './layout/public/PublicRoute';
import PrivateRoute from './layout/private/PrivateRoute';
import Search from './layout/private/components/Search';
import Profile from './layout/private/components/Profile';
import Wishlist from './layout/private/components/Wishlist';

function App() {
  const [wishlist2, setWishlist] = useState([]);
  useEffect(() => {
    console.log(wishlist2);
  }, [wishlist2])
  
  return (
    <>
    <Router>
      <Header/>
      <Switch>
      
        <PublicRoute component={Register} path="/register"/>
        <PublicRoute component={LogIn} path="/login"/>
        <PrivateRoute component = {Main} setWishlist={setWishlist} path="/main"/>
        <PrivateRoute component = {Search} path="/search"/>
        <PrivateRoute component={Wishlist} wishlist2={wishlist2} path="/wishlist"/>
        <PrivateRoute component={Profile} path="/profile"/>
        <PrivateRoute component={LogOut} path="/logout"/>
        <PublicRoute component = {Home} path="/" />
        <Redirect from="/" to="/main" />
       
      </Switch>
    </Router>
    </>
    
  )
}

export default App;