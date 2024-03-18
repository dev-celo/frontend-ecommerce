import Header from "../../components/Header/Header";
import Register from "../../components/Register/Register";
import './pageRegister.css';

function PageRegister() {
    return (
        <section id="register-page" data-testid="register-page">
            <div className="container-register">
                <div className="header">
                    <Header />
                </div>
                <Register />
            </div>
        </section>
    )
}

export default PageRegister;