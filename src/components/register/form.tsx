import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { error } from "../../interfaces/interfaces";

import axios from 'axios';

const FormReg = () => {


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

    const sendData = async(e: React.FormEvent | any):Promise<void> => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const pass = formData.get("pass") as string;
        const confpass = formData.get("confpass") as string;
        if(pass === confpass){
            const url = import.meta.env.VITE_API + '/usuario';
            await axios.post(url, { 
                nombre: formData.get("name") as string,
                email: formData.get("mail") as string,
                password: formData.get("pass") as string 
            }).then((response) => {
                console.log(response);
                // save data in localstorage
                localStorage.setItem('user', JSON.stringify(response.data.usrDB));
                navigate('/');
            }).catch((error) => {
                console.log(error.response.data);
                showAlert();
            });
        }else{
            setError({msg: "Las contraseñas no coinciden"});
            showAlert();
        }
    }

    const renderForm = (
        <div className="">
        <center><h1 className="fz"> Register Form </h1></center>
        <div className="alert alert-danger" role="alert" id="alert" onClick={hideAlert}>
                {error.msg}
        </div>
        <form onSubmit={sendData}>
                <div className="form-outline mb-4">
                    <input type="text" name="name"  className="form-control" placeholder="Name"/>
                </div>
                <div className="form-outline mb-4">
                    <input type="email" name="mail"  className="form-control" placeholder="Email"/>
                </div>
                <div className="form-outline mb-4">
                    <input type="password" name="pass" className="form-control" placeholder="Password"/>
                </div>
                <div className="form-outline mb-4">
                    <input type="password" name="confpass" className="form-control" placeholder="Confirm Password"/>
                </div>
                <div className="row mb-4">
                    <div className="col d-flex justify-content-center">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" />
                            <label className="form-check-label">I have read and agree to Bibliofilia <a onClick={()=>navigate('/terms')}>terms and conditions</a></label>
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary btn-block mb-4">Sign Up</button>
                <div className="text-center">
                    <p>Have an acound? <a onClick={()=>navigate('/login')}>Login</a></p>
                </div>
            </form>   
        </div>
    )
    

    return (
        <>
            {renderForm} 
        </>
    );
}

export default FormReg;