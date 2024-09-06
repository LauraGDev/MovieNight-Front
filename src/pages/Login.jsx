import Return from "../components/buttons/Return";
import LogInForm from "../components/forms/LogInForm";

const Login = () => {
    return (
        <section>
            <img
                src="./MovieNight-logo.svg"
                alt="MovieNight"
                className="mx-auto mt-6 mb-9"
            />
            <Return route="/" />
            <LogInForm />
        </section>
    );
};

export default Login;
