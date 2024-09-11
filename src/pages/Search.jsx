import { useContext, useState, useEffect } from "react";
import { ProfileContext } from "../context/profile/ProfileContext";
import { URL_SEARCH_BY_TITLE } from "../config/urls";
import ProfilesGroup from "../components/profileSelector/ProfilesGroup";
import SearchBar from "../components/search/SearchBar";
import PopularContainer from "../components/search/PopularContainer";
import ResultsContainer from "../components/search/ResultsContainer";
import Pagination from "../components/search/Pagination";
import useAPI from "../services/useAPI";

const Search = () => {
    const { profile, setProfile } = useContext(ProfileContext);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [inputText, setInputText] = useState("");
    const [searchUrl, setSearchUrl] = useState("");
    const [searchResults, setSearchResults] = useState(null);
    const { data, loading, error } = useAPI(searchUrl);

    useEffect(() => {
        setSearchUrl(`${URL_SEARCH_BY_TITLE}${inputText}&page=${page}`);
    }, [inputText, page]);

    useEffect(() => {
        if (data) {
            setSearchResults(data);
            setTotalPages(data.total_pages);
        }
    }, [data]);

    useEffect(() => {
        if (error) {
            console.error("Error al buscar resultados:", error);
        }
    }, [error]);

    const handleProfileSelection = (id) => {
        setProfile(id);
    };

    const handleSearchResults = (query) => {
        setInputText(query);
        setPage(1);
    };

    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    return (
        <section className="mt-6">
            {!profile && (
                <ProfilesGroup onSelectProfile={handleProfileSelection} />
            )}
            {profile && <SearchBar onSubmit={handleSearchResults} />}
            {loading && <p>Cargando...</p>}
            {profile && !loading && searchResults.results.length > 0 && (
                <>
                    <ResultsContainer results={searchResults} />
                    {totalPages > 1 && (
                        <Pagination
                            page={page}
                            onClick={handlePageChange}
                            totalPages={totalPages}
                        />
                    )}
                </>
            )}
            {profile && searchResults.results.length == 0 && (
                <PopularContainer />
            )}
        </section>
    );
};

export default Search;
