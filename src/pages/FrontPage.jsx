import { NavLink, useNavigate } from "react-router-dom";
import Button from "../components/buttons/Button";
import { useAuth } from "../customHooks/useAuth";
import { useEffect } from "react";

const FrontPage = () => {
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/buscador");
        }
    }, [navigate, isAuthenticated]);

    return (
        <section className="flex flex-col justify-center gap-16 pt-44">
            <figure>
                <img src="./animated-logo.gif" alt="MovieNight" />
                <p className="text-lg leading-6">
                    Guarda las películas que quieres ver y, cuando no sepas qué
                    elegir, nosotros lo haremos por ti.
                </p>
            </figure>
            <section className="flex flex-col gap-4">
                <Button text="Iniciar Sesión" color="secondary" onClick={()=> navigate("/inicio-sesion")}/>
                <Button text="Regístrate" color="accent" onClick={()=> navigate("/registro")}/>
                <p>Si no quieres registrarte, accede a la versión abierta <NavLink to={"/que-vemos"} className={"text-accent"}>aquí.</NavLink></p>
            </section>
        </section>
    );
};

export default FrontPage;
