import React, { memo, useState } from "react";
import "../ReviewPagination/Pagination.css";

interface PaginationProps {
  total: number;
  setCurrentPage: React.Dispatch<
    React.SetStateAction<{ id: number; size: number }>
  >;
  page: number;
  target: string;
}

const ProductPagination: React.FunctionComponent<PaginationProps> = memo(
  ({ total, setCurrentPage, page, target }) => {
    const [current, setCurrent] = useState(page);
    const handleScrollToBlockContent = () => {
      const blockContentElement = document.getElementById(target);
      if (blockContentElement) {
        blockContentElement.scrollIntoView({ behavior: "smooth" });
      }
    }

    const handlePageClick = (pageNumber: number) => {
      setCurrent(pageNumber);
      setCurrentPage({ id: pageNumber, size: 24 });
      handleScrollToBlockContent()
    };

    const renderPagination = () => {
      const paginationRange = 2; // Number of pagination buttons

      const pages = [];
      let startPage = Math.max(1, current - paginationRange);
      let endPage = Math.min(total, current + paginationRange);

      if (current - paginationRange > 1) {
        pages.push(1); // Always show the first page
        if (current - paginationRange > 2) {
          pages.push("..."); // Show an ellipsis if there are skipped pages before the first visible page
        }
      }

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      if (current + paginationRange < total) {
        if (current + paginationRange < total - 1) {
          pages.push("..."); // Show an ellipsis if there are skipped pages after the last visible page
        }
        pages.push(total); // Always show the last page
      }

      return (
        <div className="pagination">
          {current > 1 && (
            <button onClick={() => handlePageClick(current - 1)}>
              Previous
            </button>
          )}
          {pages.map((item, index) => {
            return (
              <button
                disabled={typeof item !== "number"}
                className={current === item ? "active" : ""}
                onClick={() => handlePageClick(Number(item))}
                key={index}
              >
                {item}
              </button>
            );
          })}
          {current < total && (
            <button onClick={() => handlePageClick(current + 1)}>Next</button>
          )}
        </div>
      );
    };

    return <div className="pagination">{renderPagination()}</div>;
  }
);

export default ProductPagination;
