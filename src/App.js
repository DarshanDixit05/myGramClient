import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from "./pages/Login.js";
import Signup from "./pages/Signup.js";
import Main from "./pages/Main.js";
import ResetPassword from "../src/pages/ResetPassword.js";
import Create from "./pages/Create.js";
import { UserContext } from "./Contexts/UserContext.js";

function App() {
  const [token, setToken] = useState(null);
  const [forgotPasswordToken, setForgotPasswordToken] = useState(null);

  return (
    <Router>
      <UserContext.Provider value={{ token, setToken, forgotPasswordToken, setForgotPasswordToken }}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/main"
            element={token ? <Main /> : <Navigate to="/login" replace />}
          />
          <Route
            path="/createPost"
            element={token ? <Create /> : <Navigate to="/login" replace />}
          />
          <Route path="/resetPassword" element={<ResetPassword />} />
        </Routes>
      </UserContext.Provider>
    </Router>
  );
}

export default App;