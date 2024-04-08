import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import './register.css';
import InputMask from 'react-input-mask';
import { useState } from "react";
import SuccessScreen from "./SuccessScreen";


function Register() {
    const [success, setSuccess] = useState(false);

    // Validação de formulário
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const schema = yup
        .object({
            email: yup.string().required("E-mail é obrigatório").matches(emailRegex, "Seu email precisa ser example@email.com"),
            name: yup.string().required("O nome é obrigatório."),
            lastName: yup.string().required("O sobrenome é obrigatório."),
            street: yup.string().required("A rua é obrigatório."),
            number: yup.string().required("O número é obrigatório."),
            complement: yup.string().required("O complemento é obrigatório."),
            neighborhood: yup.string().required("O bairro é obrigatório."),
            city: yup.string().required("A cidade é obrigatório."),
            state: yup.string().required("O estado é obrigatório."),
            zipCode: yup.string().required("O cóigo postal é obrigatório."),
            telephone: yup.string().matches(/^\(\d{2}\)\s\d{4,5}-\d{4}$/, 'Número de telefone inválido').required('O número de telefone é obrigatório.'),
            password: yup.string().required("Confirme a senha"),
            passwordConfirmation: yup.string().required("As senhas devem ser iguais e obrigatórias").oneOf([yup.ref('password'), null], 'As senhas devem ser iguais')
        })
        .required()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmit = (data) => {
        if (data) {
            setSuccess(true);
        }
        else {
            setSuccess(false);
        }
    }
    return (
        <>
            {
                success ? (
                    <div className="container-success">
                        <SuccessScreen onContinue={'/ecommerce/login'} />
                    </div>
                ) :
                    (
                        <div className="register-container register">
                            <div className="register-login-container form-container">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div id="name" className="d-flex text-center center gap-1">
                                        <input type="text" name="name" id="nome" placeholder="Nome" {...register("name")} />
                                        <p className="error">{errors.name?.message}</p>
                                        <input type="text" name="lastName" id="lastName" placeholder="Sobrenome" {...register("lastName")} />
                                        <p className="error">{errors.lastName?.message}</p>
                                    </div >
                                    <div className="d-flex text-center center gap-2">
                                        <div id="addres" className="d-flex text-center center flex-column w-50">
                                            <input type="text" name="street" placeholder="Rua" {...register("street")} />
                                            <p className="error">{errors.street?.message}</p>
                                            <input type="text" name="number" placeholder="Número" {...register("number")} />
                                            <p className="error">{errors.number?.message}</p>
                                            <input type="text" name="complement" placeholder="Complemento" {...register("complement")} />
                                            <p className="error">{errors.complement?.message}</p>
                                        </div>
                                        <div className="d-flex text-center center flex-column w-50">
                                            <input type="text" name="neighborhood" placeholder="Bairro" {...register("neighborhood")} />
                                            <p className="error">{errors.neighborhood?.message}</p>
                                            <input type="text" name="city" placeholder="Cidade" {...register("city")} />
                                            <p className="error">{errors.city?.message}</p>
                                            <input type="text" name="state" placeholder="Estado" {...register("state")} />
                                            <p className="error">{errors.state?.message}</p>
                                        </div>
                                    </div>
                                    <div id="contact" className="d-flex text-center center gap-2">
                                        <section className="text-center center w-50">
                                            <input type="text" name="zipCode" placeholder="CEP" {...register("zipCode")} />
                                            <p className="error">{errors.zipCode?.message}</p>
                                        </section>
                                        <section className="text-center center w-50">
                                            <InputMask
                                                mask="(99) 99999-9999"
                                                maskChar={null}
                                                type="tel"
                                                name="telephone"
                                                id="telephone"
                                                placeholder="(99) 99999-9999"
                                                {...register("telephone")}
                                            />
                                            <p className="error">{errors.telephone?.message}</p>
                                        </section>
                                    </div>
                                    <div id="infos-user" className="text-center center">
                                        <input type="email" name="email" placeholder="E-mail" {...register("email")} />
                                        <p className="error">{errors.email?.message}</p>
                                    </div>
                                    <div className="d-flex text-center center gap-1">
                                        <div className="d-flex text-center center flex-column w-50">
                                            <input type="password" name="password" id="password" placeholder="Digite sua senha" {...register("password")} />
                                            <p className="error">{errors.password?.message}</p>
                                        </div>
                                        <div className="d-flex text-center center flex-column w-50">
                                            <input type="password" name="passwordConfirmation" id="password-confirmation" placeholder="Confirme sua senha" {...register("passwordConfirmation")} />
                                            <p className="error">{errors.passwordConfirmation?.message}</p>
                                        </div>
                                    </div>
                                    <button type="submit">Enviar</button>
                                </form >
                            </div >
                        </div >
                    )
            }
        </>
    );
}

export default Register;
