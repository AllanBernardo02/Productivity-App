import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = ({handleChange, onSubmit, form}) => {
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
                    <h1 className="fw-bold text-black">
                    PRODUCTIVITY APP
                    </h1>
                  </div>
                </div>
              </div>
              <div className="col-md-6 p-3 px-lg-5 py-lg-4">
                  <h2 className="fw-bold mb-3">Register</h2>
                  <form onSubmit={onSubmit}>
                    <div className="row g-3 mb-3">
                      <div className="col-md-6">
                        <label className="form-label fs-sm">First Name</label>
                        <input placeholder='Enter First Name' id="firstName" value={form.firstName}  onChange={handleChange}/>
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fs-sm">Last Name</label>
                        <input placeholder='Enter Last Name' id="lastName" value={form.lastName} onChange={handleChange}/>
                      </div>
                      <div className="col-md-12">
                        <label className="form-label fs-sm">
                          Email Address
                        </label>
                        <input className="col-md-12" placeholder='Enter Email' id="email" value={form.email} onChange={handleChange}/>
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fs-sm">Password</label>
                        <input type='password' placeholder='Enter Password' id="password" value={form.password} onChange={handleChange}/>
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fs-sm">
                          Confirm Password
                        </label>
                        <input type='password' placeholder='Confirm Password' id="confirmPassword" value={form.confirmPassword} onChange={handleChange}/>
                      </div>
                      <div className="col-md-12">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="signup_cb_terms"
                          />
                          <label
                            className="form-check-label fs-xs"
                            htmlFor="signup_cb_terms"
                          >
                            By submitting this form, you agree to our
                            <br />
                            <Link to="/terms" target="_blank">
                              Terms and Conditions.
                            </Link>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="text-center mb-3">
                      <button
                       
                        type="submit"
                        className="btn btn-primary w-50"
                        style={{ backgroundColor: "black" }}
                      >
                        SIGNUP
                      </button>
                    </div>
                    <div className="text-center">
                      <span className="fs-sm">
                        Already have an account?
                        <Link to="/signin" className="ms-1">
                          Sign in
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
  )
}

export default SignUp