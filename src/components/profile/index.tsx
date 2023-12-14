import { auto } from "@popperjs/core";
import "./profile.scss"
import { useNavigate } from 'react-router-dom';

const Profile = ():JSX.Element => {

    const navigate = useNavigate();
    const usuario = JSON.parse(localStorage.getItem('user') || '{}');

    const logout = () => {
        localStorage.removeItem('user');
        navigate('/');
    }

    const addBook = () => {
        navigate('/addBook');
    }

    return (
    <>
    <div className="student-profile py-4">
    <div className="container">
        <div className="row">
        <div className="col-lg-4">
            <div className="card shadow-sm">
            <div className="card-header bg-transparent text-center">
                <img className="profile_img" src={usuario.img} alt="student dp"/>
                <h3>{usuario.name}</h3>
            </div>
            <div className="card-body">
                <p className="mb-0"><strong className="pr-1">Email:</strong>{usuario.email}</p>
                {!usuario.verify? <p className="mb-0"><span className="text-danger">No verificado</span></p>:null}
                <hr />
                <button className="btn btn-danger" onClick={logout}>Log out</button> 
            </div>
            </div>
        </div>
        <div className="col-lg-8">
            <div className="card shadow-sm">
            <div className="card-header bg-transparent border-0">
                <h3 className="mb-0"><i className="far fa-clone pr-1">Personal info</i></h3>
            </div>
            <div className="card-body pt-0">
                <table className="table table-bordered">
                <tr>
                    <th style={{width:"30%"}}>Bio:</th>
                    <td width="2%">:</td>
                    <td>{usuario.bio}</td>
                </tr>
                </table>
            </div>
            </div>
            <div style={{height: 26}}></div>
            <div className="card shadow-sm">
                <div className="card-header bg-transparent border-0">
                    <h3 className="mb-0"><i className="far fa-clone pr-1">Libros cargados</i></h3>
                </div>
            </div>
            <div style={{height: 26}}></div>
                <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                    <div className="col-lg-3" onClick={addBook}>
                        <div className="card shadow-sm" style={{height: auto}}>
                            <div className="card-header">
                                <img className="card-img-top" src="plus.png" alt="Card image cap"/>
                            </div>
                            <div className="card-body pt-0">
                                <p>Add Book</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="card shadow-sm">
                        <img className="card-img-top" src="https://m.media-amazon.com/images/I/81MamVMxYnL._AC_UF894,1000_QL80_.jpg" alt="Card image cap"/>
                            <div className="card-body pt-0">
                                <p><strong>titulo:</strong>86</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        </div>
    </div>
    </div>
    </>
    )}

export default Profile