import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: sans-serif;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid #ccc;
  padding-bottom: 1rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #444;

  &:hover {
    color: #000;
    font-weight: bold;
  }
`;

export default function Layout() {
  return (
    <Wrapper>
      <Nav>
        <StyledLink to="/">Главная</StyledLink>
        <StyledLink to="/add">Добавить</StyledLink>
      </Nav>
      <Outlet />
    </Wrapper>
  );
}
