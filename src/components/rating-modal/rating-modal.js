import { gql, useMutation } from '@apollo/client';
import React, { useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import { StyledCloseModalButton, StyledModalBackground, StyledModalContainer, StyledModalRatingContainer, StyledModalRatingFrown, StyledModalRatingIconContainer, StyledModalRatingMeh, StyledModalRatingSmile, StyledModalSubtitle, StyledModalTitle } from './rating-modal-styles';

const UPDATE_RATING = gql`
    mutation UpdateRating($updateRatingId: ID!, $rating: Int!) {
        updateRating(id: $updateRatingId, rating: $rating) {
            code
            success
            message
            property {
                id
                ratings
                ratingValue
            }
        }
    }
`;

export const RatingModal = ({ showModal, setShowModal, propertyId }) => {
    const modalRef = useRef(null);
    const [ updateRating ] = useMutation(UPDATE_RATING);
    const closeModal = (e) => {
        if(modalRef.current === e.target) {
            setShowModal(false);
        };
    };
    const handleRating = async (rating) => {
        await updateRating({
            variables: {
                updateRatingId: propertyId,
                rating: rating
            }
        });
        setShowModal(false);
    };
    const animation = useSpring({
        config: {
            duration: 200
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%)` : `translateY(-100%)`
    });
    return (
        <>
            {showModal ? (
                <StyledModalBackground ref={modalRef} onClick={closeModal}>
                    <animated.div style={animation}>
                        <StyledModalContainer>
                            <StyledModalTitle>How is this property?</StyledModalTitle>
                            <StyledModalSubtitle>Tell us about your experience</StyledModalSubtitle>
                            <StyledModalRatingContainer>
                                <StyledModalRatingIconContainer onClick={() => handleRating(5)}>
                                    <StyledModalRatingSmile />
                                    <StyledModalSubtitle>Great</StyledModalSubtitle>
                                </StyledModalRatingIconContainer>
                                <StyledModalRatingIconContainer onClick={() => handleRating(3)}>
                                    <StyledModalRatingMeh />
                                    <StyledModalSubtitle>Meh</StyledModalSubtitle>
                                </StyledModalRatingIconContainer>
                                <StyledModalRatingIconContainer onClick={() => handleRating(1)}>
                                    <StyledModalRatingFrown />
                                    <StyledModalSubtitle>Awful</StyledModalSubtitle>
                                </StyledModalRatingIconContainer>
                            </StyledModalRatingContainer>
                            <StyledCloseModalButton onClick={() => setShowModal(false)}>Never mind!</StyledCloseModalButton>
                        </StyledModalContainer>
                    </animated.div>
                </StyledModalBackground>
            ) : null}
        </>
    );
};