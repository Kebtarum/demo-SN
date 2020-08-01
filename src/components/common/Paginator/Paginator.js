import React, { useState } from 'react';
import s from './Paginator.module.css';



function Paginator({ totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10 }) {


    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [protionNumber, setPortionNumer] = useState(1);
    let leftPortionPageNumber = (protionNumber - 1) * portionSize + 1;
    let rightPortionNumber = protionNumber * portionSize;

    return (

        <div className={s.paginator}>
            {protionNumber > 1 &&
                <button onClick={() => { setPortionNumer(protionNumber - 1) }}>PREV</button>
            }

            {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionNumber)
                .map((p) => {
                    return (
                        <button onClick={(e) => { onPageChanged(p) }}
                            className={currentPage === p && s.selectedPage}
                            key={p} >{p}</button>
                    )
                })}
            

            {portionCount > protionNumber &&
                <button onClick={() => { setPortionNumer(protionNumber + 1) }}>NEXT</button>
            }

        </div>
    )
}


export default Paginator;
