import styled from 'styled-components';
import { AiOutlineSmile, AiOutlineMeh, AiOutlineFrown } from 'react-icons/ai';
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
    padding: 10px 15px;
    text-transform: uppercase;
    margin: 10px 0px;
    opacity: 0.5;
    border: 0;
    border-radius: 0.313rem;
    &:hover {
        opacity: 1;
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
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    &:hover * {
        color: ${(props) => (props.children[1].props.children === 'Great' ? colors.green : props.children[1].props.children === 'Meh' ? colors.yellow : colors.red)}
    }
`;

export const StyledModalRatingSmile = styled(AiOutlineSmile)`
    width: 100px;
    height: 100px;
    padding: 0;
    color: ${colors.grey};
    /* &:hover {
        color: ${colors.green};
    } */
`;

export const StyledModalRatingMeh = styled(AiOutlineMeh)`
    width: 100px;
    height: 100px;
    padding: 0;
    color: ${colors.grey};
    /* &:hover {
        color: ${colors.yellow};
    } */
`;

export const StyledModalRatingFrown = styled(AiOutlineFrown)`
    width: 100px;
    height: 100px;
    padding: 0;
    color: ${colors.grey};
    /* &:hover {
        color: ${colors.red};
    } */
`;