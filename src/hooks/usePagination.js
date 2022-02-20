import { useState } from "react";

const usePagination = (data, itemsPerPage) => {
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = Math.ceil(data.length / itemsPerPage);

  function currentData() {
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return data.slice(begin, end);
  }

  function prevPage() {
    setCurrentPage(currentPage => Math.max(currentPage - 1, 1));
  }

  function nextPage() {
    setCurrentPage(currentPage => Math.min(currentPage + 1, maxPage));
  }

  function jumpPage(page) {
    const pageNumber = Math.max(1, page);
    setCurrentPage( Math.min(pageNumber, maxPage) );
  }

  return { prevPage, nextPage, jumpPage, currentData, currentPage, maxPage };
}

export default usePagination;