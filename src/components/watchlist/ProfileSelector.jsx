import { useEffect, useState } from "react";
import { useCookie } from "../../customHooks/useCookie";
import { URL_API_GET_PROFILES } from "../../config/urls";
import { requestHandler } from "../../services/requestHandler";
import ProfileIcon from "../profileSelector/ProfileIcon";

const ProfileSelector = ({ onSelectProfile, selectedProfileId  }) => {
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

    const handleClick = (user) => {
        onSelectProfile(user);
    };
    return (
        <section className="text-center text-xl leading-6 flex gap-7 flex-wrap mb-6">
            {profiles.map((profile) => (
                <ProfileIcon
                    key={profile.id}
                    name={profile.name}
                    id={profile.id}
                    photo={profile.profile_photo}
                    onClick={handleClick}
                    horizontal={true}
                    isSelected={profile.id === selectedProfileId }
                />
            ))}
        </section>
    );
};

export default ProfileSelector;
