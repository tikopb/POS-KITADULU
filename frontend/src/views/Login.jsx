import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';
import MyInput from '../components/MyInput';
import MyButton from '../components/MyButton'
import MainLayout from '../layouts/MainLayout';


const Login = () => {
  return (
      <MainLayout>
        <div className="h-100 d-flex justify-content-center align-items-center">
          <Form className="w-25">
            <Form.Group className="mb-4">
              <MyInput theClass="form-control-lg inputLogin" theType="text" thePlaceholder="Username" />
            </Form.Group>
            <Form.Group className="mb-4">          
              <MyInput theClass="form-control-lg inputLogin" theType="password" thePlaceholder="Password" />            
            </Form.Group>
            <MyButton theClass="btn inputButton float-right float-start" theType="submit" theText="Sign In" />
            <MyButton theClass="btn inputButton float-right float-end" theType="button" theText="Sign Up" />
          </Form>
        </div>
      </MainLayout>
  )
}

export default Login