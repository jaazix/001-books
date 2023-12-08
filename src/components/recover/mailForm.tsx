import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const MailForm = ():JSX.Element => {

    const navigate = useNavigate();

    const sendMail = async(e: React.FormEvent | any):Promise<void>=>{
        e.preventDefault();
        const url = import.meta.env.VITE_API + '/usuario/recover';
        const formData = new FormData(e.currentTarget);
        await axios.post(url, { 
            email: formData.get("mail") as string,
            }).then((response) => {
            console.log(response);
            navigate('/');
        })
    }

    return (
        <>
        <section className="bg-light py-3 py-md-5">

        <div className="container">
            <div className="row justify-content-md-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
                <h2 className="mb-4 display-5 text-center">Recover your password</h2>
                <p className="text-secondary mb-5 text-center">Enter your email and we will contact you.</p>
                <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle"/>
            </div>
            </div>
        </div>

        <div className="container">
        <div className="row justify-content-lg-center">
            <div className="col-12 col-lg-9">
            <div className="bg-white border rounded shadow-sm overflow-hidden">

            <form onSubmit={sendMail}>
                <div className="row gy-4 gy-xl-5 p-4 p-xl-5">
                    <div className="col-12">
                    <label htmlFor="mail" className="form-label">Enter your email<span className="text-danger">*</span></label>
                    <input type="email" className="form-control" id="mail" name="mail" required/>
                    </div>
                    <div className="col-12">
                    <div className="d-grid">
                        <button className="btn btn-primary btn-lg" type="submit">Recover password</button>
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

export default MailForm