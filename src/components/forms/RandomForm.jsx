import { useEffect, useState } from "react";
import { useCookie } from "../../customHooks/useCookie";
import { URL_API_GET_PROFILES } from "../../config/urls";
import { requestHandler } from "../../services/requestHandler";
import Button from "../buttons/Button";
import { useForm } from "react-hook-form";

const RandomForm = ({ onSubmit }) => {
    const { register, handleSubmit, formState: { errors }  } = useForm();
    const token = useCookie("authToken");
    const user = useCookie("user");
    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const url = `${URL_API_GET_PROFILES}/${user}`;
            try {
                const response = await requestHandler(url, "GET", null, token);
                setProfiles(response);
            } catch (error) {
                console.log(error.message);
            }
        };
        if (user) {
            setTimeout(() => {
                fetchUsers();
            }, 2000);
        }
    }, [user, token]);

    const handleSelectedProfiles = (data) => {
        onSubmit(data.selectedProfiles);
    };

    return (
        <form className="pt-5" onSubmit={handleSubmit(handleSelectedProfiles)}>
            <p>
                ¿No sabes qué ver esta noche? Selecciona tu perfil y el de tus
                acompañantes, luego, pulsa el botón mágico para elegir
                aleatoriamente algo que ver.
            </p>
            <div className="flex gap-9 mt-12">
                {profiles.map((profile) => (
                    <div
                        key={profile.id}
                        className="font-syne font-extrabold flex gap-3 items-center mb-6"
                    >
                        <input
                            type="checkbox"
                            id={profile.name}
                            name={profile.name}
                            value={profile.id}
                            {...register("selectedProfiles", {
                                validate: (value) =>
                                    value.length > 0 ||
                                    "Debes seleccionar al menos un perfil",
                            })}
                            className="accent-primary w-[1.125rem] h-[1.125rem] appearance-none border-2 border-primary rounded-[0.125rem] bg-bgPurple checked:appearance-auto"
                        />
                        <label htmlFor={profile.name}>{profile.name}</label>
                    </div>
                ))}
            </div>
            <Button
                text="¡Sorpresa!"
                type="submit"
                color="accent"
                styles="h-10"
            />
            
            {errors.selectedProfiles && (
                <p className="text-accent mt-3">{errors.selectedProfiles.message}</p>
            )}
        </form>
    );
};

export default RandomForm;
