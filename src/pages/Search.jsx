import ProfilesGroup from "../components/profileSelector/ProfilesGroup";
import SearchBar from "../components/search/SearchBar";
import { useContext } from "react";
import { ProfileContext } from "../context/profile/ProfileContext";

const Search = () => {
    const { profile, setProfile } = useContext(ProfileContext);

    console.log(profile)

    const handleProfileSelection = (id) => {
        const profileData = id;
        setProfile(profileData);
    };

    return (
        <section className="mt-4">
            {!profile && <ProfilesGroup onSelectProfile={handleProfileSelection} />}
            {profile && 
            <SearchBar/>}
            {!profile && (
                <ProfilesGroup onSelectProfile={handleProfileSelection} />
            )}
            {/* {profileSelected && 
            <} */}
        </section>
    );
};

export default Search;
