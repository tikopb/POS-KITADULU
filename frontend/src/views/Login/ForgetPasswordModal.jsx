import React from 'react'
import { Form, Modal } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify'
import MyButton from '../../components/MyButton'

const ForgetPasswordModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
        <Form>
            <ToastContainer
            position="top-center"
            autoClose={1000}
            hideProgressBar={true}
            /> 
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Forget Password
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>                    
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>                    
                </Form.Group>
                
            </Modal.Body>
            <Modal.Footer>
                <MyButton theClass="loginButton" theText="Register"></MyButton>
                <MyButton theClass="loginButton" onClick={props.onHide} theText="Cancel"></MyButton>
            </Modal.Footer>
        </Form>
    </Modal>
  )
}

export default ForgetPasswordModal