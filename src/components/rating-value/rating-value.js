import { StyledRatingValue } from "./rating-value-styles";
const RatingValue = (props) => {
    return (
        <StyledRatingValue>{props.children}</StyledRatingValue>
    );
}

export default RatingValue;