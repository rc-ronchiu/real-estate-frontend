import { useMemo } from "react";

const range = (start, end) => {
    const length = end - start + 1;
    return Array.from({length}, (_, i) => i + start);
};

const usePagination = ({
    itemCount,
    pageSize,
    siblingCount,
    currentPage
}) => {
    const paginationRange = useMemo(() => {
        const totalPageCount = Math.ceil(itemCount / pageSize);
        const displayedPageCount = siblingCount + 5;

        if (totalPageCount <= displayedPageCount) {
            return [range(1, totalPageCount), totalPageCount];
        }

        const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
        const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount);
        const showLeftDots = leftSiblingIndex > 2;
        const showRightDots = rightSiblingIndex < totalPageCount - 2;

        if (!showLeftDots && showRightDots) {
            const leftSiblingCount = 3 + 2 * siblingCount;
            const leftRange = range(1, leftSiblingCount);
            return [[...leftRange, '...', totalPageCount], totalPageCount];
        } else if (showLeftDots && !showRightDots) {
            const rightSiblingCount = 3 + 2 * siblingCount;
            const rightRange = range(totalPageCount - rightSiblingCount + 1, totalPageCount);
            return [[1, '...', ...rightRange], totalPageCount];
        } else {
            const middleRange = range(leftSiblingIndex, rightSiblingIndex);
            return [[1, '...', ...middleRange, '...', totalPageCount], totalPageCount];
        }
    }, [itemCount, pageSize, siblingCount, currentPage]);
    return paginationRange;
};

export default usePagination;