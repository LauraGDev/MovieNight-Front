import Card from "./Card";

const CardContainer = ({ data, watchlist = false }) => {
    return (
        <div className="grid grid-cols-2 gap-9">
            {data.map((result) => (
                <Card
                    key={result.id}
                    id={result.id}
                    title={result.name || result.title}
                    photo={result.poster_path}
                    type={result.media_type}
                    liked={watchlist}
                />
            ))}
        </div>
    );
};

export default CardContainer;
