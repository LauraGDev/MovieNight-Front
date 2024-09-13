import RandomForm from "../components/forms/RandomForm";
import { useCookie } from "../customHooks/useCookie";
import { requestHandler } from "../services/requestHandler";
import { URL_GET_PROFILE_WATCHLIST } from "../config/urls";
import MovieSelected from "../components/modals/MovieSelected";
import { useState } from "react";

const RandomSelection = () => {
    const token = useCookie("authToken");
    const [selected, setSelected] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const fetchWatchlists = async (url) => {
        try {
            const response = await requestHandler(
                url,
                "GET",
                null,
                token
            );
            return response;
        } catch (error) {
            console.log(error.message);
            return [];
        }
    }

    const randomize = async (profileIds) => {
        const urls = profileIds.map((id) => URL_GET_PROFILE_WATCHLIST(id));
        const response = await Promise.all(
            urls.map((url) => fetchWatchlists(url))
        );
        console.log(response)
        const filteredContent = filterUnreleased(response.flat());
        const selected = selectOne(filteredContent)
    
        setSelected(selected);
        setShowModal(true);
    }

    const filterUnreleased = (content) => {
        const today = new Date();
        return content.flat().filter(con => {
            const releaseDate = new Date(con.release_date);
            return releaseDate <= today;
        });
    }

    const selectOne = (content) => {
        const totalContent = content.length;
        const randomNum = Math.floor(Math.random() * totalContent);
        return content[randomNum]
    }

    const closeModal = () => {
        setSelected(null);
        setShowModal(false);
    }

    return (
        <section className="mt-5 mb-24">
            <h1 className="text-4xl font-syne font-extrabold leading-tight text-primary mb-5">
                ¿Qué vemos?
            </h1>
            <RandomForm onSubmit={randomize} />
            {showModal &&
            <MovieSelected
            poster={selected.poster_path} 
            title={selected.title}
            onClick={closeModal}/>
            }
        </section>
    );
};

export default RandomSelection;
