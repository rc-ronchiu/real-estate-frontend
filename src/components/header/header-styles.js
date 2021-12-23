import styled from 'styled-components';
import { colors } from '../../utils/styles';
import { Link } from '@reach/router';

export const StyledHeaderBar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 5px 30px;
    min-height: 8rem;
    background-color: ${colors.header};
`;

export const StyledHeaderContainer = styled.div`
    display: flex;
    width: 1100px;
    align-items: center;
`;

export const StyledLogoContainer = styled(Link)`
    display: flex;
    align-self: center;
`;

export const StyledLogo = styled.img`
    height: 60px;
    width: 60px;
    margin-right: 8px;
`;

export const StyledTitleContainer = styled(Link)`
    text-decoration: none;
`;

export const StyledTitle = styled.h1`
    color: ${colors.black};
`;
