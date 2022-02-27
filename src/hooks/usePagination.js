import { useState, useEffect } from "react";

const usePagination = (data, catePage, ITEMS_PER_PAGE ) => {
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = Math.ceil(data.length / ITEMS_PER_PAGE);
  // console.log(`currentPage: ${currentPage}, maxPage: ${maxPage}`)

  function currentData() {
    const begin = (currentPage - 1) * ITEMS_PER_PAGE;
    const end = begin + ITEMS_PER_PAGE;
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

  useEffect(() => {
    setCurrentPage( catePage );

    return () => {
      // console.log(`usePagination cleanup`);
    }
  }, [catePage]);

  return { prevPage, nextPage, jumpPage, currentData, currentPage, maxPage };
}

export default usePagination;