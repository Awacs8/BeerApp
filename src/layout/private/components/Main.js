import React, { useEffect, useState } from "react";
import { getBeer } from "../../../services/api_service";
import BeerList from "./BeerList";
import Pagination from "../../../utils/Pagination";

const Main = ({ setWishlist }) => {
  const [beers, setBeers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);

  useEffect(() => {
    getBeer().then((data) => setBeers(data));
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirtstItem = indexOfLastItem - itemsPerPage;
  const currentList = beers.slice(indexOfFirtstItem, indexOfLastItem);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="main">
      <BeerList beers={currentList} setWishlist={setWishlist} />
      <Pagination
        paginate={paginate}
        totalItems={beers.length}
        itemsPerPage={itemsPerPage}
      />
    </div>
  );
};

export default Main;
