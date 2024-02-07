import './register.css';

function Register() {
    const handleSubmit = () => {
        return true;
    }

    return (
        <form onSubmit={handleSubmit}>
            <div id="name" className="d-flex text-center center">
                <input type="text" name="name" id="nome" placeholder="Nome" />
                <input type="text" name="lastname" id="lastname" placeholder="Sobrenome" />
            </div>
            <div id="addres" className="d-flex text-center center">
                <input type="text" name="street" placeholder="Rua" />
                <input type="text" name="number" placeholder="Número" />
                <input type="text" name="complement" placeholder="Complemento" />
                <input type="text" name="neighborhood" placeholder="Bairro" />
                <input type="text" name="city" placeholder="Cidade" />
                <input type="text" name="state" placeholder="Estado" />
                <input type="text" name="zipCode" placeholder="CEP" />
            </div>
            <div id="contact" className="d-flex text-center center">
                <input type="tel" name="telephone" id="telephone" placeholder="Número de telefone" />
            </div>
            <div id="infos-user">
                <input type="email" name="email" placeholder="E-mail" />
                <input type="password" name="password" id="password" placeholder="Digite sua senha" />
                <input type="password" name="password-confirmation" id="password-confirmation" placeholder="Confirme sua senha" />
            </div>
        </form>
    );
}

export default Register;