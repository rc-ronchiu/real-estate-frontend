import React from 'react';
import PropertyCard from '../../containers/property-card';
import Layout from '../../components/layout';
import { ShaunTheSheep } from '../../assets/images';
import { useQuery, gql } from '@apollo/client';

const PROPERTIES = gql`
    query PropertiesForHome {
        propertiesForHome {
            id
            title
            address
            ratingValue
            views
        }
    }
`;

const IndexPage = () => {
    
    const { loading, error, data} = useQuery(PROPERTIES);
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    return (
        <Layout grid>
            {data?.propertiesForHome?.map((property) => (
                <PropertyCard key={property.id} property={{...property, thumbnail: ShaunTheSheep}} />
            ))}
        </Layout>
    );
};

export default IndexPage;