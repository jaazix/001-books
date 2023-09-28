import { ButtonC, ButtonF, Form,FormCon, Input } from "../styled.components";
import { useState } from "react";

const FormReg = () => {

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [password2, setPassword2] = useState<string>('');

    function validateForm() {
        if (password === password2) {
            alert("Registro exitoso");
            console.log("Registro exitoso");
        } else {
            alert("Las contraseñas no coinciden");
        }

    }
    

    return (
        <>
        <center><h1> Register Form </h1></center>
        <Form>
            <FormCon>
            <label>Nombre:</label>   
            <Input type="text" placeholder="Ingresa tu nombre" onChange={(e) => setName(e.target.value)} required></Input>
            <label>Email:</label>   
            <Input type="email" placeholder="Ingresa tu correo" onChange={(e) => setEmail(e.target.value)} required></Input>
            <label>Contraseña:</label>   
            <Input type="password" placeholder="Ingresar Contraseña" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Debe tener una longitud de almenos 8 caracteres, contener al menos una numero,una mayuscula, una minuscula y un caracter especial ($#@&*_+-)" onChange={(e) => setPassword(e.target.value)} required></Input>
            <label>Confirmar Contraseña:</label>   
            <Input type="password" placeholder="Ingresar Contraseña" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Debe tener una longitud de almenos 8 caracteres, contener al menos una numero,una mayuscula, una minuscula y un caracter especial ($#@&*_+-)" onChange={(e) => setPassword2(e.target.value)} required></Input>
            <ButtonF onClick={validateForm}>Register</ButtonF>   
            <ButtonC> Cancel</ButtonC>
            </FormCon>
        </Form>
        </>
    );
}

export default FormReg;