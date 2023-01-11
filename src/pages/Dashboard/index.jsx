import { useForm } from "react-hook-form";
import { FiEdit2 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Input from "../../components/Input";
import "./style.css";
import { Container, InputContainer, TasksContainer } from "./styles";

const Dashboard = () => {
  const { register } = useForm();
  const navigate = useNavigate();

  return (
    <Container>
      <InputContainer>
        <time>11 de janeiro de 2023</time>
        <button className="logout" onClick={() => navigate("/")}>
          {" "}
          Sair
        </button>
        <section>
          <Input
            icon={FiEdit2}
            placeholder="Nova tarefa"
            register={register}
            name="task"
          />
          <Button type="submit">Adicionar</Button>
        </section>
      </InputContainer>
      <TasksContainer>
        {[1].map((_) => (
          <Card
            title="Estudar novas tasks"
            date="11 de janeiro de 2023"
            onClick={() => {}}
          />
        ))}
        {[1].map((_) => (
          <Card
            title="Ir ao mercado"
            date="15 de janeiro de 2023"
            onClick={() => {}}
          />
        ))}
        {[1].map((_) => (
          <Card
            title="Pagar contas"
            date="20 de janeiro de 2023"
            onClick={() => {}}
          />
        ))}
        {[1].map((_) => (
          <Card
            title="Ir a academia"
            date="25 de janeiro de 2023"
            onClick={() => {}}
          />
        ))}
      </TasksContainer>
    </Container>
  );
};

export default Dashboard;
