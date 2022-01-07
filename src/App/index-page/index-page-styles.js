import styled from 'styled-components';
import { colors } from '../../utils/styles';

export const StyledToolbar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    align-items: center;
    margin-top: 5px;
`;

export const StyledSortingSelector = styled.select`
    border-radius: 4px;
    background-color: ${colors.shadowBlue};
    border: 0;
    height: 2rem;
`;