import { useState } from "react";
import Button from "../buttons/Button";
import TextInput from "./inputs/TextInput";

const SignInForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    console.log(name, email, password);
    return (
        <form
            action=""
            className="bg-primary bg-opacity-[0.5] px-[1.625rem] pt-8 pb-[3.75rem] rounded-lg"
        >
            <h1 className="text-center leading-8 pb-8 font-syne text-3xl font-extrabold text-primary">
                Nuevo usuario
            </h1>
            <TextInput
                type="text"
                label="Nombre"
                id="name"
                placeholder="Introduce el nombre del perfil principal..."
                onChange={(e) => setName(e.target.value)}
            />
            <TextInput
                type="email"
                label="Email"
                id="email"
                placeholder="Introduce tu email..."
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextInput
                type="password"
                label="Contraseña"
                id="password"
                placeholder="Introduce tu contraseña..."
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button text="Registro" type="submit" color="primary" styles="mt-2" />
        </form>
    );
};

export default SignInForm;
