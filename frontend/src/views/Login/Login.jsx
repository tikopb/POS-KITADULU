import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';
import MyInput from '../../components/MyInput';
import MyButton from '../../components/MyButton';
import MainLayout from '../../layouts/MainLayout';
import axios from 'axios';
import { setUserSession } from '../../utils/Common';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useNavigate } from 'react-router';
import ErrorTextNotif from '../../components/ErrorTextNotif';
import RegisterModal from './RegisterModal';
import { Handbag } from 'react-bootstrap-icons';
import ForgetPasswordModal from './ForgetPasswordModal';
import { useForm } from 'react-hook-form';

const Login = () => {
  const {register, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues: {
        username: '',
        password: ''
    }
});
  const data = { username: "", password: "" };
  const [formData, setFormData] = useState(data);

  const [loading, setLoading] = useState(false);
  const [theError, setTheError] = useState("");
  const [openRegisterModal, setOpenRegisterModal] = useState(false);
  const [openForgetPasswordModal, setOpenForgetPasswordModal] = useState(false);

  const failLogin = () => toast.error(theError);
  const successLogin = () => toast.success("Success Login!");

  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value})
    console.log(formData.username);
  }

  const onLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.post('http://localhost:5000/api/v1/auth/login', { username: formData.username, password: formData.password }).then(response => {
      // setLoading(false);
      setUserSession(response.data.token, response.data.username);
      successLogin();
      setTimeout( () =>
        navigate("/dashboard")
      , 2000);
    }).catch(error => {
      setLoading(false);
      if (error.response.status !== 200) {
        setTheError(error.response.data.err);

      }
      else setTheError("Something went wrong. Please try again later.");
      failLogin();
    });
  }

  const handleOpenRegisterModal = () => {
    setOpenRegisterModal(true);
  }

  useEffect(() => {
    if(errors.username !== undefined)
      setTheError(errors.username.message);
    else if(errors.password !== undefined)
      setTheError(errors.password.message);
    
    // if(theError !== "") failLogin();
  }, [errors.username, errors.password])

  const handleForgetPassword = e => {
    e.preventDefault();
    setOpenForgetPasswordModal(true);
  }

  return (
      <MainLayout>
        <RegisterModal
          show={openRegisterModal}
          onHide={() => setOpenRegisterModal(false)}
        />
        <ForgetPasswordModal
          show={openForgetPasswordModal}
          onHide={() => setOpenForgetPasswordModal(false)}
        />

        <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={true}
        />
        <div className="h-100 d-flex justify-content-center align-items-center">
          <Form className="w-25" onSubmit={handleSubmit(onLogin)}>
            <Form.Group className="mb-4">
              <MyInput 
                theClass={errors.username !== undefined ? 
                  "form-control-lg inputLogin input-validation-error":"form-control-lg inputLogin"} 
                theType="text" thePlaceholder="Username" 
                // onChange={handleChange} 
                theName="username"
                disabled = {loading === true ? "disabled":"" } 
                {...register("username", {
                  required: {
                    value: true,
                    message: "Username is required!"
                  }
                }) }/>
              {/* { theError.includes('User') &&
                <ErrorTextNotif error={theError} />
              } */}
              { errors.username !== undefined && 
                <ErrorTextNotif error={errors.username.message} />
              }
            </Form.Group>
            <Form.Group className="mb-4">          
              <MyInput theClass={errors.password !== undefined ? 
                " form-control-lg inputLogin input-validation-error":"form-control-lg inputLogin"} 
                theType="password" thePlaceholder="Password" 
                // onChange={handleChange} 
                theName="password"
                disabled = {loading === true ? "disabled":"" } 
                {...register("password", {
                  required: {
                      value: true,
                      message: "Password is required!"
                  }
                }) }/>
              {/* { theError.includes('password') &&
                <ErrorTextNotif error={theError} />
              } */}
              { errors.password !== undefined && 
                <ErrorTextNotif error={errors.password.message} />
              }
            </Form.Group>

            <Form.Group style={{ textAlign: "center", marginBottom: "15px" }}>
              <a onClick={handleForgetPassword} href="">Lupa Password?</a>
            </Form.Group>             

            <MyButton theClass="btn loginButton float-right float-start" theType="submit" theText="Sign In" 
            disabled = {loading === true ? "disabled":"" } />
            <MyButton theClass="btn loginButton float-right float-end" theType="button" theText="Sign Up" onClick={ handleOpenRegisterModal }
            disabled = {loading === true ? "disabled":"" } />
          </Form>
        </div>
      </MainLayout>
  )
}

export default Login