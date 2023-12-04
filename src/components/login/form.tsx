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
    
    const usuario = JSON.parse(localStorage.getItem('user') || '{}');

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

    const logout = () => {
        localStorage.removeItem('user');
        navigate('/');
    }

    const renderForm = (
        <div>
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
                        <a>Forgot password?</a>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>
                <div className="text-center">
                    <p>Not a member? <a onClick={()=>navigate('/register')}>Register</a></p>
                </div>
            </form>
        </div>
    )

    return (
        // if user exist in localstorage, show data else show form
        <>
        { localStorage.getItem('user') ? <div className="card">
                <div className="card-body">
                    <h3 className="card-title">{`Bienvenido ${usuario.nombre}`}</h3>
                    <p className="card-text">{JSON.stringify(usuario)}</p>
                    <button className="btn btn-danger" onClick={logout}>Log out</button> 
                </div>
            </div>: renderForm}
        </>
    );
}

export default FormLog;