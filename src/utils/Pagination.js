import React from 'react';
import './style.css'

const Pagination=({paginate,totalItems,itemsPerPage})=>{
    const pageNumbers=[];
    for(let i=1;i<=Math.ceil(totalItems/itemsPerPage);i++){
        pageNumbers.push(i);
    }
    return(
        <nav>
            <div className="pagination">
                {pageNumbers.map(number=>
                    <button key={number} className="pagination" onClick={()=>paginate(number)}>
                        {number}
                    </button>
                )}
            </div>
        </nav>
    )

}
export default Pagination;
