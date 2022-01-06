import React from 'react';
import { gql, useQuery } from '@apollo/client';
import Layout from '../../components/layout';
import PropertyDetail from '../../containers/property-detail';
import { DefaultHouse } from '../../assets/images';

const PROPERTY = gql`
    query Query($propertyId: ID!) {
        property(id: $propertyId) {
            title
            id
            address
            ratingValue
            views
            description
            thumbnailUrl
            comments {
                id
                userId
                author
                comment
            }
        }
    }
`;

const Property = ({ propertyId }) => {
    const { loading, error, data } = useQuery(PROPERTY, {
        variables: { propertyId }
    });
    const thumbnail = data?.property.thumbnailUrl === null ? DefaultHouse : data?.property.thumbnailUrl;
    return (
        <Layout>
            <PropertyDetail key={data?.property.id} property={{...data?.property, thumbnail: thumbnail}} />
        </Layout>
    )
};

export default Property;