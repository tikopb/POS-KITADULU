import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Form, Modal } from 'react-bootstrap'
import MyButton from '../../components/MyButton'
import MyInput from '../../components/MyInput'
import ErrorTextNotif from '../../components/ErrorTextNotif'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../css/login.css'

const Register = () => {
    const {register, handleSubmit, formState: { errors }, reset, watch } = useForm({
        defaultValues: {
            name: '',
            email: '',
            username: '',
            password: '',
            confirmPassword: ''
        }
    });

    const {connectionError, setConnectionError} = useState('');
    const {loading, setLoading} = React.useState(false);
    
    const successRegister = () => toast.success("Register Success!")
    const failRegister = () => toast.error(connectionError);

    const onSubmit = (data) => {
        // e.preventDefault();
        // setLoading(true);
        axios.post('http://localhost:5000/api/v1/auth/register', { username: data.username, password: data.password, email: data.email, name: data.name }).then(response => {
        // setLoading(false);
        successRegister();
        setTimeout( () =>
            window.location.reload()
        , 2000);
        }).catch(error => {
        // setLoading(false);
        if (error.response.status !== 200) {
            setConnectionError(error.response.data.err);
        }
        else setConnectionError("Something went wrong. Please try again later.");

        failRegister();
        });
    }

    useEffect(() => {
        if(connectionError !== "") failRegister();
      }, [connectionError])

  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    //   size="sm"
        dialogClassName="my-login-modal"
        contentClassName="my-login-modal-height"
    >
        <Form onSubmit={handleSubmit(onSubmit)} className="login-modal-form">
            <ToastContainer
            position="top-center"
            autoClose={1000}
            hideProgressBar={true}
            /> 
            <Modal.Header closeButton className="pb-0 mt-4">
                <Modal.Title id="contained-modal-title-vcenter" style={{ width:"100%", textAlign:"center" }}>
                    <h1 className="mb-0">SIGN UP</h1>
                    <h6 style={{ fontWeight:"lighter" }}>Create New Account Here</h6>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group className="mb-1" controlId="name">
                    { errors.name !== undefined && 
                        <ErrorTextNotif error={errors.name.message} />
                    }
                    <MyInput theType="text" thePlaceholder="Name" theName="name" 
                        theClass={ errors.name !== undefined ? 'input-validation-error':'' }
                        {...register("name", {
                            required: {
                                value: true,
                                message: "Name is required!"
                            }
                        }) }
                    />
                </Form.Group>
                <Form.Group className="mb-1" controlId="email">
                    { errors.email !== undefined && 
                        <ErrorTextNotif error={errors.email.message} />
                    }
                    <MyInput theType="email" thePlaceholder="Email" theName="email" 
                        theClass={ errors.email !== undefined ? 'input-validation-error':'' }
                        {...register("email", {
                            required: {
                                value: true,
                                message: "Email is required!"
                            },
                            pattern : {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email!!!"
                            }
                        }) }
                        disabled = {loading === true ? "disabled":"" }
                    />
                </Form.Group>
                <Form.Group className="mb-1" controlId="username">
                    { errors.username !== undefined && 
                        <ErrorTextNotif error={errors.username.message} />
                    }
                    <MyInput theType="text" thePlaceholder="Username" theName="username" 
                        theClass={ errors.username !== undefined ? 'input-validation-error':'' }
                        {...register("username", {
                            required: {
                                value: true,
                                message: "Username is required!"
                            }
                        }) }
                        disabled = {loading === true ? "disabled":"" }
                    />
                </Form.Group>
                <Form.Group className="mb-1" controlId="password">
                    { errors.password !== undefined && 
                        <ErrorTextNotif error={errors.password.message} />
                    }
                    <MyInput theType="password" thePlaceholder="Password" theName="password" 
                        theClass={ errors.password !== undefined ? 'input-validation-error':'' }
                        {...register("password", {
                            required: {
                                value: true,
                                message: "Password is required!"
                            },
                            minLength: {
                                value: 8,
                                message: "Password is too short! Min lenght is 8 character."
                            }
                        }) }
                        disabled = {loading === true ? "disabled":"" }
                    />
                </Form.Group>
                <Form.Group className="mb-1" controlId="password">
                    { errors.password !== undefined && 
                        <ErrorTextNotif error={errors.confirmPassword.message} />
                    }
                    <MyInput theType="password" thePlaceholder="Confirm Password" theName="confirmPassword" 
                        theClass={ errors.confirmPassword !== undefined ? 'input-validation-error':'' }
                        {...register("confirmPassword", {
                            required: {
                                value: true,
                                message: "Please Confirm Your Password"
                            },
                            validate: (val) => {
                                if(watch("password") !== val) 
                                    return "Password Do Not Match!"
                            }
                        }) }
                        disabled = {loading === true ? "disabled":"" }
                    />
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <MyButton theClass="btn loginButton" theText="Register"
                disabled = {loading === true ? "disabled":"" }></MyButton>
                <MyButton theClass="btn loginButton" onClick={props.onHide} theText="Cancel"
                disabled = {loading === true ? "disabled":"" }></MyButton>
            </Modal.Footer>
        </Form>
    </Modal>
  )
}

export default Register