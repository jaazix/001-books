import { ButtonC, ButtonF, Form,FormCon, Input } from "../styled.components";
import { useState } from "react";

import axios from 'axios';

const FormReg = () => {

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [password2, setPassword2] = useState<string>('');


    const sendData = async():Promise<void> => {
        if(password === password2){
            const url = "http://localhost:3000/usuario";
            const response = await axios.post(url, { 
                nombre: name,
                email: email,
                password: password 
            });
            console.log(response.data.msg);
            alert(response.data.msg);
        }else{
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
            <ButtonF onClick={sendData}>Register</ButtonF>   
            <ButtonC> Cancel</ButtonC>
            </FormCon>
        </Form>
        </>
    );
}

export default FormReg;