import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";

const Update = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  const history = useNavigate();
  const setValueEmail = (e) => {
    setEmail(e.target.value);
  };
  const setValueName = (e) => {
    setName(e.target.value);
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`https://656c91dae1e03bfd572e81e6.mockapi.io/crud/${id}`, {
        name: name,
        email: email,
      })
      .then(() => {
        // Redirect to "/read" after successful update
        history("/read");
      });
  };

  useEffect(() => {
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
    setId(localStorage.getItem("id"));
  }, []);
  return (
    <>
      <div className="container">
        <h1>Update</h1>
        <div className="FormContainer">
          <form>
            <label htmlFor="name">Name</label>
            <br />
            <input
              type="text"
              id="name"
              onChange={setValueName}
              value={name}
              name="name"
            />
            <br />
            <label htmlFor="email">E-mail</label>
            <br />
            <input
              type="email"
              id="email"
              onChange={setValueEmail}
              value={email}
              name="email"
            />
          </form>
          <br />
          
          <button type="submit" class="btn btn-dark" onClick={handleUpdate}>
            Update
          </button> &nbsp;
          <NavLink to="/read">
            <button type="button" class="btn btn-dark">
              Back
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Update;
