const Like = ({ id, liked, variant = "small" }) => {
    const handleAddClick = () => {
        console.log("añadir " + id);
    };
    const handleRemoveClick = () => {
        console.log("eliminar " + id);
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
