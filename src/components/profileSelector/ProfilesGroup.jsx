import { useEffect, useState } from "react";
import { requestHandler } from "../../services/requestHandler";
import { URL_API_GET_PROFILES } from "../../config/urls";
import AddProfileIcon from "./AddProfileIcon";
import ProfileIcon from "./ProfileIcon";
import { useCookie } from "../../customHooks/useCookie";
import { useNavigate } from "react-router-dom";

const ProfilesGroup = ({ onSelectProfile }) => {
    const navigate = useNavigate();
    const token = useCookie("authToken");
    const user = useCookie("user");
    const [profiles, setProfiles] = useState([]);
    const [loading, setLoading] = useState(true);

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
            setLoading(true);
            setTimeout(() => {
                fetchUsers();
                setLoading(false);
            }, 2000);
        }
    }, [user, token]);

    const handleClick = (user) => {
        onSelectProfile(user);
    };

    return (
        <section className="mx-auto px-6 mb-20">
            <h1 className="text-4xl font-syne font-extrabold leading-tight text-primary mb-8">
                Elige tu perfil
            </h1>
            {loading && <p>Buscando perfiles...</p>}
            {!loading && (
                <section className="text-center text-xl leading-6 grid grid-cols-2 gap-16 justify-stretch">
                    {profiles.map((profile) => (
                        <ProfileIcon
                            key={profile.id}
                            name={profile.name}
                            id={profile.id}
                            photo={profile.profile_photo}
                            onClick={handleClick}
                        />
                    ))}
                    <AddProfileIcon onClick={() => navigate(-1)}/>
                </section>
            )}
        </section>
    );
};

export default ProfilesGroup;
