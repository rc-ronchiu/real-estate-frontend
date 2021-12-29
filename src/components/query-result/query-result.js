import React from 'react';
import { StyledLoadingContainer } from './query-result-styles';
import { Loading } from '../../assets/images';
import CardSkeleton from '../card-skeleton';

const QueryResult = ({ loading, error, data, children }) => {
    if (error) {
        return <p>Error: {error.message}</p>;
    }
    if (loading) {
        return (
            <CardSkeleton />
        );
    }
    if (!data) {
        return <p>Nothing to show...</p>;
    }
    if (data) {
        return children;
    }
};

export default QueryResult;