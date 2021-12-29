import styled, { keyframes } from 'styled-components';
import { colors } from '../../utils/styles'

const skeleton = keyframes`
    to {
        opacity: 0.5;
    }
`;

export const StyledCardSkeletonContainer = styled.div`
    border-radius: 0.3rem;
    border-color: ${colors.border};
    border-style: solid;
    border-width: thin;
    color: ${colors.text};
    background-size: cover;
    background-color: ${colors.background};
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 24rem;
    width: 20rem;
    margin: 0.5rem;
    overflow: hidden;
    position: relative;
    &:hover {
        background-color: #f5f5f5;
    }
    text-decoration: none;
    animation: ${skeleton} 0.6s ease infinite alternate;
`;

export const StyledCardSkeletonContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    padding: 0.5rem;
`;

export const StyledCardSkeletonImage = styled.div`
    border-radius: 0.3rem;
    height: 12rem;
    position: relative;
    background-color: ${colors.grey};
`;

export const StyledCardSkeletonBodyContainer = styled.div`
    padding: 1rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

export const StyledCardSkeletonTitle = styled.div`
    border-radius: 0.3rem;
    background-color: ${colors.grey};
    align-self: center;
    height: 2rem;
    width: 60%;
    margin-bottom: 0;
`;

export const StyledCardSkeletonSubtitle = styled.div`
    border-radius: 0.3rem;
    background-color: ${colors.grey};
    margin-top: 0;
    height: 1rem;
    width: 10rem;
`;

export const StyledCardSkeletonRatingValueContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const StyledCardSkeletonRatingValue = styled.div`
    height: 3rem;
    width: 3rem;
    border-radius: 0.3rem;
    background-color: ${colors.grey};
`;

export const StyledCardSkeletonRatingValueTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-left: 0.5rem;
`;

export const StyledCardSkeletonText = styled.div`
    border-radius: 0.3rem;
    background-color: ${colors.grey};
    margin-top: 0;
    height: 1rem;
    width: 12rem;
`;
