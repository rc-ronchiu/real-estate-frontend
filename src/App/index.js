import React from 'react';
import IndexPage from './index-page';
import { StyledGlobalLayout } from '../utils/styles';

export default function App() {
    return (
        <>
            <StyledGlobalLayout />
            <IndexPage />
        </>
    );
}