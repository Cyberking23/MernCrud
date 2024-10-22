import { useState,useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
import axios from "axios"


function UpdatedUser() {
  const {id}= useParams()
  const [name,setName]= useState();
  const [lastname,setlastName]=useState();
  const [email,setEmail]=useState();
  const [phone,setphone]=useState();

  useEffect(()=>{
    axios.get('http://localhost:4000/getUser/'+id)
    .then(result=>console.log(result))
    .catch(err=>console.log(err))

  })

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Editar Usuario</h2>
      <form
        className="shadow p-4 rounded"
        style={{
          maxWidth: "600px",
          margin: "auto",
          backgroundColor: "#f8f9fa",
        }}
      >
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            value={name}
            id="name"
            placeholder="Enter Name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastname" className="form-label">
            Lastname
          </label>
          <input
            type="text"
            className="form-control"
            id="lastname"
            placeholder="Enter Lastname"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter Email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            placeholder="Enter Phone Number"
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Añadir Usuario
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdatedUser;
