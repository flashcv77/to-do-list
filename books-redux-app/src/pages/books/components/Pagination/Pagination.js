import React from "react";
import {
  Pagination as ReactStrapPagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";

const Pagination = ({ handler, dataPerPage, totalDataCount, pageNumber }) => {
  const allPagesCount = [];
  for (let i = 1; i <= Math.ceil(totalDataCount / dataPerPage); i++) {
    allPagesCount.push(i);
  }
  return (
    <ReactStrapPagination>
      <PaginationItem>
        <PaginationLink
          first
          onClick={(event) => {
            event.preventDefault();
            handler(1);
          }}
        />
      </PaginationItem>

      <PaginationItem>
        <PaginationLink
          disabled={1 === pageNumber}
          previous
          onClick={(event) => {
            event.preventDefault();
            handler(pageNumber - 1);
          }}
        />
      </PaginationItem>

      {allPagesCount.map((number) => (
        <PaginationItem key={number}>
          <PaginationLink
            onClick={(event) => {
              event.preventDefault();
              handler(number);
            }}
          >
            {number}
          </PaginationLink>
        </PaginationItem>
      ))}

      <PaginationItem>
        <PaginationLink
          next
          disabled={allPagesCount.length === pageNumber}
          onClick={(event) => {
            event.preventDefault();
            handler(pageNumber + 1);
          }}
        />
      </PaginationItem>

      <PaginationItem>
        <PaginationLink
          last
          onClick={(event) => {
            event.preventDefault();
            handler(allPagesCount.length);
          }}
        />
      </PaginationItem>

    </ReactStrapPagination>
  );
};

export default Pagination;
