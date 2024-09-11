import { useEffect, useState } from "react";
import Return from "../components/buttons/Return";
import SignInForm from "../components/forms/SignInForm";
import Alert from "../components/modals/Alert";
import { useAuth } from "../customHooks/useAuth";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false)
    const [alertMessage, setAlertMessage] = useState("");
    const [alertAcceptFunction, setAlertAcceptFunction] = useState(null);
    const [alertCancelFunction, setAlertCancelFunction] = useState(null);
    const [showCancel, setShowCancel] = useState(false);

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/perfiles");
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
        <section className="mb-28">
            <img src="./MovieNight-logo.svg" 
            alt="MovieNight" 
            className="mx-auto pt-6 mb-9" />
            <Return route="/"/>
            <SignInForm triggerAlert={triggerAlert}/>
            {showModal&&
            <Alert message={alertMessage} 
            onAccept={alertAcceptFunction} 
            onCancel={alertCancelFunction} 
            showCancel={showCancel} />
            }
        </section>
    );
};

export default SignIn;
