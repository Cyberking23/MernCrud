import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

function AddUser() {
  const [name,setName]= useState();
  const [lastname,setlastName]=useState();
  const [email,setEmail]=useState();
  const [phone,setphone]=useState();
  const navigate = useNavigate();

  const Submit =(e)=>{
    e.preventDefault()
    axios.post("http://localhost:4000/api/create/",{name,lastname,email,phone})
    .then(result=>{
      console.log(result)
      navigate('/')
    })
    .cath(err=>console.log(err))
  }
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Añadir Nuevo Usuario</h2>
      <form
        className="shadow p-4 rounded"
        onSubmit={Submit}
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
            onChange={(e)=>setName(e.target.value)}
            className="form-control"
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
            onChange={(e)=>setlastName(e.target.value)}
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
            onChange={(e)=>setEmail(e.target.value)}
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
            onChange={(e)=>setphone(e.target.value)}
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

export default AddUser;
