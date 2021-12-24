import { createGlobalStyle } from 'styled-components';

export const colors = {
    black: '#000000',
    white: '#FFFFFF',
    grey: '#808080',
    red: '#B81d13',
    yellow: '#EFB700',
    green: '#008450',
    lightGrayishBlue: '#f3f5f7',
    background: '#eeeeee',
    border: '#cdc9c3',
    primary: '#3ddc97',
    secondary: '#785964',
    header: '#256eff',
    text: '#454545',
}

export const StyledGlobalLayout = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        background-color: ${colors.background};
        font-family: sans-serif;
    }
`;