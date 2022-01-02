import React, { Fragment, useState } from 'react';
import { Router } from '@reach/router';
import IndexPage from './index-page';
import PropertyPage from './property-page';
import { StyledGlobalLayout } from '../utils/styles';
import { RatingModal } from '../components/rating-modal/rating-modal';
import { GlobalDataContext } from '../utils/context';

export default function App() {
    const [showRatingModal, setShowRatingModal] = useState(false);
    const [ratingModalPropertyId, setRatingModalPropertyId] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    return (
        <GlobalDataContext.Provider 
            value={{
                currentPage,
                setCurrentPage,
                setShowRatingModal,
                setRatingModalPropertyId
            }}
        >
            <StyledGlobalLayout />
            <RatingModal showModal={showRatingModal} setShowModel={setShowRatingModal} propertyId={ratingModalPropertyId}/>
            <Router primary={false} component={Fragment}>
                <IndexPage path='/' />
                <PropertyPage path='property/:propertyId' />
            </Router>
        </GlobalDataContext.Provider>
    );
}