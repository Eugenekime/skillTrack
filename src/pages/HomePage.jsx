import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSkillStore } from "../store/skillStore";

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Info = styled.p`
  color: #666;
`;

const Button = styled(Link)`
  display: inline-block;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    background-color: #0056b3;
  }
`;

const List = styled.ul`
  margin-top: 2rem;
  list-style: none;
  padding: 0;
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  background: ${(props) => (props.completed ? "#d4edda" : "#f8f9fa")};
  opacity: ${(props) => (props.completed ? 0.7 : 1)};
`;

const SkillName = styled.span`
  font-weight: bold;
`;

const Level = styled.span`
  display: inline-block;
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: #555;
`;

const Actions = styled.div`
  margin-top: 0.5rem;
  display: flex;
  gap: 0.5rem;
`;

const SmallBtn = styled.button`
  padding: 0.3rem 0.6rem;
  font-size: 0.8rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  background: ${(props) => props.color || "#ccc"};
  color: white;

  &:hover {
    opacity: 0.85;
  }
`;

const Filter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 10px;
  padding: 0px 10px 0px 10px;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

const FilterButtons = styled.button`
  border: 1px solid black;
  border-radius: 10px;
  background-color: white;
  cursor: pointer;
  &:hover {
    opacity: 0.85;
  }
`;

export default function HomePage() {
  const { skills, removeSkill, toggleCompleted, filter, setFilter } =
    useSkillStore();

  const filteredSkills = skills.filter((skill) => {
    if (filter === "completed") return skill.completed;
    if (filter === "uncompleted") return !skill.completed;
    return true; // all
  });

  return (
    <div>
      <Title>
        Мои навыки
        {skills.length === 0 ? (
          <></>
        ) : (
          <Filter>
            <FilterButtons
              onClick={() => setFilter("all")}
              style={{
                backgroundColor: filter === "all" ? "#007bff" : "white",
                color: filter === "all" ? "white" : "black",
              }}
            >
              All
            </FilterButtons>
            <FilterButtons
              onClick={() => setFilter("completed")}
              style={{
                backgroundColor: filter === "completed" ? "#28a745" : "white",
                color: filter === "completed" ? "white" : "black",
              }}
            >
              Completed
            </FilterButtons>
            <FilterButtons
              onClick={() => setFilter("uncompleted")}
              style={{
                backgroundColor: filter === "uncompleted" ? "#dc3545" : "white",
                color: filter === "uncompleted" ? "white" : "black",
              }}
            >
              Uncompleted
            </FilterButtons>
          </Filter>
        )}
      </Title>

      {skills.length === 0 ? (
        <>
          <Info>Пока что у вас нет добавленных навыков.</Info>
          <Button to="/add">Добавить навык</Button>
        </>
      ) : (
        <>
          <List>
            {filteredSkills.map((skill) => (
              <Item key={skill.id}>
                <SkillName>{skill.title}</SkillName>
                <Level>Уровень: {skill.level}</Level>

                <Actions>
                  <SmallBtn
                    color="#28a745"
                    onClick={() => toggleCompleted(skill.id)}
                  >
                    {skill.completed ? "Не изучено" : "Изучено"}
                  </SmallBtn>
                  <SmallBtn
                    color="#dc3545"
                    onClick={() => removeSkill(skill.id)}
                  >
                    Удалить
                  </SmallBtn>
                </Actions>
              </Item>
            ))}
          </List>

          <Button to="/add">Добавить еще</Button>
        </>
      )}
    </div>
  );
}
