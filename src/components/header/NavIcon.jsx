import { NavLink } from "react-router-dom";

const NavIcon = ({ link, icon, text }) => {
    return (
        <NavLink to={link} className={'md:flex md:justify-end md:gap-2 md:font-syne md:font-extrabold md:items-center'}>
            <img src={icon} alt={text} className="w-[2.375rem]"/>
            <span className="hidden md:block">{text}</span>
        </NavLink>
    );
};

export default NavIcon;
