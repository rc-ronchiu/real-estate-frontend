import React, { useContext } from 'react';
import FileUpload from '../file-upload';
import { 
    StyledCover, 
    StyledPropertyDetail, 
    StyledDetailRow, 
    StyledDetailItem,
    StyledDescription
} from './property-detail-styles';
import RatingValue from '../../components/rating-value';
import { DefaultHouse } from '../../assets/images';
import { GlobalDataContext } from '../../utils/context';

const PropertyDetail = ({ property }) => {
    const {
        setShowRatingModal,
        setRatingModalPropertyId
    } = useContext(GlobalDataContext);
    const {
        id,
        title,
        address,
        thumbnail,
        ratingValue,
        views,
        description
    } = property;

    const openModal = () => {
        setShowRatingModal(prev => !prev);
        setRatingModalPropertyId(id);
    };

    return (
        <>
            {thumbnail === DefaultHouse ? <FileUpload id={id} thumbnail={thumbnail}/> : <StyledCover src={thumbnail} alt={title} />}
            <StyledPropertyDetail>
                <StyledDetailRow>
                    <h1>{title}</h1>
                </StyledDetailRow>
                <StyledDetailRow>
                    <StyledDetailItem>
                        <h4>Rating</h4>
                        <RatingValue>{ratingValue}</RatingValue>
                        <div onClick={openModal}>Leave your rating here</div>
                    </StyledDetailItem>
                    <StyledDetailItem>
                        <h4>Address</h4>
                        <div>{address}</div>
                    </StyledDetailItem>
                    <StyledDetailItem>
                        <h4>Views</h4>
                        <div>{views}</div>
                    </StyledDetailItem>
                </StyledDetailRow>
                <StyledDescription>{description}</StyledDescription>
            </StyledPropertyDetail>
        </>
    );
};

export default PropertyDetail;