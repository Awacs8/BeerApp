import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import "./App.css";
import Header from "./layout/containers/Header";
import Main from "./layout/containers/Main";
import Search from "./layout/containers/Search";
import Wishlist from "./layout/containers/Wishlist";
import { NavBar } from "./layout/components/NavBar";

function App() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    console.log(wishlist);
  }, [wishlist]);

  const handleClick = (beer) => {
    const tmp = [...wishlist, beer];
    setWishlist(tmp);
  };
  return (
    <>
      <Router>
        <Header />
        <NavBar />
        <Switch>
          <Route path="/main">
            <Main handleClick={handleClick} />
          </Route>
          <Route path="/search">
            <Search handleClick={handleClick} />
          </Route>
          <Route path="/wishlist">
            <Wishlist wishlist={wishlist} />
          </Route>
          <Redirect from="/" to="/main" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
