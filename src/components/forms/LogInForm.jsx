import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { requestHandler } from "../../services/requestHandler";
import { URL_API_LOGIN } from "../../config/urls";
import Button from "../buttons/Button";
import TextInput from "./inputs/TextInput";

const LogInForm = ({ triggerAlert }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate();

    const placeholders = {
        name: "Introduce el nombre del perfil principal...",
        email: "Introduce tu email...",
        password: "Introduce tu contraseña...",
        passConf: "Introduce de nuevo la contraseña...",
    };

    const onSubmit = async (data) => {
        const user = {
            email: data.email.toLowerCase(),
            password: data.password,
        };

        try {
            const response = await requestHandler(URL_API_LOGIN, "POST", user);
            triggerAlert(
                response.message,
                () => {
                    localStorage.setItem("authToken", response.token);
                    localStorage.setItem("userId", response.user.id);
                    navigate("/");
                }
            );
        } catch (error) {
            let message = error.message;
            let onAccept = () => {}
            let onCancel = () => {}
            let showCancel = false;

            if (error.status == 404) {
                message += " ¿Acceder al formulario de registro?"
                onAccept = () => {
                    navigate("/registro");
                }
                showCancel = true;
            }

            triggerAlert(
                message,
                onAccept,
                onCancel,
                showCancel
            );
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-8 bg-primary bg-opacity-[0.5] px-[1.625rem] pt-8 pb-[3.75rem] rounded-lg"
        >
            <h1 className="text-center leading-8 pb-2 font-syne text-3xl font-extrabold text-primary">
                Iniciar Sesión
            </h1>
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
                    required: "Debes introducir una contraseña"
                })}
                label="Contraseña"
                id="password"
                placeholder={placeholders.password}
                error={errors.password?.message}
            />
            <Button
                text="Iniciar Sesión"
                type="submit"
                color="primary"
                styles="mt-5"
            />
        </form>
        
    );
};

export default LogInForm;
