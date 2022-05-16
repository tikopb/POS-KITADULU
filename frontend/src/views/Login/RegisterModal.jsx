import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Form, Modal } from 'react-bootstrap'
import MyButton from '../../components/MyButton'
import MyInput from '../../components/MyInput'
import ErrorTextNotif from '../../components/ErrorTextNotif'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterModal = (props) => {
    const {register, handleSubmit, formState: { errors }} = useForm({
        defaultValues: {
            name: '',
            email: '',
            username: '',
            password: ''
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
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
        <Form onSubmit={handleSubmit(onSubmit)}>
            <ToastContainer
            position="top-center"
            autoClose={1000}
            hideProgressBar={true}
            /> 
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Sign Up
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <MyInput theType="text" thePlaceholder="Enter Name" theName="name" 
                        theClass={ errors.name !== undefined ? 'input-validation-error':'' }
                        {...register("name", {
                            required: {
                                value: true,
                                message: "Name is required!"
                            }
                        }) }
                    />
                    { errors.name !== undefined && 
                        <ErrorTextNotif error={errors.name.message} />
                    }
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <MyInput theType="email" thePlaceholder="Enter Email" theName="email" 
                        theClass={ errors.email !== undefined ? 'input-validation-error':'' }
                        {...register("email", {
                            required: {
                                value: true,
                                message: "Email is required!"
                            }
                            // pattern : {
                            //     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            //     message: "Invalid email!!!"
                            // }
                        }) }
                        disabled = {loading === true ? "disabled":"" }
                    />
                    { errors.email !== undefined && 
                        <ErrorTextNotif error={errors.email.message} />
                    }
                </Form.Group>
                <Form.Group className="mb-3" controlId="username">
                    <Form.Label>Username</Form.Label>
                    <MyInput theType="text" thePlaceholder="Enter Username" theName="username" 
                        theClass={ errors.username !== undefined ? 'input-validation-error':'' }
                        {...register("username", {
                            required: {
                                value: true,
                                message: "Username is required!"
                            }
                        }) }
                        disabled = {loading === true ? "disabled":"" }
                    />
                    { errors.username !== undefined && 
                        <ErrorTextNotif error={errors.username.message} />
                    }
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <MyInput theType="password" thePlaceholder="Enter Password" theName="password" 
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
                    { errors.password !== undefined && 
                        <ErrorTextNotif error={errors.password.message} />
                    }
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <MyButton theClass="loginButton" theText="Register"
                disabled = {loading === true ? "disabled":"" }></MyButton>
                <MyButton theClass="loginButton" onClick={props.onHide} theText="Cancel"
                disabled = {loading === true ? "disabled":"" }></MyButton>
            </Modal.Footer>
        </Form>
    </Modal>
  )
}

export default RegisterModal