import {Container,Button} from '../styled.components'
import { useNavigate } from 'react-router-dom';

import FormReg from './form'

const Register = ():JSX.Element => {

    const navigate = useNavigate();
    const goToLog = () => {
        navigate('/login');
    }

    return (
        <>
        <Container height={15}>
            <h1>REGISTER</h1>
        <Button onClick={goToLog}>Login</Button>
        </Container>
        <FormReg />
        </>
    );
}

export default Register;