import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUpPage from "./Pages/auth/SignUpPage.jsx";
import { Toaster } from "react-hot-toast";
import SignInPage from "./Pages/auth/SignInPage.jsx";
import Homepage from "./Pages/home/Homepage.jsx";

// import "./App.css";

function App() {
  return (
    <>
      <Toaster />
      <Router>
        <Routes>
          <Route path="/homepage" element={<Homepage/>}/>
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
