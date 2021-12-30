import { StyledPageContainer } from "./layout-styles";
import Header from '../header';
const Layout = ({ fullWidth, children }) => {
    return (
      <>
        <Header />
        <StyledPageContainer fullWidth={fullWidth}>
          {children}
        </StyledPageContainer>
      </>
    );
  }

export default Layout;