import { useMemo } from "react";

export const ELLIPSIS = "ellipsis";

export const usePagination = (currentPage: number, totalPages: number) => {
  return useMemo(() => {
    const range: (number | typeof ELLIPSIS)[] = [];
    const pagesAroundCurrent = 1;

    // always show first, last, curr and around
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - pagesAroundCurrent &&
          i <= currentPage + pagesAroundCurrent)
      ) {
        range.push(i);
      } else if (
        i === currentPage - pagesAroundCurrent - 1 ||
        i === currentPage + pagesAroundCurrent + 1
      ) {
        range.push(ELLIPSIS);
      }
    }

    return range.filter((item, index) => range.indexOf(item) === index);
  }, [currentPage, totalPages]);
};
