import { useEffect } from 'react';
import {Container} from '../styled.components'

const Header = () => {

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
        <h1>Books Header</h1>
        </Container>
        </>
    );
    };

export default Header;