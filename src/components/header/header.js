import { StyledHeaderBar, StyledHeaderContainer, StyledLogoContainer, StyledLogo, StyledTitle } from './header-styles';
import { Logo } from '../../assets/images';


const Header = () => {
    return (
        <StyledHeaderBar>
            <StyledHeaderContainer>
                <StyledLogoContainer>
                    <StyledLogo src={Logo} alt={'Logo'}/>
                </StyledLogoContainer>
                <StyledTitle>Real Estate</StyledTitle>
            </StyledHeaderContainer>
        </StyledHeaderBar>
    );
}

export default Header;