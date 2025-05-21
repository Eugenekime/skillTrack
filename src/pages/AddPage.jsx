import styled from "styled-components";
import { Link } from "react-router-dom";
import SkillForm from "../components/SkillForm";

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const Back = styled(Link)`
  display: inline-block;
  margin-bottom: 1.5rem;
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default function AddPage() {
  return (
    <div>
      <Back to="/">← Назад</Back>
      <Title>Добавить новый навык</Title>
      <SkillForm />
    </div>
  );
}
