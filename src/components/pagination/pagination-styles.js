import styled from 'styled-components';
import { colors } from '../../utils/styles'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

export const StyledPaginationContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 3rem;
    width: 100%;
    gap: 0.8rem;
`;

export const StyledPaginationLeft = styled(AiOutlineLeft)`
    height: 1.4rem;
    width: 1.4rem;
    cursor: pointer;
    ${(props) => props.disabled &&
    `
        cursor: default; 
        pointer-events: none;
        color: ${colors.grey};
    `};
`;

export const StyledPaginationRight = styled(AiOutlineRight)`
    height: 1.4rem;
    width: 1.4rem;
    cursor: pointer;
    ${(props) => props.disabled &&
    `
        cursor: default; 
        pointer-events: none;
        color: ${colors.grey};
    `};
`;

export const StyledPaginationDot = styled.div`
    height: 3rem;
    width: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: default;
`;

export const StyledPaginationPageNumber = styled.div`
    height: 2.5rem;
    width: 2.5rem;
    font-size: 1.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${colors.black};
    cursor: pointer;
    font-size: 0.875rem;
    ${(props) => props.selected &&
    `
        cursor: default; 
        background-color: ${colors.title};
        border-radius: 0.313rem;
    `};
`;