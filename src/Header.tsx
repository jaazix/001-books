
const Header = () =>{
    
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary ">
            <div className="container-fluid" id="navbarNav">
            <a className="navbar-brand mx-2" href="/">BOOKS</a>
                <ul className="nav nav-pills">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Search</a>
                    </li>
                </ul>
            <a className="btn btn-outline-dark mx-2" href="/login">LOGIN</a>
            </div>
        </nav>
        </>
    )
}

export default Header