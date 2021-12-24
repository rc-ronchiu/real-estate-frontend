import { Link } from '@reach/router';
import styled from 'styled-components';
import { colors } from '../../utils/styles'

export const StyledCardContainer = styled(Link)`
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
  height: 380;
  margin: 0.5rem;
  overflow: hidden;
  position: relative;
  &:hover {
    background-color: #f5f5f5;
  }
  cursor: pointer;
  text-decoration: none;
`;

export const StyledCardContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    padding: 0.5rem;
`;

export const StyledCardImageContainer = styled.div`
    height: 12rem;
    position: relative;
`;

export const StyledCardImage = styled.img`
    border-radius: 0.3rem;
    object-fit: scale-down;
    width: 100%;
    height: 100%;
`;

export const StyledCardBodyContainer = styled.div`
    padding: 1rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

export const StyledCardTitle = styled.h3`
    text-align: center;
    font-size: 1.4rem;
    line-height: 1rem;
    font-weight: 700;
    color: ${colors.text};
    flex: 1;
`;

export const StyledCardAddress = styled.p`
    font-size: 0.8rem;
    opacity: 0.6;
`;

export const StyledCardFooterContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const StyledCardRatingTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 0.2rem;
    justify-content: center;
`;

export const StyledCardRatingRank = styled.p`
    font-size: 1rem;
    margin: 0;
    width: 100%;
`;

export const StyledCardReviewCount = styled.p`
    font-size: 0.6rem;
    margin: 0;
    width: 100%;
`;