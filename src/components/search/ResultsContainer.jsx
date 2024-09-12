import Card from "../cards/card";

const ResultsContainer = ({ results }) => {
    
    return (
        <section className="mt-10 mb-11">
            <h2 className="text-primary mb-4">Resultados</h2>
            {results.length > 0 ? (
                <div className="grid grid-cols-2 gap-9">
                    {results.map((result) => (
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
