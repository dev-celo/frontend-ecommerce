import Header from "../../components/Header/Header";
import Login from "../../components/Login/Login";

function PageLogin() {
    return (
        <section id="login-page" data-testid="login-page">
            <Header />
            <Login />
        </section>
    )
}

export default PageLogin;