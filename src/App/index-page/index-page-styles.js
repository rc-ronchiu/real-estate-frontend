import styled from 'styled-components';
import { colors } from '../../utils/styles';

export const StyledSortingButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    align-items: center;
    margin: 1.5rem 0 1rem;
`;

export const StyledSortingButton = styled.button`
    border: 1px solid ${colors.shadowBlue};
    height: 2rem;
    width: 8rem;
    font-size: 0.875;
    margin-left: -1px;
    background-color: ${(props) => props.sortType === props.name ? colors.shadowBlue : 'transparent'};
    border-top-left-radius: ${(props) => props.type === 'left' ? '0.313rem' : 'none'};
    border-bottom-left-radius: ${(props) => props.type === 'left' ? '0.313rem' : 'none'};
    border-top-right-radius: ${(props) => props.type === 'right' ? '0.313rem' : 'none'};
    border-bottom-right-radius: ${(props) => props.type === 'right' ? '0.313rem' : 'none'};
`;

export const StyledSortingSelector = styled.select`
    border-radius: 4px;
    background-color: ${colors.shadowBlue};
    border: 0;
    height: 2rem;
`;

export const StyledPagination = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    align-items: center;
    margin-top: 1rem;
`;