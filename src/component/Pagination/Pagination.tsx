import React from "react";
import "./Pagination.css";

interface PaginationProps {
  total: number;
  setCurrentPage: React.Dispatch<
    React.SetStateAction<{ id: number; size: number }>
  >;
}

const Pagination: React.FunctionComponent<PaginationProps> = ({
  total,
  setCurrentPage,
}) => {
  let pages: number[] = [];

  for (let i = 1; i <= total; i++) {
    pages.push(i);
  }

  const handlePageClick = (id: number, size: number) => {
    setCurrentPage({ id, size });
  };

  return (
    <div className="pagination">
      {pages.map((page, index) => {
        return (
          <button onClick={() => handlePageClick(page, 5)} key={index}>
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
