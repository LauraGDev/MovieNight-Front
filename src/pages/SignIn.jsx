import Return from "../components/buttons/Return";
import SignInForm from "../components/forms/SignInForm";

const SignIn = () => {

    return (
        <section>
            <img src="./MovieNight-logo.svg" alt="MovieNight" className="mx-auto pt-6 mb-9" />
            <Return route="/"/>
            <SignInForm />
        </section>
    );
};

export default SignIn;
