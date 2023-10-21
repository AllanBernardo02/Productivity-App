import React, { useState } from "react";
import SignIn from "../../components/authentication/SignIn";
import { loginUser } from "../../api/api";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";

const SignInPage = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const values = {
    email: form.email,
    password: form.password,
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setForm({ ...form, [e.target.id]: value });
  };

  const onSubmit = async (e) => {
    try {
      e.preventDefault();

      const response = await loginUser(values);
      console.log(response);
      if (response) {
        toast.success(response.message);
        localStorage.setItem("user", JSON.stringify(response));
        // sessionStorage.setItem("userToken", response.token);
        navigate("/todopage");
      } else {
        console.log("No response");
        console.log("hi")
        console.log("hi")
        console.log("hello")
        console.log("hello")
      }
    } catch (error) {
      console.log("Login Error", error);
      toast.error(error.response.data.message);
      throw error;
    }
  };

  return (
    <>
      <SignIn
        form={form}
        handleChange={handleChange}
        onSubmit={(e) => onSubmit(e)}
      />
    </>
  );
};

export default SignInPage;
