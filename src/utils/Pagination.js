import React from 'react';
import './style.css'

const Pagination=({paginate,totalItems,itemsPerPage})=>{
    const pageNumbers=[];
    for(let i=1;i<=Math.ceil(totalItems/itemsPerPage);i++){
        pageNumbers.push(i);
    }
    return(
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number=>
                    <li key={number} className="pagination"><a href="#" onClick={()=>paginate(number)}>
                        {number}
                        </a>
                    </li>
                )}
            </ul>
        </nav>
    )

}
export default Pagination;
