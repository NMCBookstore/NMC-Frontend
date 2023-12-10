import React,{memo} from "react";
import "./Pagination.css";

interface PaginationProps {
  total: number;
  setCurrentPage: React.Dispatch<
    React.SetStateAction<{ id: number; size: number }>
  >;
  page: number
}

const Pagination: React.FunctionComponent<PaginationProps> = memo(
  ({ total, setCurrentPage, page }) => {
  let pages: number[] = [];

  for (let i = 1; i <= total; i++) {
    pages.push(i);
  }

  const handlePageClick = (id: number, size: number) => {
    setCurrentPage({ id, size });
  };

  return (
    <div className="pagination">
      {pages.map((item, index) => {
        return (
          <button className={page==item ? "active" : ""} onClick={() => handlePageClick(item, 5)} key={index}>
            {item}
          </button>
        );
      })}
    </div>
  );
});

export default Pagination;
