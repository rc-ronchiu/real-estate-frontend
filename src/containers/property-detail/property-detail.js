import React from 'react';
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

const PropertyDetail = ({ property }) => {
    const {
        id,
        title,
        address,
        thumbnail,
        ratingValue,
        views,
        description
    } = property;

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