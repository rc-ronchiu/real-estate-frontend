import styled from 'styled-components';
import { colors } from '../../utils/styles';

export const StyledCoverContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const StyledCover = styled.img`
    object-fit: scale-down;
    max-height: 400px;
    border-radius: 4px;
    margin-bottom: 30px;
    margin-top: 30px;
`;