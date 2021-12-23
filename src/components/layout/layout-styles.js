import styled from 'styled-components';
import { colors } from '../../utils/styles';

export const StyledPageContainer = styled.div`
    display: flex;
    justify-content: ${(props) => props.grid ? 'flex-start' : 'top'};
    flex-direction: ${(props) => props.grid ? 'row' : 'column'};
    flex-wrap: wrap;
    align-self: center;
    flex-grow: 1;
    padding: 0 20%;
    padding-bottom: 40;
`;