import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUpPage from "./Pages/auth/SignUpPage.jsx";
import { Toaster } from "react-hot-toast";
import SignInPage from "./Pages/auth/SignInPage.jsx";
import Homepage from "./Pages/home/Homepage.jsx";
import Fetch from "./Pages/React-Query/Fetch.jsx";
import { ReactQueryDevtools } from "react-query/devtools";
import PublicRoute from "./components/routesAccess/PublicRoute.jsx";
// import "./App.css";

function App() {
  return (
    <>
      <Toaster />
      <Router>
        <Routes>
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/fetch" element={<Fetch />} />
          <Route
            path="/signup"
            element={
              <PublicRoute>
                <SignUpPage />
              </PublicRoute>
            }
          />
          <Route
            path="/signin"
            element={
              <PublicRoute>
                <SignInPage />
              </PublicRoute>
            }
          />
        </Routes>
      </Router>
      <ReactQueryDevtools initialIsOpem={false} position="bottom-right" />
    </>
  );
}

export default App;
