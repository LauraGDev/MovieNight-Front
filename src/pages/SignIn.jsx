import { useState } from "react";
import Return from "../components/buttons/Return";
import SignInForm from "../components/forms/SignInForm";
import Alert from "../components/modals/Alert"

const SignIn = () => {
    const [showModal, setShowModal] = useState(false)
    const [alertMessage, setAlertMessage] = useState("");
    const [alertAcceptFunction, setAlertAcceptFunction] = useState(null);
    const [alertCancelFunction, setAlertCancelFunction] = useState(null);
    const [showCancel, setShowCancel] = useState(false);

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
