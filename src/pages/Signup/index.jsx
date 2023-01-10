import { FiLock, FiMail, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { AnimationContainer, Background, Container, Content } from "./styles";

const Signup = () => {
  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <form>
            <h1>Cadastro</h1>
            <Input icon={FiUser} label="Nome" placeholder="Seu nome" />
            <Input icon={FiMail} label="Email" placeholder="Seu melhor email" />
            <Input
              icon={FiLock}
              label="Senha"
              placeholder="Sua melhor senha"
              type="password"
            />
            <Input
              icon={FiLock}
              label="Confirmacao da senha"
              placeholder="Confirmação da senha"
              type="password"
            />
            <Button>Enviar</Button>
            <p>
              Já tem uma conta? Faça seu <Link to="/link">Login</Link>
            </p>
          </form>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default Signup;
