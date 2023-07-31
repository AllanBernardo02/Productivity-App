import React, { useState } from 'react'
import SignUp from '../../components/authentication/SignUp'
import { registerUser } from '../../api/api'
import { useNavigate } from 'react-router-dom';

import toast from "react-hot-toast";

const SignUpPage = () => {
    const[form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const navigate = useNavigate()

    const onChange = (e) => {
        const value = e.target.value
        setForm({...form, [e.target.id]: e.target.value})
    }
    
    const onSubmit = async (e) => {
        e.preventDefault()

        const { confirmPassword, ...formData } = form;

       

        if (confirmPassword !== form.password) {
            // Show a toast when passwords don't match
            toast.error("Passwords do not match");
            return;
          }
        
        try {
            const response = await registerUser(formData)

            if(response) {
                toast.success("SuccesFully Created")
                navigate('/signin')
            }
        } catch (error) {
            
        }
    }


    console.log("Working", form)

    

  return (
    <>
    <SignUp form={form} handleChange={onChange} onSubmit={(e) => onSubmit(e)} />
    </>
  )
}

export default SignUpPage