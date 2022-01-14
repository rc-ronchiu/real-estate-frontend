import styled from 'styled-components';
import { colors } from '../../utils/styles';
import { Link } from '@reach/router';

export const StyledHeaderBar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 5px 30px;
    height: 6rem;
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

export const StyledHeaderButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 15px;
    color: ${colors.title};
    position: absolute;
    right: 10px;
    font-weight: bold;
    font-size: 1rem;
    cursor: default;
    align-items: center;
`;

export const StyledHeaderButton = styled.p`
    color: ${colors.header};
    background-color: ${colors.title};
    font-weight: bold;
    padding: 0.616rem 1rem;
    border-radius: 0.313rem;
    cursor: pointer;
`;

export const StyledLogo = styled.img`
    height: 40px;
    width: 40px;
    margin-right: 15px;
`;

export const StyledTitleContainer = styled(Link)`
    text-decoration: none;
`;

export const StyledTitle = styled.h1`
    color: ${colors.title};
    font-family: system-ui;
    font-weight: bold;
    font-size: 35px;
`;
