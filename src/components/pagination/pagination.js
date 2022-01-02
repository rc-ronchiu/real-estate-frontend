import React from 'react';
import usePagination from '../../utils/hooks';
import {
    StyledPaginationContainer,
    StyledPaginationLeft,
    StyledPaginationRight,
    StyledPaginationDot,
    StyledPaginationPageNumber
} from './pagination-styles';

const Pagination = ({
    onPageChange,
    itemCount,
    siblingCount,
    currentPage,
    pageSize
}) => {
    const [paginationRange, lastPage] = usePagination({
        currentPage,
        itemCount,
        siblingCount: 1,
        pageSize
    });

    if (paginationRange?.length < 2) {
        return null;
    }

    const onNextPage = () => {
        onPageChange(currentPage + 1);
    };

    const onPreviousPage = () => {
        onPageChange(currentPage - 1);
    };

    return (
        <StyledPaginationContainer>
            <StyledPaginationLeft onClick={onPreviousPage} disabled={currentPage === 1} />
            {paginationRange?.map(pageNumber => {
                if (pageNumber === '...') {
                    return (<StyledPaginationDot>&#8230;</StyledPaginationDot>);
                }
                return (
                    <StyledPaginationPageNumber
                        onClick={() => onPageChange(pageNumber)}
                        selected={pageNumber === currentPage}>{
                            pageNumber
                        }</StyledPaginationPageNumber>)
            })}
            <StyledPaginationRight onClick={onNextPage} disabled={currentPage === lastPage} />
        </StyledPaginationContainer>
    );
};

export default Pagination;