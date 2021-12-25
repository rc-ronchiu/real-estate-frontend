import styled from 'styled-components';
import { AiOutlineClose, AiOutlineSmile, AiOutlineMeh, AiOutlineFrown } from 'react-icons/ai';
import { colors } from '../../utils/styles';

export const StyledModalBackground = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StyledModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    height: 300px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: #fff;
    color: #000;
    position: relative;
    z-index: 10;
    border-radius: 10px;
`;

export const StyledCloseModalButton = styled.button`
    background-color: #e91e63;
    color: white;
    padding: 10px 15px;
    border-radius: 5px;
    outline: 0;
    text-transform: uppercase;
    margin: 10px 0px;
    box-shadow: 0px 2px 2px lightgray;
    transition: ease background-color 250ms;
    &:hover {
        background-color: #ad1457;
    }
    &:disabled {
        cursor: default;
        opacity: 0.7;
    }
    cursor: pointer;
    position: absolute;
    bottom: 10px;
    z-index: 10;
`;

export const StyledModalTitle = styled.h2`
`;

export const StyledModalSubtitle = styled.p`
    color: ${colors.grey};
    margin-top: 0;
`;

export const StyledModalRatingContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const StyledModalRatingIconContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const StyledModalRatingSmile = styled(AiOutlineSmile)`
    width: 100px;
    height: 100px;
    padding: 0;
    color: ${colors.grey};
    &:hover {
        color: ${colors.green};
    }
`;

export const StyledModalRatingMeh = styled(AiOutlineMeh)`
    width: 100px;
    height: 100px;
    padding: 0;
    color: ${colors.grey};
    &:hover {
        color: ${colors.yellow};
    }
`;

export const StyledModalRatingFrown = styled(AiOutlineFrown)`
    width: 100px;
    height: 100px;
    padding: 0;
    color: ${colors.grey};
    &:hover {
        color: ${colors.red};
    }
`;