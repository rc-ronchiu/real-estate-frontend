import React, { Fragment, useState } from 'react';
import { Router } from '@reach/router';
import IndexPage from './index-page';
import PropertyPage from './property-page';
import { StyledGlobalLayout } from '../utils/styles';
import { RatingModal } from '../components/rating-modal/rating-modal';
import { GlobalDataContext } from '../utils/context';

export default function App() {
    const [showRatingModal, setShowRatingModal] = useState(false);

    return (
        <GlobalDataContext.Provider 
            value={{
                showRatingModal,
                setShowRatingModal
            }}
        >
            <StyledGlobalLayout />
            <RatingModal showModal={showRatingModal} setShowModel={setShowRatingModal}/>
            <Router primary={false} component={Fragment}>
                <IndexPage path='/' />
                <PropertyPage path='property/:propertyId' />
            </Router>
        </GlobalDataContext.Provider>
    );
}