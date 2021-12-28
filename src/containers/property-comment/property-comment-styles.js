import styled from 'styled-components';
import { colors } from '../../utils/styles';

export const StyledCommentTitle = styled.h1`
`;

export const StyledCommentContainer = styled.div`
    display: flex;
    flex-direction: column;

    width: 50rem;
`;

export const StyledComment = styled.div`
    display: flex;
    flex: row;
    align-items: center;
    border-radius: 4px;
    border: 1px solid ${colors.border};
    padding: 5px 15px;
    margin-bottom: 5px;
    position: relative;
`;

export const StyledCommentContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const StyledCommentAuthor = styled.p`
    font-size: 1.2rem;
    font-weight: bold;
    margin: 5px 0px;
`;

export const StyledCommentText = styled.p`
    color: ${colors.grey};
    font-size: 1rem;
    margin: 5px 0px;
`;

export const StyledCommentDeleteButton = styled.button`
    background-color: #e91e63;
    color: white;
    padding: 10px 15px;
    border-radius: 5px;
    outline: 0;
    text-transform: uppercase;
    box-shadow: 0px 2px 2px lightgray;
    transition: ease background-color 250ms;
    &:hover {
        background-color: #ad1457;
    }
    position: absolute;
    right: 10px;
    cursor: pointer;
    z-index: 10;
`;

export const StyledCommentInputContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const StyledCommentAuthorInput = styled.input`
    font-family: inherit;
    width: 100%;
    border: 0;
    outline: 0;
    font-size: 1.2rem;
    font-weight: bold;
    color: grey;
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;
`;

export const StyledCommentInput = styled.input`
    font-family: inherit;
    width: 100%;
    border: 0;
    outline: 0;
    font-size: 1rem;
    color: grey;
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;
`;
