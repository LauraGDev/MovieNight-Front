import Return from "../components/buttons/Return";
import SignInForm from "../components/forms/SignInForm";

const SignIn = () => {
    const handleSubmit = () => {
        alert("Usuario Registrado");
    };
    return (
        <div>
            <Return route="/"/>
            <SignInForm onSubmit={handleSubmit} />
        </div>
    );
};

export default SignIn;
