import React from 'react';
import { StyledCloseModalButton, StyledModalBackground, StyledModalContainer, StyledModalRatingContainer, StyledModalRatingFrown, StyledModalRatingIconContainer, StyledModalRatingMeh, StyledModalRatingSmile, StyledModalSubtitle, StyledModalTitle } from './rating-modal-styles';

export const RatingModal = ({ showModal, setShowModel}) => {
    return (
        <>
            {showModal ? (
                <StyledModalBackground>
                    <StyledModalContainer>
                        <StyledModalTitle>How is this property?</StyledModalTitle>
                        <StyledModalSubtitle>Tell us about your experience</StyledModalSubtitle>
                        <StyledModalRatingContainer>
                            <StyledModalRatingIconContainer>
                                <StyledModalRatingSmile />
                                <StyledModalSubtitle>Great</StyledModalSubtitle>
                            </StyledModalRatingIconContainer>
                            <StyledModalRatingIconContainer>
                                <StyledModalRatingMeh />
                                <StyledModalSubtitle>Meh</StyledModalSubtitle>
                            </StyledModalRatingIconContainer>
                            <StyledModalRatingIconContainer>
                                <StyledModalRatingFrown />
                                <StyledModalSubtitle>Awful</StyledModalSubtitle>
                            </StyledModalRatingIconContainer>
                        </StyledModalRatingContainer>
                        <StyledCloseModalButton onClick={() => setShowModel(false)}>Never mind!</StyledCloseModalButton>
                    </StyledModalContainer>
                </StyledModalBackground>
            ) : null}
        </>
    );
};