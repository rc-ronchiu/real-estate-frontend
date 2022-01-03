import styled from 'styled-components';
import { colors } from '../../utils/styles';

export const StyledModalBackground = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9;
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
    cursor: pointer;
    position: absolute;
    bottom: 10px;
    z-index: 10;
`;

export const StyledModalTitle = styled.h2`
`;

export const StyledModalText = styled.p`
    color: ${colors.grey};
    font-size: 1rem;
    margin: 5px 0px;
`;

export const StyledInput = styled.input`
    font-family: inherit;
    width: 20rem;
    border: 1px solid grey;
    border-radius: 0.5rem;
    outline: 0;
    font-size: 1rem;
    color: grey;
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;
`;