import {Container,Button} from '../styled.components'
import { useNavigate } from 'react-router-dom';

import FormLog from './form'

const Login = ():JSX.Element => {

    const navigate = useNavigate();
    const goToReg = () => {
        navigate('/register');
    }
    const goToMain = () => {
        navigate('/');
    }
    return (
        <>
        <Container height={25}>
            <h1>LOGIN</h1>
        <Button onClick={goToReg}>Register</Button>
        <Button onClick={goToMain}>Main</Button>
        </Container>
        <FormLog />
        </>
    );
}

export default Login;