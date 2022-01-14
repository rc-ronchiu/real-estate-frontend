import React, { useRef, useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { useSpring, animated } from 'react-spring';
import {
    StyledCloseModalButton,
    StyledInput,
    StyledModalBackground,
    StyledModalContainer,
    StyledModalRadio,
    StyledModalLabel,
    StyledModalSliderContainer,
    StyledModalSliderTab,
    StyledModalText,
    StyledModalLoginTitle,
    StyledModalSignupTitle,
    StyledModalTitleContainer,
    StyledModalLoginContainer,
    StyledModalSignupContainer,
    StyledSubmitButton,
    StyledFailMessageContainer,
    StyledFailMessage,
    StyledWarningSign
} from './auth-modal-styles';

const LOGIN = gql`
    mutation Login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            code
            success
            message
            token
            user {
                id
                username
                email
            }
        }
    }
`;

const REGISTER = gql`
    mutation Register($username: String!, $email: String!, $password: String!) {
        register(username: $username, email: $email, password: $password) {
            code
            success
            message
            user {
                id
                username
                email
            }
        }
    }
`;


export const AuthModal = ({ showModal, setShowModal }) => {
    const [showLoginFail, setShowLoginFail] = useState(false);
    const [loginFailMessage, setLoginFailMessage] = useState('');
    const [showSignupFail, setShowSignupFail] = useState(false);
    const [signupFailMessage, setSignupFailMessage] = useState('');
    const [isLoginForm, setIsLoginForm] = useState(true);

    const modalRef = useRef(null);
    const loginEmailRef = useRef(null);
    const loginPasswordRef = useRef(null);
    const signupEmailRef = useRef(null);
    const signupUsernameRef = useRef(null);
    const signupPasswordRef = useRef(null);

    const [login] = useMutation(LOGIN);
    const [register] = useMutation(REGISTER);

    const closeModal = () => {
        setShowModal(false);
        setIsLoginForm(true);
        setShowLoginFail(false);
        setShowSignupFail(false);
    };

    const handleClickOutside = (e) => {
        if (modalRef.current === e.target) {
            closeModal();
        };
    };
    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email: loginEmailRef.current.value,
            password: loginPasswordRef.current.value
        }
        const response = await login({
            variables: {
                email: data.email,
                password: data.password
            }
        });
        const code = response.data.login.code;
        if (code !== 200) {
            setShowLoginFail(true);
            setLoginFailMessage(response.data.login.message);
        }
        else {
            const token = response.data.login.token;
            const user = response.data.login.user;
            localStorage.setItem('userToken', token);
            localStorage.setItem('user', JSON.stringify(user));
            closeModal();
        }
    };
    const handleSignupSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email: signupEmailRef.current.value,
            username: signupUsernameRef.current.value,
            password: signupPasswordRef.current.value
        }
        const response = await register({
            variables: {
                email: data.email,
                username: data.username,
                password: data.password
            }
        });
        const code = response.data.register.code;
        if (code !== 200) {
            setShowSignupFail(true);
            setSignupFailMessage(response.data.register.message);
        }
        else {
            const token = response.data.register.token;
            const user = response.data.register.user;
            localStorage.setItem('userToken', token);
            localStorage.setItem('user', JSON.stringify(user));
            closeModal();
        }
    };
    const animation = useSpring({
        config: {
            duration: 200
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%)` : `translateY(-100%)`
    });
    return (
        <>
            {showModal ? (
                <StyledModalBackground ref={modalRef} onClick={handleClickOutside}>
                    <animated.div style={animation}>
                        <StyledModalContainer isLoginForm={isLoginForm} isLoginFail={showLoginFail} isSignupFail={showSignupFail}>
                            <StyledModalTitleContainer>
                                <StyledModalLoginTitle isLoginForm={isLoginForm}>Login</StyledModalLoginTitle>
                                <StyledModalSignupTitle isLoginForm={isLoginForm}>Signup</StyledModalSignupTitle>
                            </StyledModalTitleContainer>
                            <StyledModalSliderContainer>
                                <StyledModalRadio onClick={() => setIsLoginForm(true)} type="radio" id="login" />
                                <StyledModalRadio onClick={() => setIsLoginForm(false)} type="radio" id="signup" />
                                <StyledModalLabel for="login">login</StyledModalLabel>
                                <StyledModalLabel for="signup">signup</StyledModalLabel>
                                <StyledModalSliderTab />
                            </StyledModalSliderContainer>
                            <StyledModalLoginContainer isLoginForm={isLoginForm} onSubmit={handleLoginSubmit}>
                                <StyledModalText>Email</StyledModalText>
                                <StyledInput ref={loginEmailRef} type="email" placeholder="example@gmail.com" required />
                                <StyledModalText>Password</StyledModalText>
                                <StyledInput ref={loginPasswordRef} type="password" placeholder="******" required />
                                <StyledSubmitButton>login</StyledSubmitButton>
                                {showLoginFail && <StyledFailMessageContainer>
                                    <StyledWarningSign />
                                    <StyledFailMessage>Login Fail: {loginFailMessage}</StyledFailMessage>
                                    </StyledFailMessageContainer>}
                            </StyledModalLoginContainer>
                            <StyledModalSignupContainer isLoginForm={isLoginForm} onSubmit={handleSignupSubmit}>
                                <StyledModalText>Email</StyledModalText>
                                <StyledInput ref={signupEmailRef} type="email" placeholder="example@gmail.com" required />
                                <StyledModalText>Username</StyledModalText>
                                <StyledInput ref={signupUsernameRef} type="text" placeholder="John Wick" required />
                                <StyledModalText>Password</StyledModalText>
                                <StyledInput ref={signupPasswordRef} type="password" placeholder="******" required />
                                <StyledSubmitButton>signup</StyledSubmitButton>
                                {showSignupFail && <StyledFailMessageContainer>
                                    <StyledWarningSign />
                                    <StyledFailMessage>Signup Fail: {signupFailMessage}</StyledFailMessage>
                                    </StyledFailMessageContainer>}
                            </StyledModalSignupContainer>
                            <StyledCloseModalButton onClick={closeModal} />
                        </StyledModalContainer>
                    </animated.div>
                </StyledModalBackground>
            ) : null}
        </>
    );
};