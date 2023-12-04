import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
const Users = () => {

    const navigate = useNavigate();
    const [users, setUsers] = useState([] as any);
    
    useEffect(()=>{
        getUsers()
    })

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
                                            <button className="btn btn-danger" onClick={() => navigate('/users/delete/' + user.id)}>Delete</button>
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