import Like from "../buttons/Like";
import { URL_MOVIE_DETAIL, URL_TV_DETAIL, PHOTO_BASE_URL } from "../../config/urls";
import { useEffect, useState } from "react";
import useAPI from "../../services/useAPI";

const Card = ({ id, title, photo='./assets/no_photo.svg', liked=false, type }) => {
    const [url, setUrl] = useState(null);
    const { data } = useAPI(url);

    useEffect(() => {
        if (id && type) {
            if (type.toLowerCase() === "tv") {
                setUrl(URL_TV_DETAIL(id));
            } else if (type.toLowerCase() === "movie") {
                setUrl(URL_MOVIE_DETAIL(id));
            }
        }
    }, [id, type]);

    photo = photo ? `${PHOTO_BASE_URL}${photo}` : './assets/no_photo.svg';

    
    return (
        <article className="relative">
            <img
                src={photo}
                alt={`Portada de ${title}`}
                className="rounded-md object-cover w-full"
            />
            <p className="mt-2">{title}</p>
            <Like liked={liked} type={type} data={data} />
        </article>
    );
};

export default Card;
