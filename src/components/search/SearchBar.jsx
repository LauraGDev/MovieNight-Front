const SearchBar = () => {
    return (
        <div className="relative">
            <input
                id="search"
                name="search"
                aria-label="Buscar"
                type="text"
                className="w-full h-[3.188rem] pl-16 rounded-sm border border-primary text-secondary placeholder-secondary"
                placeholder="¿Qué quieres ver?"
            />
            <img
                src="/assets/watchlist_icon_2.svg"
                alt="icono claqueta"
                className="absolute top-[20%] left-[4%] w-[2rem] ml-1 text-secondary"
            />

            
        </div>
    );
};

export default SearchBar;
