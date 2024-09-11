const SearchBar = () => {
    return (
        <div className="relative">
            <input
                id="search"
                name="search"
                aria-label="Buscar"
                type="text"
                className="bg-whiteText w-full h-[3.188rem] pl-16 rounded-md border border-primary text-secondary placeholder-secondary"
                placeholder="¿Qué quieres ver?"
            />
            <img
                src="/assets/search_icon_2.svg"
                alt="icono claqueta"
                className="absolute top-[20%] left-[4%] w-[2rem] ml-1 text-secondary"
            />

            
        </div>
    );
};

export default SearchBar;
