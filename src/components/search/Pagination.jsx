const Pagination = ({ page, onClick, totalPages }) => {
    const handlePrevious = () => {
        if (page > 1) {
            onClick(page - 1);
        }
    };

    const handleNext = () => {
        if (page < totalPages) {
            onClick(page + 1);
        }
    };

    return (
        <section className="w-full inline-flex items-center justify-center ">
            <figure onClick={() => handlePrevious()} className={page == 1 ? 'opacity-25' : ''}>
                <img src="./assets/arrow_icon.svg" alt="página anterior" />
            </figure>
            <p className="px-4 text-accent text-lg">{page}</p>
            <figure onClick={() => handleNext()} className={page == totalPages ? 'opacity-25' : ''}> 
                <img
                    src="./assets/arrow_icon.svg"
                    alt="página siguiente"
                    className="rotate-[180deg]"
                />
            </figure>
        </section>
    );
};

export default Pagination;
