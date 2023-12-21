import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
const Read = () => {
  const [data, setData] = useState([]);
  const getData = () => {
    axios
      .get("https://656c91dae1e03bfd572e81e6.mockapi.io/crud")
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      });
  };
  const handleDelete = (id) => {
    axios
      .delete(`https://656c91dae1e03bfd572e81e6.mockapi.io/crud/${id}`)
      .then(() => {
        getData();
      });
  };
  const savetoLocalStorage = (id, name, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h2>Read Operation</h2>
      <NavLink to="/">
        <button type="button" class="btn btn-dark">
         Create
        </button>
      </NavLink>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">E-mail</th>
          </tr>
        </thead>

        {data.map((eachData) => {
          return (
            <tbody key={eachData.id}>
              <tr>
                <th scope="row">{eachData.id}</th>
                <td>{eachData.name}</td>
                <td>{eachData.email}</td>
                <td>
                  <NavLink to="/update">
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() =>
                        savetoLocalStorage(
                          eachData.id,
                          eachData.name,
                          eachData.email
                        )
                      }
                    >
                      Edit
                    </button>
                  </NavLink>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => handleDelete(eachData.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </>
  );
};

export default Read;
