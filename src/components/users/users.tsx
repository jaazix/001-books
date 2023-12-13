import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
const Users = () => {

    const navigate = useNavigate();
    const [users, setUsers] = useState([] as any);
    
    useEffect(()=>{
        getUsers()
    })

    // get users from api
    const getUsers = async () => {
        const url = import.meta.env.VITE_API + '/usuario/list';
        const token = JSON.parse(localStorage.getItem('user') || '{}')
        await axios.post(url, {}, {
            headers: {
                'authorization': 'Bearer ' + token.token
            }
        }).then((response) => {
            setUsers(response.data.usuarios);
            console.log(response.data.usuarios);
        }
        ).catch((error) => {
            console.log(error.response.data);
        });
    }
    // lock or unlock user
    const lockUser = async (email: string) => {
        const url = import.meta.env.VITE_API + '/usuario/lock';
        const token = JSON.parse(localStorage.getItem('user') || '{}')
        await axios.put(url, {
            email: email
        }, {
            headers: {
                'authorization': 'Bearer ' + token.token
            }
        }).then((response) => {
            console.log(response.data);
        }
        ).catch((error) => {
            console.log(error.response.data);
        });
    }

    const unlockUser = async (email: string) => {
        const url = import.meta.env.VITE_API + '/usuario/unlock';
        const token = JSON.parse(localStorage.getItem('user') || '{}')
        await axios.put(url, {
            email: email
        }, {
            headers: {
                'authorization': 'Bearer ' + token.token
            }
        }).then((response) => {
            console.log(response.data);
        }
        ).catch((error) => {
            console.log(error.response.data);
        });
    }
    // if exist return users in table else return empty
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Nombre</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user: any) => (
                                    <tr key={user._id}>
                                        <td>{user._id}</td>
                                        <td>{user.nombre}</td>
                                        <td>{user.email}</td>
                                        <td>{user.role}</td>
                                        <td>
                                            <button className="btn btn-primary" onClick={() => navigate('/users/edit/' + user.id)}>Edit</button>
                                        </td>
                                        <td>
                                            {user.estado ? <button className="btn btn-danger" onClick={()=>lockUser(user.email)}>Bloquear</button>:
                                            <button className="btn btn-success" onClick={() => unlockUser(user.email)}>Desbloquear</button>}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Users