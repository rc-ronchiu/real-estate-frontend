import styled from 'styled-components';
import { colors } from '../../utils/styles';

export const StyledCover = styled.img`
    object-fit: cover;
    width: 100%;
    height: 40rem;
    border-radius: 4px;
    margin-bottom: 30px;
    margin-top: 30px;
`;

export const StyledPropertyDetail = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border-radius: 4px;
    margin-bottom: 30px;
    border: solid 1px ${colors.border};
    h1 {
        width: 100%;
        text-align: center;
        margin-bottom: 5px;
    };
    h4 {
        font-size: 1.2rem;
        margin-bottom: 5px;
        color: ${colors.black}
    };
`;

export const StyledDetailRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-bottom: 20;
    margin-bottom: 20;
    border-bottom: solid 1px ${colors.border};
`;

export const StyledDetailItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    align-self: flex-start;
    color: ${colors.grey};
`;

export const StyledDescription = styled.p`
    font-size: 1.2rem;
    color: ${colors.grey};
`;

export const StyledVoteButton = styled.div`
    cursor: pointer;
`;