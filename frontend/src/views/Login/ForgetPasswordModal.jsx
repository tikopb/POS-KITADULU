import React, { useEffect, useState } from 'react'
import { Form, Modal } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify'
import MyButton from '../../components/MyButton'
import MyInput from '../../components/MyInput'
import LupaPasswordSegment from './ForgetPasswordSegment'

const ForgetPasswordModal = (props) => {
    const [isInputEmail, setIsInputEmail] = useState(true);
    const [isInputVerifCode, setIsInputVerifCode] = useState(false);
    const [isInputNewPassword, setIsInputNewPassword] = useState(false);

    const handleSendButton = e => {
        console.log(isInputEmail);
        e.preventDefault();
        if(isInputEmail) {
            setIsInputEmail(false);
            setIsInputVerifCode(true)
        }
        else if(isInputVerifCode) {
            setIsInputVerifCode(false);
            setIsInputNewPassword(true);
        }
        else if(isInputNewPassword) {
            props.onHide();
            setIsInputEmail(true);
            setIsInputVerifCode(false)
            setIsInputNewPassword(false);
        }
    }

    useEffect(() => {
        if(props.show) {
            setIsInputEmail(true);
            setIsInputVerifCode(false)
            setIsInputNewPassword(false);
        }
    }, [props.show])

    return (
        <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        //   size="sm"
        dialogClassName="my-login-modal"
        contentClassName="my-login-modal-height"
        >
            <Form className="login-modal-form">
                <ToastContainer
                position="top-center"
                autoClose={1000}
                hideProgressBar={true}
                /> 
                <Modal.Header closeButton className="pb-0 mt-4">
                    <Modal.Title id="contained-modal-title-vcenter" style={{ width:"100%", textAlign:"center" }}>
                        <h1 className="mb-0">LUPA PASSWORD</h1>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="mt-5">

                    <LupaPasswordSegment
                        inputEmail={isInputEmail}
                        inputVerifCode={isInputVerifCode}
                        inputNewPassword={isInputNewPassword}
                        onHide={props.onHide}
                    />

                </Modal.Body>
                <Modal.Footer className="justify-content-center" style={{ marginTop:"auto" }}>
                    <MyButton theClass="loginButton btn" theText="Send" onClick={handleSendButton}></MyButton>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}

export default ForgetPasswordModal