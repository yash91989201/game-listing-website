import { useState } from "react";
import { GameProps } from "../types";

function usePagination(data: GameProps[], itemsPerPage: number) {
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = Math.ceil(data.length / itemsPerPage);
  function currentData() {
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return data.slice(begin, end);
  }

  function nextPage() {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
  }

  function prevPage() {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
  }

  function setPage(page: number) {
    const pageNumber = Math.max(1, page);
    setCurrentPage((currentPage) => Math.min(pageNumber, maxPage));
  }

  return { nextPage, prevPage, setPage, currentData, currentPage, maxPage };
}

export default usePagination;
