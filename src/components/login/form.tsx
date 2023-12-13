import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { error } from "../../interfaces/interfaces";

import axios from 'axios';

const FormLog = () => {

    const navigate = useNavigate();
    const showAlert = () => {
        const alert = document.getElementById('alert') as HTMLElement;
        alert.style.display = 'block';
    }
    const hideAlert = () => {
        const alert = document.getElementById('alert') as HTMLElement;
        alert.style.display = 'none';
    }

    const [error, setError] = useState({} as error);

    const db = async(e: React.FormEvent | any):Promise<void> => {
        e.preventDefault();
        const url = import.meta.env.VITE_API + '/login';
        const formData = new FormData(e.currentTarget);
        const email = formData.get("uname") as string;
        const password = formData.get("pass") as string;
        await axios.post(url, {
            email,
            password
        }).then((response) => {
        //  save data in localstorage
        localStorage.setItem('user', JSON.stringify(response.data.usrDB));
        navigate('/');
        }
        ).catch((error) => {
            console.log(error.response.data);
            setError(error.response.data);
            showAlert();
        });
    }

    return (
        <>
        <div className="col-md-6 mb-6 mx-auto">
            <center><h1 className="fz">Login Form</h1></center>
            <div className="alert alert-danger" role="alert" id="alert" onClick={hideAlert}>
                {error.msg}
            </div>
            <form onSubmit={db}>
                <div className="form-outline mb-4">
                    <input type="email" name="uname"  className="form-control" placeholder="Email"/>
                </div>
                <div className="form-outline mb-4">
                    <input type="password" name="pass" className="form-control" placeholder="Password"/>
                </div>
                <div className="row mb-4">
                    <div className="col">
                        <a style={{color:'blue', cursor: 'pointer'}} onClick={()=>navigate('/mail')}>Forgot password?</a>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>
                <div className="text-center">
                    <p>Not a member? <a style={{color: 'blue', cursor: 'pointer'}} onClick={()=>navigate('/register')}>Register</a></p>
                </div>
            </form>
        </div>
        </>
    );
}

export default FormLog;