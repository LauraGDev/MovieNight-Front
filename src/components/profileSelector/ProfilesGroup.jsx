import { useEffect, useState } from "react";
import { requestHandler } from "../../services/requestHandler";
import { URL_API_GET_PROFILES } from "../../config/urls";
import AddProfileIcon from "./AddProfileIcon";
import ProfileIcon from "./ProfileIcon";
import { useCookie } from "../../customHooks/useCookie";

const ProfilesGroup = ( { onSelectProfile }) => {
    const token = useCookie("authToken");
    const user = useCookie("user");
    const [ profiles, setProfiles ] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const url = `${URL_API_GET_PROFILES}/${user}`
            try {
                const response = await requestHandler(url, "GET", null, token);
                setProfiles(response)
            } catch (error){
                console.log(error.message);
            }
        };
        if (user) {
            fetchUsers();
        }
    }, [user]);

    

    const handleClick = (user) => {
        onSelectProfile(user);
    }

    return (
        <section className="mx-auto px-6 mb-20">
            <h1 className="text-4xl font-syne font-extrabold leading-tight text-primary mb-8">
                Elige tu perfil
            </h1>
            <section className="text-center text-xl leading-6 grid grid-cols-2 gap-16 justify-stretch">
                {
                    profiles.map(profile => 
                        <ProfileIcon key={profile.id} name={profile.name} id={profile.id} photo={profile.profile_photo} onClick={handleClick} />
                    )
                }
                <AddProfileIcon />
            </section>
        </section>
    );
};

export default ProfilesGroup;
