import React from "react";
import "./Pagination.css";



const Pagination = ({ postPerData, totalData, paginate }) => {
  const pageNumber = [];   //new array 

  for (let i = 1; i <= Math.ceil(totalData / postPerData); i++) {
    pageNumber.push(i);
  }

  return (
    <nav>
      <ul className="Pagination">
        {pageNumber.map((number) => {
          return (
            <li key={number} className="page-number">
              <a
                href="!#"
                className="page-link"
                onClick={() => paginate(number)}
              >
                {number}
              </a>
             
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default Pagination;
