import React from 'react';
import PropertyCard from '../../containers/property-card';
import Layout from '../../components/layout';
import { ShaunTheSheep } from '../../assets/images';

const IndexPage = () => {
    const property = {title: 'First property', address: 'No. 4, some street, some city', ratingValue: 99, thumbnail: ShaunTheSheep};
    return (
        <Layout grid>
            <PropertyCard property={property} />
            <PropertyCard property={property} />
            <PropertyCard property={property} />
            <PropertyCard property={property} />
            <PropertyCard property={property} />
            <PropertyCard property={property} />
        </Layout>
    );
};

export default IndexPage;