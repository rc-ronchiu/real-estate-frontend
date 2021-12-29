import React from 'react';
import { 
    StyledCardSkeletonContainer, 
    StyledCardSkeletonContentContainer, 
    StyledCardSkeletonImage,
    StyledCardSkeletonBodyContainer,
    StyledCardSkeletonTitle,
    StyledCardSkeletonSubtitle,
    StyledCardSkeletonRatingValueContainer,
    StyledCardSkeletonRatingValue,
    StyledCardSkeletonRatingValueTextContainer,
    StyledCardSkeletonText
} from './card-skeleton-styles';

const CardSkeleton = () => {
    return Array(9).fill(
        <StyledCardSkeletonContainer >
            <StyledCardSkeletonContentContainer>
                <StyledCardSkeletonImage />
                <StyledCardSkeletonBodyContainer>
                    <StyledCardSkeletonTitle />
                    <StyledCardSkeletonSubtitle />
                    <StyledCardSkeletonRatingValueContainer>
                        <StyledCardSkeletonRatingValue />
                        <StyledCardSkeletonRatingValueTextContainer>
                        <StyledCardSkeletonText />
                        <StyledCardSkeletonText />
                        </StyledCardSkeletonRatingValueTextContainer>
                    </StyledCardSkeletonRatingValueContainer>
                </StyledCardSkeletonBodyContainer>
            </StyledCardSkeletonContentContainer>
        </StyledCardSkeletonContainer>
    );
};

export default CardSkeleton;