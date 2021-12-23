import React from 'react';
import { gql, useQuery } from '@apollo/client';
import Layout from '../../components/layout';
import PropertyDetail from '../../components/property-detail';
import { ShaunTheSheep } from '../../assets/images';

const PROPERTY = gql`
    query Query($propertyId: ID!) {
        property(id: $propertyId) {
            title
            id
            address
            ratingValue
            views
            description
        }
    }
`;

const Property = ({ propertyId }) => {
    const { loading, error, data } = useQuery(PROPERTY, {
        variables: { propertyId }
    });
    return (
        <Layout>
            <PropertyDetail key={data?.property.id} property={{...data?.property, thumbnail: ShaunTheSheep}} />
        </Layout>
    )
};

export default Property;