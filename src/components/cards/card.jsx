import Like from "../buttons/Like";
import { PHOTO_BASE_URL } from "../../config/urls";

const Card = ({ id, title, photo='./assets/no_photo.svg', liked=false}) => {

    const photo_url = PHOTO_BASE_URL;
    if (photo == null){
        photo='./assets/no_photo.svg'
    } else {
        photo = `${photo_url}${photo}`
    }
    console.log(photo);
    return (
        <article className="relative">
            <img
                src={photo}
                alt={`Portada de ${title}`}
                className="rounded-md object-cover w-full"
            />
            <p className="mt-2">{title}</p>
            <Like id={id} liked={liked} />
        </article>
    );
};

export default Card;
