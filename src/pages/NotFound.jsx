import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  text-align: center;
  padding: 4rem 1rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  color: #666;
  margin-bottom: 2rem;
`;

const Button = styled(Link)`
  display: inline-block;
  padding: 0.5rem 1.2rem;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: bold;

  &:hover {
    background-color: #0056b3;
  }
`;

export default function NotFound() {
  return (
    <Wrapper>
      <Title>404 — Страница не найдена</Title>
      <Text>Кажется, вы попали не туда.</Text>
      <Button to="/">Вернуться на главную</Button>
    </Wrapper>
  );
}
