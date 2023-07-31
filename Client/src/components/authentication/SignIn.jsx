import React from "react";
import { Link } from "react-router-dom";

const SignIn = ({ handleChange, onSubmit, form }) => {
  return (
    <>
      <div className="vh-100" style={{ backgroundColor: "#F5F5F5" }}>
        <div className="d-flex h-100">
          <div className="m-auto container p-3 px-lg-5 py-lg-4">
            <div className="bg-white shadow rounded p-3 px-lg-5 py-lg-4">
              <div className="row">
                <div className="col-md-6 border-end border-1">
                  <div className="h-100 d-flex align-items-center">
                    <div className="text-center p-3 w-100">
                      <img
                        className="img-fluid login-img mb-3 w-50"
                        src={
                          "https://affinitymedicalclinic.ca/wp-content/uploads/2017/03/Affinity_Medical.png"
                        }
                        alt=""
                      />
                      <h1 className="fw-bold text-black">PRODUCTIVITY APP</h1>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 p-3 px-lg-5 py-lg-4">
                  <h2 className="fw-bold mb-3">Login</h2>
                  <form onSubmit={onSubmit}>
                    <div className="row g-3 mb-3">
                      <div className="col-md-12">
                        <label className="form-label fs-sm">
                          Email Address
                        </label>
                        <input
                          className="col-md-12"
                          placeholder="Enter Email"
                          id="email"
                          value={form.email}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-md-12">
                        <label className="form-label fs-sm">Password</label>
                        <input
                          className="col-md-12"
                          type="password"
                          placeholder="Enter Password"
                          id="password"
                          value={form.password}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="text-center mb-3">
                      <button
                        type="submit"
                        className="btn btn-primary w-50"
                        style={{ backgroundColor: "black" }}
                      >
                        SIGNIN
                      </button>
                    </div>
                    <div className="text-center">
                      <span className="fs-sm">
                        Dont have an account?
                        <Link to="/signup" className="ms-1">
                          Sign up
                        </Link>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
