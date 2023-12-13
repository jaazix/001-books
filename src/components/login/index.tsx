import FormLog from './form'
import Profile from '../profile';

const Login = ():JSX.Element => {

    return (
        <>
        <div className="row align-items-center">
                {localStorage.getItem('user') ? <Profile/> :<FormLog/>}
        </div>
        </>
    );
}

export default Login;