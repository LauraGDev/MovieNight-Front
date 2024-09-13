import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { requestHandler } from "../../services/requestHandler";
import { URL_API_ADD_PROFILE } from "../../config/urls";
import Button from "../buttons/Button";
import TextInput from "./inputs/TextInput";
import { useCookie } from "../../customHooks/useCookie";

const AddProfileForm = ({ triggerAlert }) => {
    const user = useCookie("user");
    const token = useCookie("authToken");
    const url=`${URL_API_ADD_PROFILE}/${user}`
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate();

    const placeholders = {
        name: "Introduce el nombre del perfil...",
        photo: "Url de la foto de perfil (opcional)"
    };

    const onSubmit = async (data) => {
        const newProfile = {
            name: data.name,
            photo: data.photo,
        };

        try {
            await requestHandler(url, "POST", newProfile, token);
            triggerAlert(
                `El perfil de ${newProfile.name} se ha creado correctamente`,
                () => { navigate(-1); }
            );
        } catch (error) {
            triggerAlert(
                error.message,
                () => { window.location.reload(); }
            );
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-8 bg-primary bg-opacity-[0.5] px-[1.625rem] pt-8 pb-[3.75rem] rounded-lg"
        >
            <h1 className="text-center leading-8 pb-2 font-syne text-3xl font-extrabold text-primary">
                Nuevo perfil
            </h1>
            <TextInput
                type="text"
                {...register("name", {
                    required: "Debes introducir el nombre del perfil",
                })}
                label="Nombre"
                id="name"
                placeholder={placeholders.name}
                error={errors.name?.message}
            />
            <TextInput
                type="text"
                {...register("photo")}
                label="Foto de perfil"
                placeholder={placeholders.photo}
                id="photo"
            />
            <Button
                text="Crear perfil"
                type="submit"
                color="primary"
                styles="mt-5"
            />
        </form>
    );
};

export default AddProfileForm;