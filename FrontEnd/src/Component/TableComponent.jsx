import { Link } from 'react-router-dom';
import axios from "axios";
import { useEffect, useState } from 'react';

function TableComponent() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const result = await axios.get("http://localhost:4000/api/get/");
                console.log(result.data); // Imprime la respuesta para depurar
                setUsers(result.data.user); // Asegúrate de acceder a la propiedad 'user'
            } catch (err) {
                console.error("Error fetching users:", err);
            }
        };

        fetchUsers();
    }, []);

    const handleDelete = (id) => {
        axios.delete('http://localhost:4000/api/delete/' + id)
            .then(res => {
                console.log(res);
                // Actualiza el estado de los usuarios después de la eliminación
                setUsers(users.filter(user => user._id !== id));
            })
            .catch(err => console.log(err));
    };

    return (
        <div>
            <Link to="/User"><button className="btn btn-primary mb-3">Añadir Datos</button></Link>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Lastname</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Array.isArray(users) && users.length > 0 ? (
                            users.map((user) => (
                                <tr key={user._id}>
                                    <td>{user.name}</td>
                                    <td>{user.lastname}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>
                                        <Link to={`/Update/${user._id}`} className='btn btn-success'>Update</Link>
                                        <button className='btn btn-danger' onClick={() => handleDelete(user._id)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="text-center">No hay usuarios disponibles</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default TableComponent;
