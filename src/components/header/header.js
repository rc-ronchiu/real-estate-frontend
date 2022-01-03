import { StyledHeaderBar, StyledHeaderContainer, StyledLogoContainer, StyledLogo, StyledTitle, StyledTitleContainer, StyledHeaderButton } from './header-styles';
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
    
    return (
        <StyledHeaderBar>
            <StyledHeaderContainer>
                <StyledLogoContainer to='/'>
                    <StyledLogo src={Logo} alt={'Logo'}/>
                </StyledLogoContainer>
                <StyledTitleContainer to='/'>
                    <StyledTitle>Real Estate</StyledTitle>
                </StyledTitleContainer>
                <StyledHeaderButton onClick={openModal}>Login</StyledHeaderButton>
            </StyledHeaderContainer>
        </StyledHeaderBar>
    );
}

export default Header;