import { ProfileContext } from "./ProfileContext";
import useProfile from "../../customHooks/useProfile";


export const ProfileProvider = ( { children }) => {
    const {profile, setProfile} = useProfile();

    return (
        <ProfileContext.Provider value={{ profile, setProfile }}>
            {children}
        </ProfileContext.Provider>
    );
}
