import { useEffect } from 'react';
import {Container,Button} from '../styled.components'
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

const Header = () => {

    const navigate = useNavigate();
    const goToLog = () => {
        navigate('/login');
    }

    const axiosdata = async():Promise<void> => {
        const url = import.meta.env.VITE_API;
        const response = await axios.get(url);
        console.log(response.data.msg);
    }

    useEffect(() => {
        axiosdata();
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