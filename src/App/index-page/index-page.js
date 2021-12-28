import React from 'react';
import PropertyCard from '../../containers/property-card';
import Layout from '../../components/layout';
import { DefaultHouse } from '../../assets/images';
import { useQuery, gql } from '@apollo/client';

const PROPERTIES = gql`
    query PropertiesForHome {
        propertiesForHome {
            id
            title
            address
            ratingValue
            views
            ratings
            thumbnailUrl
        }
    }
`;

const IndexPage = () => {
    
    const { loading, error, data} = useQuery(PROPERTIES);
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    return (
        <Layout grid>
            {data?.propertiesForHome?.map((property) => {
                const thumbnail = property.thumbnailUrl === null ? DefaultHouse : property.thumbnailUrl;
                return (<PropertyCard key={property.id} property={{...property, thumbnail: thumbnail}} />);
            })}
        </Layout>
    );
};

export default IndexPage;