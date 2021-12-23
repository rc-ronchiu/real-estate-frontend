import { StyledHeaderBar, StyledHeaderContainer, StyledLogoContainer, StyledLogo, StyledTitle, StyledTitleContainer } from './header-styles';
import { Logo } from '../../assets/images';


const Header = () => {
    return (
        <StyledHeaderBar>
            <StyledHeaderContainer>
                <StyledLogoContainer to='/'>
                    <StyledLogo src={Logo} alt={'Logo'}/>
                </StyledLogoContainer>
                <StyledTitleContainer to='/'>
                    <StyledTitle>Real Estate</StyledTitle>
                </StyledTitleContainer>
            </StyledHeaderContainer>
        </StyledHeaderBar>
    );
}

export default Header;