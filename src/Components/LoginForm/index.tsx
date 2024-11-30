import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { LoginTypes } from "./types";
import { Container, Input, Button, ErrorMessage } from "./styles";

const schema = yup.object().shape({
    email: yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
    password: yup.string().min(6, "A senha deve ter pelo menos 6 caracteres").required("Senha é obrigatória"),
});

const LoginForm: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginTypes>({
        resolver: yupResolver(schema),
    });

    const mockLogin = async (email: string, password: string): Promise<boolean> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(email === "user@example.com" && password === "password123");
            }, 1000);
        });
    };

    const onSubmit = async (data: LoginTypes) => {
        console.log("Dados do formulário:", data);
        const isAuthenticated = await mockLogin(data.email, data.password);
        if (isAuthenticated) {
            alert("Login realizado com sucesso!");
        } else {
            alert("Credenciais inválidas.");
        }
    };

    return (
        <Container>
            <h1>Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input {...register("email")} placeholder="E-mail" />
                <ErrorMessage>{errors.email?.message}</ErrorMessage>

                <Input {...register("password")} type="password" placeholder="Senha" />
                <ErrorMessage>{errors.password?.message}</ErrorMessage>

                <Button type="submit">Entrar</Button>
            </form>
        </Container>
    );
};

export default LoginForm;
