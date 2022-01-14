import React, { Fragment, useState } from 'react';
import { Router } from '@reach/router';
import IndexPage from './index-page';
import PropertyPage from './property-page';
import { StyledGlobalLayout } from '../utils/styles';
import { RatingModal } from '../components/rating-modal/rating-modal';
import { GlobalDataContext } from '../utils/context';
import { AuthModal } from '../components/auth-modal/auth-modal';

export default function App() {
    const [showRatingModal, setShowRatingModal] = useState(false);
    const [showAuthModal, setShowAuthModal] = useState(false);
    const [ratingModalPropertyId, setRatingModalPropertyId] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [sortType, setSortType] = useState('ratingValue');

    return (
        <GlobalDataContext.Provider 
            value={{
                currentPage,
                sortType,
                setCurrentPage,
                setShowRatingModal,
                setShowAuthModal,
                setRatingModalPropertyId,
                setSortType
            }}
        >
            <StyledGlobalLayout />
            <RatingModal showModal={showRatingModal} setShowModal={setShowRatingModal} propertyId={ratingModalPropertyId}/>
            <AuthModal showModal={showAuthModal} setShowModal={setShowAuthModal} />
            <Router primary={false} component={Fragment}>
                <IndexPage path='/' />
                <PropertyPage path='property/:propertyId' />
            </Router>
        </GlobalDataContext.Provider>
    );
}