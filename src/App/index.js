import React, { Fragment } from 'react';
import { Router } from '@reach/router';
import IndexPage from './index-page';
import PropertyPage from './property-page';
import { StyledGlobalLayout } from '../utils/styles';

export default function App() {
    return (
        <>
        <StyledGlobalLayout />
        <Router primary={false} component={Fragment}>
            <IndexPage path='/' />
            <PropertyPage path='property/:propertyId' />
        </Router>
        </>
    );
}