import NavIcon from "./NavIcon";

const Header = () => {
    const navLinks = [
        ['/buscador', './assets/search_icon.svg', 'Buscador'],
        ['/watchlist', './assets/watchlist_icon.svg','Watchlist'],
        ['/que-vemos', './assets/popcorn_icon.svg', '¿Qué Vemos?'],
        ['/perfiles', './assets/profiles_icon.svg', 'Perfiles'],
    ];

    
  return (
    <header className="pt-5 mb-6 lg:flex lg:justify-between">
        <img src="./MovieNight-logo.svg" alt="MovieNight" className="mx-auto lg:mx-0"/>
        <nav>
            <ul className="flex justify-center gap-7 mt-4">
                {navLinks.map(link => (
                <li key={link[0]}>
                <NavIcon link={link[0]} icon={link[1]} text={link[2]} />
                </li>
            ))}
            </ul>
        </nav>
    </header>
  )
}

export default Header
