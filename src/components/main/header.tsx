import {Container,Button} from '../styled.components'
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate();
    const goToLog = () => {
        navigate('/login');
    }

    return (
        <>
        <Container height={50}>
            <h1>Books</h1>
        <Button onClick={goToLog}>login</Button>
        </Container>
        </>
    );
    };

export default Header;