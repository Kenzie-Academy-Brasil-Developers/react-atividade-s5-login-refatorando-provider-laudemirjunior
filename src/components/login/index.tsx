import React, { useContext } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthContext } from "../../providers/auth";
import { useHistory } from "react-router";
import { Form } from "./styles";

interface UserData {
  email: string;
  password: string;
}

export default function Login() {
  const history = useHistory();
  const { signIn } = useContext(AuthContext);
  const schema = yup.object().shape({
    email: yup.string().required("Insira seu email"),
    password: yup.string().required("Insira sua senha"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({ resolver: yupResolver(schema) });

  const handleForm = (data: UserData) => {
    signIn(data, history);
  };

  return (
    <Form onSubmit={handleSubmit(handleForm)}>
      <div>
        <h1>Login</h1>
      </div>
      <div>
        <span>{errors.email?.message}</span>
        <input placeholder="Email" {...register("email")} />
      </div>
      <div>
        <span>{errors.password?.message}</span>
        <input placeholder="Email" {...register("password")} />
      </div>
      <div>
        <button type="submit">Entrar</button>
      </div>
    </Form>
  );
}
