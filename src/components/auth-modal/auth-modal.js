import React, { useRef, useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { useSpring, animated } from 'react-spring';
import {
    StyledCloseModalButton,
    StyledInput,
    StyledModalBackground,
    StyledModalContainer,
    StyledModalText,
    StyledModalTitle
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

export const AuthModal = ({ showModal, setShowModel }) => {
    const [showLoginFail, setShowLoginFail] = useState(false);
    const [loginFailMessage, setLoginFailMessage] = useState('');
    const modalRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [login] = useMutation(LOGIN);
    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            setShowModel(false);
        };
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        }
        const response = await login({
            variables: {
                email: data.email,
                password: data.password
            }
        });
        console.log(response)
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
            setShowModel(false);
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
                <StyledModalBackground ref={modalRef} onClick={closeModal}>
                    <animated.div style={animation}>
                        <form onSubmit={handleSubmit}>
                            <StyledModalContainer>
                                <StyledModalTitle>Login</StyledModalTitle>
                                <StyledModalText>Email</StyledModalText>
                                <StyledInput ref={emailRef} type="text" placeholder="Email" required />
                                <StyledModalText>Password</StyledModalText>
                                <StyledInput ref={passwordRef} type="password" placeholder="Password" required />
                                <button type="submit">login</button>
                                {showLoginFail && <p>Login Fail: {loginFailMessage}</p>}
                                <StyledCloseModalButton onClick={() => setShowModel(false)}>Never mind!</StyledCloseModalButton>
                            </StyledModalContainer>
                        </form>
                    </animated.div>
                </StyledModalBackground>
            ) : null}
        </>
    );
};