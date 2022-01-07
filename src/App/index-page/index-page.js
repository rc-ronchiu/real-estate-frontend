import React, { useMemo, useState, useContext, useEffect } from 'react';
import PropertyCard from '../../containers/property-card';
import Layout from '../../components/layout';
import { DefaultHouse } from '../../assets/images';
import { useQuery, gql } from '@apollo/client';
import QueryResult from '../../components/query-result';
import Pagination from '../../components/pagination/pagination';
import { GlobalDataContext } from '../../utils/context';
import { StyledToolbar, StyledSortingSelector } from './index-page-styles';

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
    const [propertiesForHome, setPropertiesForHome] = useState([]);
    const [sortType, setSortType] = useState('ratingValue');
    useEffect(() => {
        if (loading) return;
        const sortArray = type => {
            const types = {
                ratingValue: 'ratingValue',
                ratings: 'ratings',
                views: 'views'
            };
            const sortProperty = types[type];
            const sorted = [...data?.propertiesForHome].sort((a, b) => b[sortProperty] - a[sortProperty]);
            setPropertiesForHome(sorted);
        };

        sortArray(sortType);
    }, [sortType, data?.propertiesForHome, loading]);

    const slicedData = useMemo(() => {
        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        return propertiesForHome.slice(startIndex, endIndex);
    }, [currentPage, propertiesForHome]);

    return (
        <Layout grid>
            <QueryResult error={error} loading={loading} data={data}>
                <StyledToolbar>
                    <Pagination currentPage={currentPage} itemCount={data?.propertiesForHome?.length} pageSize={pageSize} onPageChange={page => setCurrentPage(page)} />
                    <StyledSortingSelector onChange={(e) => setSortType(e.target.value)}>
                        <option value="ratingValue">Rating Value</option>
                        <option value="ratings">Ratings</option>
                        <option value="views">Views</option>
                    </StyledSortingSelector>
                </StyledToolbar>
                {slicedData?.map((property) => {
                    const thumbnail = property.thumbnailUrl === null ? DefaultHouse : property.thumbnailUrl;
                    return (<PropertyCard key={property.id} property={{ ...property, thumbnail: thumbnail }} />);
                })}
            </QueryResult>
        </Layout>
    );
};

export default IndexPage;