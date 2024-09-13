import { NavLink } from "react-router-dom";

const NavIcon = ({ link, icon, text }) => {
    return (
        <NavLink to={link} className={({ isActive }) => 
            `md:flex md:justify-end md:gap-2 md:font-syne md:font-extrabold md:items-center 
            ${isActive ? 'bg-secondary' : ''}`
        }>
            <img src={icon} alt={text} className="w-[2.375rem] text-primary fill-primary"/>
            <span className="hidden md:block">{text}</span>
        </NavLink>
    );
};

export default NavIcon;
