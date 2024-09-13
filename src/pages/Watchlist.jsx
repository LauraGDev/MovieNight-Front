import { useContext, useEffect, useState } from "react";
import CardContainer from "../components/cards/CardContainer";
import ProfileSelector from "../components/watchlist/ProfileSelector";
import { ProfileContext } from "../context/profile/ProfileContext";
import { URL_GET_PROFILE_WATCHLIST } from "../config/urls";
import { requestHandler } from "../services/requestHandler";
import { useCookie } from "../customHooks/useCookie";

const Watchlist = () => {
    const token = useCookie("authToken");
    const { profile, setProfile } = useContext(ProfileContext);
    const [results, setResults] = useState([]);

    const handleProfileSelection = (id) => {
        setProfile(id);
    };

    useEffect(() => {
        if (profile) {
            const fetchWatchlist = async () => {
                try {
                    const response = await requestHandler(
                        URL_GET_PROFILE_WATCHLIST(profile),
                        "GET",
                        null,
                        token
                    );
                    setResults(response);
                } catch (error) {
                    console.log(error.message);
                    setResults([]);
                }
            };

            fetchWatchlist();
        } else {
            setResults([]);
        }
    }, [profile, token]);

    return (
        <section className="mt-5 mb-24">
            <h1 className="text-4xl font-syne font-extrabold leading-tight text-primary mb-5">
                Watchlist
            </h1>
            <ProfileSelector
                onSelectProfile={handleProfileSelection}
                selectedProfileId={profile}
            />
            {profile && (
                <>
                    {results.length > 0 ? (
                        <CardContainer data={results} />
                    ) : (
                        <p>El perfil aún no tiene contenido en su Watchlist.</p>
                    )}
                </>
            )}
            {!profile &&
            <p>Selecciona un perfil para ver el contenido guardado.</p>
            }
        </section>
    );
};

export default Watchlist;
