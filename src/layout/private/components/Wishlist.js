import React from 'react';
import {Link} from 'react-router-dom';
import '../../../utils/style.css';
import Beer2 from './Beer2';

const Wishlist=({wishlist})=>{
    let filtered = [...new Set(wishlist)];
    
    return(
        <>
        <Link to="main" className="nav-item">Back to main</Link>
        <h1 className="h3">Wishlist</h1>
        <div className="list-item">
            {filtered.map(beer=>(
            <Beer2 beer={beer} key={beer.id} /> 
            ))}
        </div>
        </>   
    );
};   
      
export default Wishlist;