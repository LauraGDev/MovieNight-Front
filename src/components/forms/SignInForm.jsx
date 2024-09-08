import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { requestHandler } from "../../services/requestHandler"
import { URL_API_SIGNIN } from "../../config/urls";
import Button from "../buttons/Button";
import TextInput from "./inputs/TextInput";

const SignInForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm();
    const navigate = useNavigate();

    const placeholders = {
        name: "Introduce el nombre del perfil principal...",
        email: "Introduce tu email...",
        password: "Introduce tu contraseña...",
        passConf: "Introduce de nuevo la contraseña...",
    };

    const onSubmit = async (data) => {
        const newUser = {
            name: data.name,
            email: data.email.toLowerCase(),
            password: data.password,
        };

        try {
            await requestHandler(URL_API_SIGNIN, "POST", newUser);
            alert("Usuario registrado con éxito!");
            navigate("/inicio-sesion");
        } catch (error) {
            if (error.status == 409) {
                alert(`Error: ${error.message}`);
                navigate("/inicio-sesion")
            } else {
                alert(error.message);
            }
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-8 bg-primary bg-opacity-[0.5] px-[1.625rem] pt-8 pb-[3.75rem] rounded-lg"
        >
            <h1 className="text-center leading-8 pb-2 font-syne text-3xl font-extrabold text-primary">
                Nuevo usuario
            </h1>
            <TextInput
                type="text"
                {...register("name", {
                    required: "Debes introducir tu nombre",
                })}
                label="Nombre"
                id="name"
                placeholder={placeholders.name}
                error={errors.name?.message}
            />
            <TextInput
                type="text"
                {...register("email", {
                    required: "Debes introducir un email",
                    pattern: {
                        value: /[^@\s]+@[^@\s]+\.[^@\s]+/,
                        message: "Introduce un email válido",
                    },
                })}
                label="Email"
                id="email"
                placeholder={placeholders.email}
                error={errors.email?.message}
            />
            <TextInput
                type="password"
                {...register("password", {
                    required: "Debes introducir una contraseña",
                    minLength: {
                        value: 8,
                        message:
                            "La contraseña debe tener al menos 8 caracteres.",
                    },
                })}
                label="Contraseña"
                id="password"
                placeholder={placeholders.password}
                error={errors.password?.message}
            />
            <TextInput
                type="password"
                {...register("passConfirm", {
                    required: "Debes volver a introducir la contraseña",
                    validate: (value) =>
                        value === watch("password")
                            ? true
                            : "Las contraseñas no coinciden",
                })}
                label="Confirma la contraseña"
                id="passConfirm"
                placeholder={placeholders.passConf}
                error={errors.passConfirm?.message}
            />
            <Button
                text="Registro"
                type="submit"
                color="primary"
                styles="mt-5"
            />
        </form>
    );
};

export default SignInForm;
