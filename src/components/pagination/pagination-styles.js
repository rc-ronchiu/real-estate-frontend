import styled from 'styled-components';
import { colors } from '../../utils/styles'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

export const StyledPaginationContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 3rem;
    width: 100%;
    gap: 0.5rem;
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
    height: 3rem;
    width: 3rem;
    border-radius: 0.3rem;
    border: 1px solid gray;
    font-size: 1.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${colors.black};
    cursor: pointer;
    ${(props) => props.selected &&
    `
        cursor: default; 
        background-color: ${colors.grey};
    `};
`;