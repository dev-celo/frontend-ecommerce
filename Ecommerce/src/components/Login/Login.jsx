import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import './login.css';
import { Link } from "react-router-dom";

function Login() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const schema = yup.object({
        email: yup.string().required("E-mail é obrigatório").matches(emailRegex, "Seu email precisa ser example@email.com"),
        password: yup.string().required('Senha é obrigatória').min(8, 'Senha deve ter pelo menos 8 caracteres'),
    }).required();

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => data;

    return (
        <section className="container login">
            <div className="login-container">
                <div className="circle circle-one"></div>
                <div className="form-container">
                    <img src="https://raw.githubusercontent.com/hicodersofficial/glassmorphism-login-form/master/assets/illustration.png" alt="illustration" className="illustration" />
                    <h1 className="opacity">LOGIN</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" placeholder="USERNAME" { ...register("email") } />
                        <p>{errors.email?.message}</p>
                        <input type="password" placeholder="PASSWORD" { ...register("password") } />
                        <p>{errors.password?.message}</p>
                        <button className="opacity">SUBMIT</button>
                    </form>
                    <div className="register-forget opacity">
                        <Link to="/register">
                            <a href="">REGISTER</a>
                        </Link>
                        <a href="">FORGOT PASSWORD</a>
                    </div>
                </div>
                <div className="circle circle-two"></div>
            </div>
            <div className="theme-btn-container"></div>
        </section>
    );
}

export default Login;