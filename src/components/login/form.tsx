import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import axios from 'axios';


const FormLog = () => {
    interface Data {
        ok: boolean;
        msg: string;
        usrDB: {}
    }

    const navigate = useNavigate();
    const showAlert = () => {
        const alert = document.getElementById('alert') as HTMLElement;
        alert.style.display = 'block';
    }
    const hideAlert = () => {
        const alert = document.getElementById('alert') as HTMLElement;
        alert.style.display = 'none';
    }

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [data, setData] = useState({} as Data);
    const [error, setError] = useState({});

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
         setData(response.data);
        setIsSubmitted(true);}
        ).catch((error) => {
            console.log(error.response.data);
            setError(error.response.data);
            showAlert();
        });
    }

    const logout = () => {
        setIsSubmitted(false);
    }

    const renderForm = (
        <div>
            <center><h1 className="fz"> Login Form </h1></center>
            <div className="alert alert-danger" role="alert" id="alert" onClick={hideAlert}>
                {error.msg}
            </div>
            <form onSubmit={db}>
                <div className="form-outline mb-4">
                    <input type="email" name="uname"  className="form-control" />
                    <label className="form-label">Correo</label>
                </div>
                <div className="form-outline mb-4">
                    <input type="password" name="pass" className="form-control" />
                    <label className="form-label">Password</label>
                </div>
                <div className="row mb-4">
                    <div className="col d-flex justify-content-center">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" />
                            <label className="form-check-label"> Remember me </label>
                        </div>
                    </div>
                    <div className="col">
                        <a href="#!">Forgot password?</a>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>
                <div className="text-center">
                    <p>Not a member? <a href="#!" onClick={()=>navigate('/register')}>Register</a></p>
                </div>
            </form>
        </div>
    )

    return (
        <>
        {isSubmitted ?<div className="card">
                <div className="card-body">
                    <h3 className="card-title">{data.msg}</h3>
                    <p className="card-text">{JSON.stringify(data.usrDB)}</p>
                    <button className="btn btn-danger" onClick={logout}>Log out</button> 
                </div>
            </div>: renderForm}
        </>
    );
}

export default FormLog;