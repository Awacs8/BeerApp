import React from "react";
// import {Register} from './Register';
// import {LogIn} from './LogIn';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="text">
        <p>
          <b>App for craft beer lovers.</b>
        </p>
        <p>
          <b>
            Get informations about beers, create your wishlist, check-in tasted
            beers and more.
          </b>
        </p>
        <p>
          <b>
            Log in or register your account and enjoy in your favorite taste...
          </b>
        </p>
      </div>
      <div className="btn-group">
        <button>
          <Link to="/register">SignUp</Link>
        </button>
        <button>
          <Link to="/login">SignIn</Link>
        </button>
      </div>
    </div>
  );
};
export default Home;
