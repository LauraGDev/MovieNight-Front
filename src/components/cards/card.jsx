import Like from "../buttons/Like";

const Card = ({ title, photo, liked=false}) => {
    return (
        <article className="relative">
            <img
                src={photo}
                alt={`Portada de ${title}`}
                className="rounded-md"
            />
            <p>{title}</p>
            <Like liked={liked} />
        </article>
    );
};

export default Card;
