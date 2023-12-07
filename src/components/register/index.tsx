import { useNavigate } from 'react-router-dom';
import FormReg from './form'
import { useEffect } from 'react';

const Register = ():JSX.Element => {

    const navigate = useNavigate();
    
    useEffect(() => {
        if (localStorage.getItem('user')) {
                navigate('/login')
            }
    })
    

    return (
        <>
        <div className="row">
            <div className="col-md-4 mb-4 mx-auto">
                <FormReg />
            </div>
        </div>
        </>
    );
}

export default Register;