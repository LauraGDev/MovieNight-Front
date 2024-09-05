import { useNavigate } from "react-router-dom";

const Return = ({ route }) => {
    const navigate = useNavigate();

    return (
        <button 
        className="flex items-center gap-1 font-syne font-extrabold text-accent mb-2"
        onClick={() => navigate(route)}>
            <img src="./assets/arrow-icon.svg" alt="Flecha atrás" width={26}/>
            Volver
        </button>
    );
};

export default Return;
