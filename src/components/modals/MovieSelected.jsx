import { PHOTO_BASE_URL } from "../../config/urls";

const MovieSelected = ({ poster, title, onClick }) => {
    poster = poster ? `${PHOTO_BASE_URL}${poster}` : "./assets/no_photo.svg";

    return (
        <figure className="fixed inset-0 bg-[#17142cd9] z-1000 flex items-center justify-center" onClick={onClick}>
            <div className="w-full max-w-md relative inline m-auto rounded-md p-6 mx-3 bg-bgPurple">
                <h2 className="font-syne font-extrabold text-primary text-[2.25rem] mb-4">
                    Hoy vemos
                </h2>
                <img
                    src={poster}
                    alt={`Portada de ${title}`}
                    className="w-full h-auto object-cover mb-2"
                />
                <p className="text-2xl">{title}</p>
            </div>
        </figure>
    );
};

export default MovieSelected;
