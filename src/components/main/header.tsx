import { useEffect } from 'react';
import {Container,Button} from '../styled.components'
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate();
    const goToLog = () => {
        navigate('/login');
    }

    const getdata = async():Promise<void> => {
        const url = import.meta.env.VITE_API;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.msg);
    }

    useEffect(() => {
        getdata();
    }, []);

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