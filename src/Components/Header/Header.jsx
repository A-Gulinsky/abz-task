// component
import { BtnList } from './BtnList/BtnList';
// emotion
import { Container, HeaderContainer, Link } from './Header.styled';
// svg
import { ReactComponent as Logo } from '../../Assets/Logo.svg';

export const Header = () => {
  return (
    <header style={{ backgroundColor: 'rgb(255,255,255)' }}>
      <Container>
        <HeaderContainer>
          <Link href="./">
            <Logo
              width={104}
              height={26}
              aria-label="logo and link to reload page"
            />
          </Link>

          <BtnList />
        </HeaderContainer>
      </Container>
    </header>
  );
};
