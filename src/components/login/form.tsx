import { ButtonC, ButtonF, Form,FormCon, Input, Container } from "../styled.components";
import { useState } from "react";

import axios from 'axios';

const FormLog = () => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const login = async():Promise<void> => {
        const url = "http://localhost:3000/login";
        const response = await axios.post(url, { 
            email: email,
            password: password 
        });
        await console.log(response.data.msg);
        alert(response.data.msg);
    }



    return (
        <>
        <center><h1> Login Form </h1></center>
        <Form>
            <FormCon>
            <label>Correo:</label>   
            <Input type="email" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} required></Input>
            <label>Password:</label>   
            <Input type="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} required></Input>
            <ButtonF onChange={login}>Login</ButtonF>   
            <ButtonC > Cancel</ButtonC>
            </FormCon>
        </Form>
        </>
    );
}

export default FormLog;