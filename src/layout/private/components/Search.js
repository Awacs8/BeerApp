import React, { useState, useEffect } from "react";
import Beer from "./Beer";
import { getBeer } from "../../../services/api_service";
import Pagination from "../../../utils/Pagination";

const Search = ({ setWishlist }) => {
  const [findBeer, setFindBeer] = useState([]);
  const [pomocni, setPomocni] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3);

  useEffect(() => {
    getBeer().then((data) => {
      setPomocni(data);
    });
  }, []);

  const search = (e) => {
    if (e.target.value === "") {
      setFindBeer([]);
      return;
    }
    let tmp = pomocni.filter((beer) =>
      beer.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFindBeer(tmp);
    return;
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirtstItem = indexOfLastItem - itemsPerPage;
  const currentList = findBeer.slice(indexOfFirtstItem, indexOfLastItem);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="search">
      <h3 className="h3">Find a beer</h3>
      <input className="input" type="text" onChange={search} />
      <h3 className="h3">Search results</h3>
      <div className="list-item">
        {currentList.map((beer) => (
          <Beer beer={beer} setWishlist={setWishlist} key={beer.id} />
        ))}
      </div>
      <Pagination
        paginate={paginate}
        totalItems={findBeer.length}
        itemsPerPage={itemsPerPage}
      />
    </div>
  );
};
export default Search;
