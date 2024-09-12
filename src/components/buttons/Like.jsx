import { useContext } from "react";
import { ProfileContext } from "../../context/profile/ProfileContext";
import { URL_API_ADD_CONTENT_PROFILE } from "../../config/urls";
import { requestHandler } from "../../services/requestHandler";
import { useCookie } from "../../customHooks/useCookie";

const Like = ({ liked, variant = "small", type, data }) => {
    const { profile } = useContext(ProfileContext);
    const token = useCookie("authToken");
    const url = URL_API_ADD_CONTENT_PROFILE(profile);

    const handleAddClick = () => {
        console.log(url);
        let apiId, creators = "", director = "", title, originalTitle, releaseDate, length = 0, seasons = 0;

        if (type.toLowerCase() === "tv") {
            apiId = `tv-${data.id}`;
            creators = data.created_by.map(({ name }) => name).join(' - ');
            title = data.name;
            originalTitle = data.original_name;
            releaseDate = data.last_air_date;
            seasons = data.number_of_seasons;
        } else if (type.toLowerCase() === "movie") {
            apiId = `movie-${data.id}`;
            director = data.credits.crew
                .filter(({ job }) => job === "Director")
                .map(({ name }) => name)
                .join(' - ');
            title = data.title;
            originalTitle = data.original_title;
            releaseDate = data.release_date;
            length = data.runtime;
        }

        const body = {
            apiId: apiId,
            title: title,
            original_title: originalTitle,
            summary: data.overview,
            director: director,
            creator: creators,
            release_date: releaseDate,
            length: length,
            seasons: seasons,
            poster_path: data.poster_path,
            backdrop_path: data.backdrop_path,
            genres: data.genres.map(({ name }) => ({ name }))
        };

        console.log(body.genres)

        apiRequest(body);
    };

    const apiRequest = async (body) => {
        try {
            const response = await requestHandler(url, "POST", body, token);
            console.log(response.message);
        } catch (error) {
            console.log(error.message);
        }
    }

    const handleRemoveClick = () => {
        console.log("eliminar " + data);
    };

    const containerStyles =
        variant === "big"
            ? "flex items-center bg-orange-500 text-white px-5 py-3 cursor-pointer"
            : "cursor-pointer absolute top-[0.313rem] right-[0.313rem]";

    return (
        <button
            className={containerStyles}
            onClick={liked ? handleRemoveClick : handleAddClick}
        >
            <img
                src={
                    liked ? "./assets/liked_icon.svg" : "./assets/like_icon.svg"
                }
                alt={liked ? "Eliminar de watchlist" : "Añadir a watchlist"}
                className="transition-all hover:brightness-90"
            />
            {variant === "large" && (
                <span>
                    {liked ? "Eliminar de watchlist" : "Añadir a watchlist"}
                </span>
            )}
        </button>
    );
};

export default Like;
