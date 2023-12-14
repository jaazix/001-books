import axios from "axios";
import { useParams } from "react-router-dom"

const Recover = ():JSX.Element => {

    const {token} = useParams();

    const newPass = async (e: React.FormEvent | any):Promise<void>=>{
        const url = import.meta.env.VITE_API + '/usuario/recover';
        const formData = new FormData(e.currentTarget);
        if(formData.get("pass") !== formData.get("passconf")){
            console.log("Las contraseñas no coinciden");
            return;
        }
        axios.put(url, {
            token: token,
            password: formData.get("pass")
        }).then((response) => {
            console.log(response.data);
        }
        ).catch((error) => {
            console.log(error.response.data);
        })
    }

    return (
        <>
        <section className="bg-light py-3 py-md-5">

        <div className="container">
            <div className="row justify-content-md-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
                <h2 className="mb-4 display-5 text-center">Recover your password</h2>
                {/* <p className="text-secondary mb-5 text-center">The best way to contact us is to use our contact form below. Please fill out all of the required fields and we will get back to you as soon as possible.</p> */}
                <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle"/>
            </div>
            </div>
        </div>

        <div className="container">
        <div className="row justify-content-lg-center">
            <div className="col-12 col-lg-9">
            <div className="bg-white border rounded shadow-sm overflow-hidden">

                <form onSubmit={newPass}>
                <div className="row gy-4 gy-xl-5 p-4 p-xl-5">
                    <div className="col-12">
                    <label htmlFor="pass" className="form-label">Enter your new password <span className="text-danger">*</span></label>
                    <input type="password" className="form-control" id="pass" name="pass" required/>
                    </div>
                    <div className="col-12">
                        <label htmlFor="passconf" className="form-label">Confirm your new password <span className="text-danger">*</span></label>
                        <input type="password" className="form-control" id="passconf" name="passconf" required/>
                        </div>
                    <div className="col-12">
                    <div className="d-grid">
                        <button className="btn btn-primary btn-lg" type="submit">Update password</button>
                    </div>
                    </div>
                </div>
                </form>
            </div>
            </div>
        </div>
        </div>
        </section>
        </>
    )
}

export default Recover