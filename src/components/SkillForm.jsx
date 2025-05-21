import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import styled from "styled-components";
import { useSkillStore } from "../store/skillStore";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  title: z.string().min(2, "Минимум 2 символа"),
  level: z.enum(["Начинающий", "Средний", "Продвинутый"]),
});

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 500px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 6px;
`;

const Select = styled.select`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 6px;
`;

const Error = styled.p`
  color: red;
  margin: 0;
`;

const Button = styled.button`
  padding: 0.6rem;
  background-color: #28a745;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 8px;

  &:hover {
    background-color: #218838;
  }
`;

export default function SkillForm() {
  const addSkill = useSkillStore((state) => state.addSkill);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    addSkill({ ...data, id: Date.now(), completed: true });
    navigate("/");
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Label>Название навыка</Label>
        <Input type="text" {...register("title")} />
        {errors.title && <Error>{errors.title.message}</Error>}
      </div>

      <div>
        <Label>Уровень</Label>
        <Select {...register("level")}>
          <option value="">Выберите уровень</option>
          <option value="Начинающий">Начинающий</option>
          <option value="Средний">Средний</option>
          <option value="Продвинутый">Продвинутый</option>
        </Select>
        {errors.level && <Error>{errors.level.message}</Error>}
      </div>

      <Button type="submit">Сохранить</Button>
    </Form>
  );
}
