import CardContainer from "../cards/CardContainer";

const ResultsContainer = ({ results }) => {
    return (
        <section className="mt-10 mb-11">
            <h2 className="text-primary mb-4">Resultados</h2>
            {results.length > 0 ? (
                <CardContainer data={results} />
            ) : (
                <p>No se han encontrado resultados con ese título.</p>
            )}
        </section>
    );
};

export default ResultsContainer;
