import React from "react";

import {
  PaginationContainer,
  PaginationButton,
  PaginationFirstPageButton,
  PaginationLastPageButton,
  enabled,
  disabled,
  PaginationLabel,
} from "./Style";

const Pagination = ({ page, setPage, total, limit }) => {
  const goToFirstPage = () => setPage(1);

  const goToLastPage = () => setPage(getLastPage());

  const incrementPage = () => page < getLastPage() && setPage(page + 1);

  const decrementPage = () => page > 1 && setPage(page - 1);

  const atFirstPage = () => page === 1;

  const atLastPage = () => page === getLastPage();

  const getLastPage = () => Math.ceil(total / limit);

  return (
    <PaginationContainer>
      <PaginationFirstPageButton
        onClick={() => goToFirstPage()}
        disabled={atFirstPage()}
      >
        <p>First Page</p>
      </PaginationFirstPageButton>
      <PaginationButton
        onClick={() => decrementPage()}
        disabled={atFirstPage()}
      >
        <p>Previous</p>
      </PaginationButton>
      <PaginationLabel>{page}</PaginationLabel>
      <PaginationButton onClick={incrementPage} disabled={atLastPage()}>
        <p>Next</p>
      </PaginationButton>
      <PaginationLastPageButton onClick={goToLastPage} disabled={atLastPage()}>
        <p>Last Page</p>
      </PaginationLastPageButton>
    </PaginationContainer>
  );
};

export default Pagination;
