import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { FiLock, FiMail, FiUser } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { AnimationContainer, Background, Container, Content } from "./styles";

const Signup = () => {
  const navigate = useNavigate();
  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(8, "Mínimo de 8 digítos")
      .required("Campo obrigatório"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes")
      .required("Campo obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitFunction = (data) => {
    console.log(data);
    toast.success("Sucesso ao criar a conta!");
    navigate("/login");
  };
  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <h1>Cadastro</h1>
            <Input
              icon={FiUser}
              label="Nome"
              placeholder="Seu nome"
              register={register}
              name="name"
              error={errors.name?.message}
            />
            <Input
              icon={FiMail}
              label="Email"
              placeholder="Seu melhor email"
              register={register}
              name="email"
              error={errors.email?.message}
            />
            <Input
              icon={FiLock}
              label="Senha"
              placeholder="Sua melhor senha"
              type="password"
              register={register}
              name="password"
              error={errors.password?.message}
            />
            <Input
              icon={FiLock}
              label="Confirmação da senha"
              placeholder="Confirmação da senha"
              type="password"
              register={register}
              name="passwordConfirm"
              error={errors.passwordConfirm?.message}
            />
            <Button type="submit">Enviar</Button>
            <p>
              Já tem uma conta? Faça seu <Link to="/login">Login</Link>
            </p>
          </form>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default Signup;
