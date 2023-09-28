import { ButtonC, ButtonF, Form,FormCon, Input } from "../styled.components";

const FormLog = () => {

    return (
        <>
        <center><h1> Login Form </h1></center>
        <Form>
            <FormCon>
            <label>Correo:</label>   
            <Input type="email" placeholder="Enter Username" required></Input>
            <label>Password:</label>   
            <Input type="password" placeholder="Enter Password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Debe tener una longitud de almenos 8 caracteres, contener al menos una numero,una mayuscula, una minuscula y un caracter especial ($#@&*_+-)" required></Input>
            <ButtonF type="submit">Login</ButtonF>   
            <ButtonC type="button"> Cancel</ButtonC>
            </FormCon>
        </Form>
        </>
    );
}

export default FormLog;