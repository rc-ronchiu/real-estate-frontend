import { StyledPageContainer } from "./layout-styles";
import Header from '../header';
const Layout = ({ fullWidth, children, grid }) => {
    return (
      <>
        <Header />
        <StyledPageContainer fullWidth={fullWidth} grid={grid}>
          {children}
        </StyledPageContainer>
      </>
    );
  }

export default Layout;