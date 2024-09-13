import { useContext, useState, useEffect } from "react";
import { ProfileContext } from "../context/profile/ProfileContext";
import { URL_SEARCH_BY_TITLE } from "../config/urls";
import ProfilesGroup from "../components/profileSelector/ProfilesGroup";
import SearchBar from "../components/search/SearchBar";
import PopularContainer from "../components/search/PopularContainer";
import ResultsContainer from "../components/search/ResultsContainer";
import Pagination from "../components/search/Pagination";
import useAPI from "../services/useAPI";
import Button from "../components/buttons/Button";

const Search = () => {
    const { profile, setProfile } = useContext(ProfileContext);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [inputText, setInputText] = useState("");
    const [searchUrl, setSearchUrl] = useState("");
    const [searchResults, setSearchResults] = useState(null);
    const [hasSearched, setHasSearched] = useState(false);
    const { data, loading, error } = useAPI(searchUrl);

    useEffect(() => {
        setSearchUrl(`${URL_SEARCH_BY_TITLE}${inputText}&page=${page}`);
        setHasSearched(true);
        if (inputText == "") {
            setSearchUrl("");
            setHasSearched(false);
            setSearchResults([]);
        }
    }, [inputText, page]);

    useEffect(() => {
        if (data) {
            setTotalPages(data.total_pages);
            let filteredResults = Array.isArray(data?.results)
                ? data.results
                : [];
            filteredResults = filteredResults?.filter(
                (item) => item.media_type !== "person"
            );
            setSearchResults(filteredResults);
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

    const handleResetProfile = () => {
        setProfile(null);
        setInputText("");
        setSearchResults(null);
        setPage(1);
        setHasSearched(false);
    };

    return (
        <section className="mt-5 mb-24">
            {!profile && (
                <ProfilesGroup onSelectProfile={handleProfileSelection} />
            )}
            {profile && <SearchBar onSubmit={handleSearchResults} />}
            {loading && <p className="mt-10 mb-11">Cargando...</p>}
            {profile && !loading && hasSearched && (
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
            {profile && !loading && !hasSearched && <PopularContainer />}

            {profile && <Button text={'Cambiar de perfil'} color={'primary'} onClick={handleResetProfile} styles={'w-[70%] mx-auto block'}/> }
        </section>
    );
};

export default Search;
