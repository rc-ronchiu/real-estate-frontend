import React, { useMemo, useState, useContext } from 'react';
import PropertyCard from '../../containers/property-card';
import Layout from '../../components/layout';
import { DefaultHouse } from '../../assets/images';
import { useQuery, gql } from '@apollo/client';
import QueryResult from '../../components/query-result';
import Pagination from '../../components/pagination/pagination';
import { GlobalDataContext } from '../../utils/context';

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
    const {
        currentPage,
        setCurrentPage
    } = useContext(GlobalDataContext);
    const pageSize = 6;
    const { loading, error, data } = useQuery(PROPERTIES);
    const slicedData = useMemo(() => {
        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        return data?.propertiesForHome.slice(startIndex, endIndex);
    }, [currentPage, data?.propertiesForHome]);

    return (
        <Layout grid>
            <QueryResult error={error} loading={loading} data={data}>
                <Pagination currentPage={currentPage} itemCount={data?.propertiesForHome?.length} pageSize={pageSize} onPageChange={page => setCurrentPage(page)} />
                {slicedData?.map((property) => {
                    const thumbnail = property.thumbnailUrl === null ? DefaultHouse : property.thumbnailUrl;
                    return (<PropertyCard key={property.id} property={{ ...property, thumbnail: thumbnail }} />);
                })}
            </QueryResult>
        </Layout>
    );
};

export default IndexPage;