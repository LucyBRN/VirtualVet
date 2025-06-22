import { useState, useEffect, Fragment } from "react";
import { getTest } from "./functions/test.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/index/index.jsx";
import Login from "./pages/auth/login/login.jsx";
import Register from "./pages/auth/register/register.jsx";
import Dashboard from "./pages/user/dashboard/dashboard.jsx";
import Clients from "./pages/services/clients/clients.jsx"
import Appointments from "./pages/services/appointments/appointments.jsx"
import Inventory from "./pages/services/inventory/inventory.jsx"
import Error from "./pages/error/error.jsx";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    getTest()
      .then((res) => {
        setData(res.message);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Fragment className="App">
      <Router>
        <Routes>
          <Route index element={<Index />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="clients" element={<Clients />} />
          <Route path="appointments" element={<Appointments />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
