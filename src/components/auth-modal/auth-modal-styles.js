import styled from 'styled-components';
import { colors } from '../../utils/styles';
import { AiOutlineClose } from 'react-icons/ai';

export const StyledModalBackground = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9;
`;

export const StyledModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    height: ${(props) => props.isLoginForm ? '400px' : '500px'};
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: #fff;
    color: #000;
    position: relative;
    z-index: 10;
    border-radius: 10px;
    overflow: hidden;
    transition: all 0.4s ease;;
`;

export const StyledCloseModalButton = styled(AiOutlineClose)`
    height: 20px;
    width: 20px;
    color: black;
    padding: 10px 15px;
    opacity: 0.5;
    &:hover {
        opacity: 1;
    }
    cursor: pointer;
    position: absolute;
    right: 0;
    top: 2px;
    z-index: 10;
`;

export const StyledModalTitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100px;
    justify-content: center;
    position: relative;
`;

export const StyledModalLoginTitle = styled.h2`
    position: absolute;
    top: 10px;
    width: 50%;
    text-align: center;
    transition: all 0.6s cubic-bezier(0.68,-0.55,0.265,1.55);
    margin-left: ${(props) => props.isLoginForm ? 0 : '-50%'};
    color: ${(props) => props.isLoginForm ? 'black' : 'transparent'};
    user-select: none;
`;

export const StyledModalSignupTitle = styled.h2`
    position: absolute;
    top: 10px;
    width: 50%;
    text-align: center;
    transition: all 0.6s cubic-bezier(0.68,-0.55,0.265,1.55);
    margin-left: ${(props) => props.isLoginForm ? '50%' : 0};
    color: ${(props) => props.isLoginForm ? 'transparent' : 'black'};
    user-select: none;
`;

export const StyledModalSliderContainer = styled.div`
    position: relative;
    display: flex;
    height: 50px;
    width: 90%;
    overflow: hidden;
    margin: 5px 0;
    justify-content: space-between;
    border-radius: 5px;
`;

export const StyledModalSliderTab = styled.div`
    position: absolute;
    height: 100%;
    width: 50%;
    left: 0;
    z-index: 0;
    border-radius: 5px;
    background: ${colors.shadowBlue};
    transition: all 0.6s cubic-bezier(0.68,-0.55,0.265,1.55);
`;

export const StyledModalRadio = styled.input.attrs({name: "slide"})`
    display: none;
    height: 100%;
    width: 50%;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    text-align: center;
    line-height: 48px;
    cursor: pointer;
    z-index: 1;
    transition: all 0.6s ease;
    &:checked ~ ${StyledModalSliderTab} {
        left: ${(props) => props.id === 'signup' ? '50%' : 0};
        user-select: none;
    }
`;

export const StyledModalLabel = styled.label`
    height: 100%;
    width: 100%;
    color: black;
    font-size: 18px;
    font-weight: 500;
    text-align: center;
    line-height: 48px;
    cursor: pointer;
    z-index: 1;
    transition: all 0.6s ease;
`;

export const StyledModalLoginContainer = styled.form`
    display: flex;
    flex-direction: column;
    position: absolute;
    align-items: flex-start;
    top: 200px;
    transition: all 0.6s cubic-bezier(0.68,-0.55,0.265,1.55);
    margin-left: ${(props) => props.isLoginForm ? 0 : '-200%'};
    opacity: ${(props) => props.isLoginForm ? 1 : 0};
    user-select: none;
`;

export const StyledModalSignupContainer = styled.form`
    display: flex;
    flex-direction: column;
    position: absolute;
    align-items: flex-start;
    top: 200px;
    transition: all 0.6s cubic-bezier(0.68,-0.55,0.265,1.55);
    margin-left: ${(props) => props.isLoginForm ? '200%' : 0};
    opacity: ${(props) => props.isLoginForm ? 0 : 1};
    user-select: none;
`;

export const StyledModalText = styled.p`
    font-size: 1rem;
    margin: 5px 0px;
`;

export const StyledInput = styled.input`
    font-family: inherit;
    width: 20rem;
    border: 1px solid grey;
    border-radius: 0.5rem;
    outline: 0;
    font-size: 1rem;
    color: grey;
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;
`;

export const StyledSubmitButton = styled.button.attrs({type: 'submit'})`
    align-self: center;
    margin-top: 15px;
    padding: 5px 10px;
    border: 0;
    border-radius: 4px;
    font-size: 1rem;
    background-color: ${colors.title};
    cursor: pointer;
`;