import Card from "../cards/card";

const ResultsContainer = ({ results }) => {
    const resultsArray = Array.isArray(results?.results) ? results.results : [];
    return (
        <section className="mt-10 mb-11">
            <h2 className="text-primary mb-4">Resultados</h2>
            {resultsArray.length > 0 ? (
                <div className="grid grid-cols-2 gap-9">
                    {resultsArray.map((result) => (
                        <Card
                            key={result.id}
                            id={result.id}
                            title={result.name || result.title}
                            photo={result.poster_path}
                        />
                    ))}
                </div>
            ) : (
                <p>No se han encontrado resultados con ese título.</p>
            )}
        </section>
    );
};

export default ResultsContainer;
