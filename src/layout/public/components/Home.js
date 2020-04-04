import React from 'react';
// import {Register} from './Register';
// import {LogIn} from './LogIn';
import {Link } from 'react-router-dom';
const Home=()=>{
    return(
        <div className="home">
        <div className="div">
        <div className="text">
            <p><b>App for craft beer lovers.</b></p>
            <p><b>Get information about beers, create your wishlist, check-in tasted beers and more...</b></p>
            <p><b>Log in or register your account and enjoy in your favore taste...</b></p>
        </div>
        <ul className="nav-bar">
            <li className="nav-item"><Link to="/register">SignUp</Link></li>
            <li className="nav-item"><Link to="/login">SignIn</Link></li> 
        </ul>
        </div> 
        </div>
    )
}
export default Home;