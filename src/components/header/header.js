import { 
    StyledHeaderBar, 
    StyledHeaderContainer, 
    StyledLogoContainer, 
    StyledLogo, 
    StyledTitle, 
    StyledTitleContainer, 
    StyledHeaderButtonContainer } from './header-styles';
import { Logo } from '../../assets/images';
import { useContext } from 'react';
import { GlobalDataContext } from '../../utils/context';

const Header = () => {
    const {
        setShowAuthModal
    } = useContext(GlobalDataContext);

    const openModal = () => {
        setShowAuthModal(true);
    };
    
    const logout = () => {
        localStorage.removeItem('userToken');
        localStorage.removeItem('user');
        window.location.reload();
    };

    return (
        <StyledHeaderBar>
            <StyledHeaderContainer>
                <StyledLogoContainer to='/'>
                    <StyledLogo src={Logo} alt={'Logo'}/>
                </StyledLogoContainer>
                <StyledTitleContainer to='/'>
                    <StyledTitle>Real Estate</StyledTitle>
                </StyledTitleContainer>
                <StyledHeaderButtonContainer>
                    {!JSON.parse(localStorage.getItem('user')) &&<p onClick={openModal}>login</p>}
                    {JSON.parse(localStorage.getItem('user')) && <p onClick={logout}>logout</p>}
                    {JSON.parse(localStorage.getItem('user')) && <p>Hi, {JSON.parse(localStorage.getItem('user')).username}</p>}
                </StyledHeaderButtonContainer>
            </StyledHeaderContainer>
        </StyledHeaderBar>
    );
}

export default Header;