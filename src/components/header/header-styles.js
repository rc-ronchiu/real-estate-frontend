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
    position: relative;
`;

export const StyledLogoContainer = styled(Link)`
    display: flex;
    align-self: center;
`;

export const StyledHeaderButton = styled.div`
    position: absolute;
    right: 10px;
    font-weight: bold;
    font-size: 1rem;
    cursor: pointer;
`;

export const StyledLogo = styled.img`
    height: 120px;
    width: 120px;
    margin-right: 8px;
`;

export const StyledTitleContainer = styled(Link)`
    text-decoration: none;
`;

export const StyledTitle = styled.h1`
    color: ${colors.title};
    font-family: system-ui;
`;
