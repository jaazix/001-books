import { ButtonF, Form,FormCon, Input, Container } from "../styled.components";
import { useState } from "react";

import axios from 'axios';


const FormLog = () => {
    interface Data {
        ok: boolean;
        msg: string;
        usrDB: {}
    }

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [data, setData] = useState({} as Data);

    const db = async(e: React.FormEvent | any):Promise<void> => {
        e.preventDefault();
        const url = import.meta.env.VITE_API + '/login';
        const formData = new FormData(e.currentTarget);
        const email = formData.get("uname") as string;
        const password = formData.get("pass") as string;
        const response = await axios.post(url, {
            email,
            password
        });
         setData(response.data);
        setIsSubmitted(true);
    }

    const logout = () => {
        setIsSubmitted(false);
    }



    const renderForm = (
        <Form onSubmit={db}>
            <FormCon >
            <label>Correo:</label>   
            <Input type="email" name="uname" placeholder="Enter Email" required></Input>
            <label>Password:</label>   
            <Input type="password" name="pass" placeholder="Enter Password" required></Input>
            <ButtonF type="submit">Login</ButtonF>
            </FormCon>
        </Form>
    )

    return (
        <>
        <center><h1> Login Form </h1></center>
        {isSubmitted ? <Container>
            <h1>{data.msg}</h1>
            <ButtonF onClick={logout}>
                Logout
            </ButtonF>
        </Container> : renderForm}
        </>
    );
}

export default FormLog;