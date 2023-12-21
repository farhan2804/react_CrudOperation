import React, { useState } from "react";
import "./Create.css";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const history = useNavigate();
  const setValueName = (event) => {
    setName(event.target.value);
  };
  const setValueMail = (event) => {
    setMail(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://656c91dae1e03bfd572e81e6.mockapi.io/crud", {
        name: name,
        email: mail,
      })

      .then(() => {
        history("/read");
      });
  };
  return (
    <>
      <div className="container">
        <h1>Create</h1>
        <div className="FormContainer">
          <form>
            <label htmlFor="name">Name</label>
            <br />
            <input onChange={setValueName} type="text" id="name" name="name" />
            <br />
            <label htmlFor="email">E-mail</label>
            <br />
            <input
              onChange={setValueMail}
              type="email"
              id="email"
              name="email"
            />
          </form>
          <br />
          <button class="btn btn-dark" onClick={handleSubmit} type="submit">
            Submit
          </button>
          &nbsp;
          <NavLink to="/read">
            <button class="btn btn-dark">View Data</button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Create;
