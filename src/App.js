import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./pages/Login.js";
import Signup from "./pages/Signup.js";
import Main from "./pages/Main.js";
import ResetPassword from "../src/pages/ResetPassword.js";
import Create from "./pages/Create.js";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/main" element={<Main />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route path="/createPost" element={<Create />} />
        </Routes>
      </Router>
  );
}

export default App;