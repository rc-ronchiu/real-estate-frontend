import styled from 'styled-components';
import { colors } from '../../utils/styles';

export const StyledHeaderBar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 5px 30px;
    min-height: 8rem;
    background-color: ${colors.header};
`;