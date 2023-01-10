import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { Container, Content } from "./styles";

const Home = () => {
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    return navigate(path);
  };
  return (
    <Container>
      <Content>
        <h1>
          do<span>.</span>it
        </h1>
        <span>Organize-se de forma fácil e efetiva</span>
        <div>
          <Button onClick={() => handleNavigate("/signup")}>Cadastre-se</Button>
          <Button onClick={() => handleNavigate("/login")}>Login</Button>
        </div>
      </Content>
    </Container>
  );
};

export default Home;
