import { useState } from "react";
import AddProfileForm from "../components/forms/addProfileForm";
import Alert from "../components/modals/Alert";
import Return from "../components/buttons/Return";

const AddProfile = () => {
    const [showModal, setShowModal] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const [alertAcceptFunction, setAlertAcceptFunction] = useState(null);

    const triggerAlert = (message, onAccept) => {
        setAlertMessage(message);
        setAlertAcceptFunction(() => () => {
            if (onAccept) onAccept();
            setShowModal(false);
        });
        setShowModal(true);
    };

    return (
        <section className="mb-28">
            <Return route="/buscador"/>
            <AddProfileForm triggerAlert={triggerAlert} />
            {showModal && (
                <Alert
                    message={alertMessage}
                    onAccept={alertAcceptFunction}
                />
            )}
        </section>
    );
};

export default AddProfile;
