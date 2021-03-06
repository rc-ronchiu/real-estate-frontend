import styled from 'styled-components';
import { colors } from '../../utils/styles'

export const StyledRatingValue = styled.div`
    height: 3rem;
    width: 3rem;
    border-radius: 0.3rem;
    background-color: ${
        (props) => (props.children > 0 ? props.children > 3 ? props.children > 4 ? colors.green : colors.yellow : colors.red : colors.grey)
    };
    font-size: 1.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${colors.black};
    font-weight: 1000;
`;