import React, { useState, useEffect } from "react";
import Beer from "../components/Beer";
import { getBeer } from "../../services/api_service";
import Pagination from "../../utils/Pagination";

const Search = ({ handleClick }) => {
  const [findBeer, setFindBeer] = useState([]);
  const [tmp, setTmp] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3);

  useEffect(() => {
    getBeer().then((data) => {
      setTmp(data);
    });
  }, []);

  const search = (e) => {
    if (e.target.value === "") {
      setFindBeer([]);
      return;
    }
    let find = tmp.filter((beer) =>
      beer.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFindBeer(find);
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
          <Beer beer={beer} key={beer.id} handleClick={handleClick} />
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
