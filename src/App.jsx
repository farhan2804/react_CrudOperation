import Create from "./CreateOperation/Create";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Read from "./ReadOperation/Read";
import Update from "./UpdateOperation/Update";
const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Create />} />
        <Route exact path="/read" element={<Read />} />
        <Route exact path="/update" element={<Update />} />
      </Routes>
    </>
  );
};

export default App;
