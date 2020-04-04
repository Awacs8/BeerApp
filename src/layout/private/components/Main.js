import React, {useEffect, useState} from 'react';
import { getBeer } from '../../../services/api_service';
import BeerList from './BeerList';
import Pagination from '../../../utils/Pagination';
import {LogOut} from './LogOut';
import {Link} from 'react-router-dom';


const Main=({setWishlist})=> {
    const [beers,setBeers]=useState([]);
    const [currentPage,setCurrentPage]=useState(1);
    const [itemsPerPage]=useState(6);

  useEffect(()=>{
    getBeer().then(data=>
        setBeers(data))    
  },[])

const indexOfLastItem=currentPage*itemsPerPage;
const indexOfFirtstItem=indexOfLastItem-itemsPerPage;
const currentList=beers.slice(indexOfFirtstItem,indexOfLastItem);
const paginate=(pageNumber)=>{
    setCurrentPage(pageNumber);
  }

  return (
    <>
    <div>
    <ul className="nav-bar">
      <li>
        <LogOut />
      </li>
      <li className="nav-item">
        <Link  to="main">Home</Link>
      </li>
      <li className="nav-item">
        <Link to="/wishlist">Wishlist</Link>
      </li>
      <li className="nav-item">
        <Link to="/search">Search</Link>
      </li>
      <li className="nav-item">
        <Link to="/profile">Profile</Link>
      </li>
    </ul>
    </div>
      <BeerList beers={currentList} setWishlist={setWishlist}/>
      <Pagination 
        paginate={paginate} 
        totalItems={beers.length} 
        itemsPerPage={itemsPerPage} 
      /> 
    </>
  );  
};

export default Main;
