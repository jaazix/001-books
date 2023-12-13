import "./profile.scss"
import { useNavigate } from 'react-router-dom';

const Profile = ():JSX.Element => {

    const navigate = useNavigate();
    const usuario = JSON.parse(localStorage.getItem('user') || '{}');

    const logout = () => {
        localStorage.removeItem('user');
        navigate('/');
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
                <h3 className="mb-0"><i className="far fa-clone pr-1"></i>General Information</h3>
            </div>
            <div className="card-body pt-0">
                <table className="table table-bordered">
                <tr>
                    <th style={{width:"30%"}}>Roll</th>
                    <td width="2%">:</td>
                    <td>125</td>
                </tr>
                <tr>
                    <th style={{width:"30%"}} >Academic Year	</th>
                    <td width="2%">:</td>
                    <td>2020</td>
                </tr>
                <tr>
                    <th style={{width:"30%"}}>Gender</th>
                    <td width="2%">:</td>
                    <td>Male</td>
                </tr>
                <tr>
                    <th style={{width:"30%"}}>Religion</th>
                    <td width="2%">:</td>
                    <td>Group</td>
                </tr>
                <tr>
                    <th style={{width:"30%"}}>blood</th>
                    <td width="2%">:</td>
                    <td>B+</td>
                </tr>
                </table>
            </div>
            </div>
            <div style={{height: 26}}></div>
            <div className="card shadow-sm">
            <div className="card-header bg-transparent border-0">
                <h3 className="mb-0"><i className="far fa-clone pr-1"></i>Other Information</h3>
            </div>
            <div className="card-body pt-0">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            </div>
        </div>
        </div>
    </div>
    </div>
    </>
    )}

export default Profile