import { useNavigate } from 'react-router-dom';


const Content = () => {
    // invoke user data from local storage
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('user');
        navigate('/');
    }

    return (
        <>
        <div className="container">
            {localStorage.getItem('user') ? <div className="card">
            <div className="card-body">
                        <h3 className="card-title">{user.nombre}</h3>
                        <h4 className="card-subtitle mb-2 text-muted"><strong>ROL DE USUARIOS:{user.role}</strong></h4>
                        <p className="card-text">{JSON.stringify(user)}</p>
                        <button className="btn btn-danger" onClick={logout }>Log out</button>
                </div>
            </div>
                : <button className="btn btn-danger" onClick={()=>navigate('/login') }>Login</button>}
        </div>
        </>
    )
    }

export default Content;