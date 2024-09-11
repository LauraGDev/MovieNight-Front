import ProfilesGroup from "../components/profileSelector/ProfilesGroup";
import SearchBar from "../components/search/SearchBar";
import { useContext, useState } from "react";
import { ProfileContext } from "../context/profile/ProfileContext";
import PopularContainer from "../components/search/PopularContainer";

const Search = () => {
    const { profile, setProfile } = useContext(ProfileContext);
    const [searchResults, setSearchResults] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleProfileSelection = (id) => {
        const profileData = id;
        setProfile(profileData);
    };

    const handleSearchResults = ({ data, loading }) => {
        setLoading(loading);
        setSearchResults(data);
    };

    return (
        <section className="mt-6">
            {!profile && <ProfilesGroup onSelectProfile={handleProfileSelection} />}
            {profile && <SearchBar onSubmit={handleSearchResults}/>}
            {loading && <p>Cargando...</p>}
            {searchResults && !loading && (
                <div>
                    <h2>Resultados de la búsqueda:</h2>
                    <pre>{JSON.stringify(searchResults, null, 2)}</pre>
                </div>
            )}
            {profile && <PopularContainer/>}
        </section>
    );
};

export default Search;
