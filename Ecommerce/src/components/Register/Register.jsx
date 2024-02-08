import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import './register.css';
import InputMask from 'react-input-mask';


function Register() {
    // Validação de formulário
    const schema = yup
        .object({
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
            password: yup.string().required("As senhas devem ser iguais e obrigatórias"),
            passwordConfirmation: yup.string().required("As senhas devem ser iguais e obrigatórias")
        })
        .required()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmit = (data) => data;

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div id="name" className="d-flex text-center center">
                <input type="text" name="name" id="nome" placeholder="Nome" {...register("name")} />
                <p>{errors.name?.message}</p>
                <input type="text" name="lastName" id="lastName" placeholder="Sobrenome" {...register("lastName")} />
                <p>{errors.lastName?.message}</p>
            </div>
            <div id="addres" className="d-flex text-center center">
                <input type="text" name="street" placeholder="Rua" {...register("street")} />
                <p>{errors.street?.message}</p>
                <input type="text" name="number" placeholder="Número" {...register("number")} />
                <p>{errors.number?.message}</p>
                <input type="text" name="complement" placeholder="Complemento" {...register("complement")} />
                <p>{errors.complement?.message}</p>
                <input type="text" name="neighborhood" placeholder="Bairro" {...register("neighborhood")} />
                <p>{errors.neighborhood?.message}</p>
                <input type="text" name="city" placeholder="Cidade" {...register("city")} />
                <p>{errors.city?.message}</p>
                <input type="text" name="state" placeholder="Estado" {...register("state")} />
                <p>{errors.state?.message}</p>
                <input type="text" name="zipCode" placeholder="CEP" {...register("zipCode")} />
                <p>{errors.zipCode?.message}</p>
            </div>
            <div id="contact" className="d-flex text-center center">
                <InputMask
                    mask="(99) 99999-9999"
                    maskChar={null}
                    type="tel"
                    name="telephone"
                    id="telephone"
                    placeholder="(99) 99999-9999"
                    {...register("telephone")} />
                <p>{errors.telephone?.message}</p>
            </div>
            <div id="infos-user">
                <input type="email" name="email" placeholder="E-mail" {...register("number")} />
                <p>{errors.email?.message}</p>
                <input type="password" name="password" id="password" placeholder="Digite sua senha" {...register("password")} />
                <p>{errors.password?.message}</p>
                <input type="password" name="passwordConfirmation" id="password-confirmation" placeholder="Confirme sua senha" {...register("passwordConfirmation")} />
                <p>{errors.passwordConfirmation?.message}</p>
            </div>
            <button type="submit">Send</button>
        </form>
    );
}

export default Register;
