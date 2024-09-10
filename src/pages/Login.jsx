import { useEffect, useState } from "react";
import Return from "../components/buttons/Return";
import LogInForm from "../components/forms/LogInForm";
import Alert from "../components/modals/Alert"
import { useAuth } from "../customHooks/useAuth";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false)
    const [alertMessage, setAlertMessage] = useState("");
    const [alertAcceptFunction, setAlertAcceptFunction] = useState(null);
    const [alertCancelFunction, setAlertCancelFunction] = useState(null);
    const [showCancel, setShowCancel] = useState(false);

    useEffect(() => {
        console.log(isAuthenticated)
        if (isAuthenticated) {
            navigate("/buscador");
        }
    }, [navigate, isAuthenticated]);

    const triggerAlert = (message, onAccept, onCancel = null, showCancelOption = false) => {
        setAlertMessage(message);
        setAlertAcceptFunction(() => () => {
            if (onAccept) onAccept();
            setShowModal(false);
        });
        setAlertCancelFunction(() => () => {
            if (onCancel) onCancel();
            setShowModal(false);
        });
        setShowCancel(showCancelOption);
        setShowModal(true);
    };

    return (
        <section>
            <img
                src="./MovieNight-logo.svg"
                alt="MovieNight"
                className="mx-auto pt-6 mb-9"
            />
            <Return route="/" />
            <LogInForm triggerAlert={triggerAlert}/>
            {showModal&&
            <Alert message={alertMessage} 
            onAccept={alertAcceptFunction} 
            onCancel={alertCancelFunction} 
            showCancel={showCancel} />
            }
            
        </section>
    );
};

export default Login;
