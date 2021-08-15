import React from 'react';
import { 
    StyledCardContentContainer, 
    StyledCardContainer, 
    StyledCardImageContainer, 
    StyledCardImage,
    StyledCardBodyContainer,
    StyledCardTitle,
    StyledCardAddress,
    StyledCardFooterContainer,
    StyledCardRatingValue,
    StyledCardRatingRank,
} from './property-card-styles';

const PropertyCard = ({ property }) => {
    const { title, thumbnail, address, ratingValue, id } = property;
    return (
        <StyledCardContainer>
            <StyledCardContentContainer>
                <StyledCardImageContainer>
                    <StyledCardImage src={thumbnail} alt={title}/>
                </StyledCardImageContainer>
                <StyledCardBodyContainer>
                    <StyledCardTitle>{title}</StyledCardTitle>
                    <StyledCardAddress>{address}</StyledCardAddress>
                    <StyledCardFooterContainer>
                        <StyledCardRatingValue>{ratingValue}</StyledCardRatingValue>
                        <StyledCardRatingRank>Excellent!</StyledCardRatingRank>
                    </StyledCardFooterContainer>
                </StyledCardBodyContainer>
            </StyledCardContentContainer>
        </StyledCardContainer>

    );
}

export default PropertyCard;