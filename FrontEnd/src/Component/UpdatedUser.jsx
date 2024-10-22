import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function UpdatedUser() {
  const [user, setUser] = useState({ name: "", lastname: "", email: "", phone: "" });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const result = await axios.get(`http://localhost:4000/api/get/${id}`);

        setUser(result.data.user);
      } catch (err) {
        console.error("Error fetching user:", err);
      }
    };

    fetchUser();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:4000/api/update/${id}`, user)
      .then(result => {
        console.log(result);
        navigate("/");
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Actualizar Usuario</h2>
      <form onSubmit={handleSubmit} className="shadow p-4 rounded" style={{ maxWidth: "600px", margin: "auto", backgroundColor: "#f8f9fa" }}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={user.name}
            onChange={handleChange}
            placeholder="Enter Name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastname" className="form-label">Lastname</label>
          <input
            type="text"
            className="form-control"
            id="lastname"
            name="lastname"
            value={user.lastname}
            onChange={handleChange}
            placeholder="Enter Lastname"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="Enter Email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone</label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            name="phone"
            value={user.phone}
            onChange={handleChange}
            placeholder="Enter Phone Number"
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">Actualizar Usuario</button>
        </div>
      </form>
    </div>
  );
}

export default UpdatedUser;
