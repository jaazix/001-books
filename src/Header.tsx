import { Link, useNavigate } from 'react-router-dom';
import { user } from './interfaces/interfaces.tsx'

const Header = () =>{
    
    const navigate = useNavigate();

    // read localstorage
    let user:user = JSON.parse(localStorage.getItem('user') || '{}');
    let admin = false;
    if (user.role === 'ADMIN') {
        admin = true;
    }

  const nav =   <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary ">
                    <div className="container-fluid" id="navbarNav">
                        <Link className="navbar-brand mx-2" to="/">Bibliofilia</Link>
                        <ul className="nav nav-pills">
                            <li className="nav-item active">
                                <Link className="nav-link" to="">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="chat">Chat</Link>
                            </li>
                            {admin ? 
                            <li className="nav-item">
                                <a className="nav-link"onClick={()=>navigate('users')}>Users</a>
                            </li>: null}
                        </ul>
                    { !localStorage.getItem('user') ? <Link className="btn btn-outline-success mx-2" to="login">Sign In</Link>: 
                    <div>
                        <img src='./user.svg' className="rounded-circle" />
                        <a> {user.nombre} </a>
                    </div>
                    }
                    </div>
                </nav>

    return (
        <>
        {nav}
        </>
    )
}

export default Header