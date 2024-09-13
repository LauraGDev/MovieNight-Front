
const Footer = () => {
    return (
        <footer className="bg-secondary relative px-[1.625rem] py-5">
            <img src="./Footer-logo.svg" alt="MovieNight Logo" />
            <div className="text-[0.75rem] flex gap-2 py-5 border-b border-primary">
                <p to="/como-funciona" className="hover:text-accent cursor-pointer">¿Cómo funciona?</p>
                <p to="/privacidad" className="hover:text-accent cursor-pointer">Política de Privacidad</p>
                <p to="/cookies" className="hover:text-accent cursor-pointer">Política de Cookies</p>
            </div>
            <p className="text-[0.688rem] text-primary mt-5">© 2024 Creado por 
                <a href="https://www.linkedin.com/in/laura-gil-cara/" className="hover:text-accent"  target="_blank" rel="noreferrer noopener"> LauraGDev</a>. Todos los Derechos Reservados.</p>
        </footer>
    );
};

export default Footer;
