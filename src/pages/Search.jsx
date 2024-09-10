import { useState } from "react";
import ProfilesGroup from "../components/profileSelector/ProfilesGroup";

const Search = () => {
    const [profileSelected, setProfileSelected] = useState(false)
    const handleProfileSelection = (id) => {
        console.log(id);
        setProfileSelected(true);
    };
    
    return (
        <section className="mt-4">
            {!profileSelected && <ProfilesGroup onSelectProfile={handleProfileSelection} />}
            {profileSelected && 
            <}
        </section>
    );
};

export default Search;
