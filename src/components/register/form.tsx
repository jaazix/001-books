import { useState } from "react";
import { useNavigate } from 'react-router-dom';

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
    const [error, setError] = useState({});

    const sendData = async(e: React.FormEvent | any):Promise<void> => {
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
                alert("Usuario registrado");
                navigate('/login');
            }).catch((error) => {
                console.log(error.response.data);
                showAlert();
            });
        }else{
            setError({msg: "Las contraseñas no coinciden"});
            showAlert();
        }
    }
    

    return (
        <>
        <div>
        <center><h1 className="fz"> Register Form </h1></center>
        <div className="alert alert-danger" role="alert" id="alert" onClick={hideAlert}>
                {error.msg}
        </div>
        <form onSubmit={sendData}>
                <div className="form-outline mb-4">
                    <input type="text" name="name"  className="form-control" />
                    <label className="form-label">Nombre</label>
                </div>
                <div className="form-outline mb-4">
                    <input type="email" name="mail"  className="form-control" />
                    <label className="form-label">Correo</label>
                </div>
                <div className="form-outline mb-4">
                    <input type="password" name="pass" className="form-control" />
                    <label className="form-label">Password</label>
                </div>
                <div className="form-outline mb-4">
                    <input type="password" name="confpass" className="form-control" />
                    <label className="form-label">Confirm Password</label>
                </div>
                <div className="row mb-4">
                    <div className="col d-flex justify-content-center">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" />
                            <label className="form-check-label">terms and conditions</label>
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary btn-block mb-4">Registrarse</button>
                <div className="text-center">
                    <p>Have an acound? <a href="#!" onClick={()=>navigate('/login')}>Login</a></p>
                </div>
            </form>   
        </div>     
        </>
    );
}

export default FormReg;