import React from 'react';
import { gql, useMutation } from '@apollo/client';
import {
    StyledCardContentContainer,
    StyledCardContainer,
    StyledCardImageContainer,
    StyledCardImage,
    StyledCardBodyContainer,
    StyledCardTitle,
    StyledCardAddress,
    StyledCardFooterContainer,
    StyledCardRatingTextContainer,
    StyledCardRatingRank,
    StyledCardReviewCount,
} from './property-card-styles';
import RatingValue from '../../components/rating-value';

const INCREMENT_PROPERTY_VIEWS = gql`
    mutation IncrementPropertyViews($incrementPropertyViewsId: ID!) {
    incrementPropertyViews(id: $incrementPropertyViewsId) {
        code
        success
        message
        property {
            id
            views
        }
    }
}`;

const PropertyCard = ({ property }) => {
    const { title, thumbnail, address, ratingValue, views, id } = property;
    const [ incrementPropertyViews ] = useMutation(INCREMENT_PROPERTY_VIEWS, {
        variables: { incrementPropertyViewsId: id }
    })

    return (
        <StyledCardContainer to={`/property/${id}`} onClick={incrementPropertyViews}>
            <StyledCardContentContainer>
                <StyledCardImageContainer>
                    <StyledCardImage src={thumbnail} alt={title} />
                </StyledCardImageContainer>
                <StyledCardBodyContainer>
                    <StyledCardTitle>{title}</StyledCardTitle>
                    <StyledCardAddress>{address}</StyledCardAddress>
                    <StyledCardFooterContainer>
                        <RatingValue>{ratingValue}</RatingValue>
                        <StyledCardRatingTextContainer>
                            <StyledCardRatingRank>{ratingValue > 3 ? ratingValue > 4 ? 'Excellent' : 'Good' : 'Average'}</StyledCardRatingRank>
                            <StyledCardReviewCount>{`${views} views`}</StyledCardReviewCount>
                        </StyledCardRatingTextContainer>
                    </StyledCardFooterContainer>
                </StyledCardBodyContainer>
            </StyledCardContentContainer>
        </StyledCardContainer>
    );
}

export default PropertyCard;