

const Like = ({ liked }) => {
    const handleAddClick = () => {
        alert("Añadir");
    };

    const handleRemoveClick = () => {
        alert("Eliminar");
    };

    return (
        <figure
            className="cursor-pointer absolute top-[0.313rem] right-[0.313rem]"
            onClick={liked ? handleRemoveClick : handleAddClick}
        >
            <img
                src={liked ? "./assets/liked_icon.svg": "./assets/like_icon.svg"}
                alt={liked ? "Eliminar de watchlist" : "Añadir a watchlist"}

            />
        </figure>
    );
};

export default Like;
