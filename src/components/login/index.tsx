import { useNavigate } from 'react-router-dom';
import FormLog from './form'

const Login = ():JSX.Element => {

    const navigate = useNavigate();
    const usuario = JSON.parse(localStorage.getItem('user') || '{}');

    const logout = () => {
        localStorage.removeItem('user');
        navigate('/');
    }


    return (
        <>
        <div className="row align-items-center">
            <div className="col-md-4 mb-4 mx-auto">
                {localStorage.getItem('user') ? <div className="card">
                <div className="card-body">
                    <h3 className="card-title">{`Bienvenido ${usuario.nombre}`}</h3>
                    <p className="card-text">{JSON.stringify(usuario)}</p>
                    <button className="btn btn-danger" onClick={logout}>Log out</button> 
                </div>
            </div>:<FormLog/>}
            </div>
        </div>
        </>
    );
}

export default Login;