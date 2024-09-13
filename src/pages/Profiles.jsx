import { useNavigate } from "react-router-dom";
import { ProfileContext } from "../context/profile/ProfileContext";
import { useContext } from "react";
import Button from "../components/buttons/Button";

const Profiles = () => {
    const { setProfile } = useContext(ProfileContext);
    const navigate = useNavigate();
    const logout = () => {
        document.cookie = 'authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        document.cookie = 'user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        setProfile(null);
        navigate("/");
    }

    return (
        <section className="mt-5">
            <Button
                text="Cerrar Sesión"
                color="accent"
                styles="h-10"
                onClick={logout}
            />
        </section>
    );
};

export default Profiles;
