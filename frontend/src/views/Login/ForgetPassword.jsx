import React, { useEffect, useState } from 'react'
import { Form, Modal } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify'
import MyButton from '../../components/MyButton'
import MyInput from '../../components/MyInput'
import MainLayout from '../../layouts/MainLayout'
import ForgetPasswordSegment from './ForgetPasswordSegment' 

const ForgetPassword = () => {
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
            // props.onHide();
            setIsInputEmail(true);
            setIsInputVerifCode(false)
            setIsInputNewPassword(false);
        }
    }

    // useEffect(() => {
    //     if(props.show) {
    //         setIsInputEmail(true);
    //         setIsInputVerifCode(false)
    //         setIsInputNewPassword(false);
    //     }
    // }, [props.show])
  return (
      <MainLayout>
        <div className="d-flex justify-content-center align-items-center my-register-forget-password"
            style={{ height: "99%" }}
        >
            <Form className="w-25">
                    <ToastContainer
                    position="top-center"
                    autoClose={1000}
                    hideProgressBar={true}
                    /> 
                    <Form.Group style={{ textAlign: "center", paddingBottom: "100px" }}>
                        <h2>Lupa Password</h2>
                    </Form.Group>
                    <Form.Group className="mb-4 input-login">
                        <ForgetPasswordSegment
                            inputEmail={isInputEmail}
                            inputVerifCode={isInputVerifCode}
                            inputNewPassword={isInputNewPassword}
                            // onHide={props.onHide}
                        />
                    </Form.Group>
                    <Form.Group style={{ textAlign: "center", marginBottom: "15px" }}>
                        <MyButton theClass="loginButton btn" theText="Konfirmasi" onClick={handleSendButton}></MyButton>
                    </Form.Group>
                    {/* <Modal.Footer className="justify-content-center" style={{ marginTop:"auto" }}>
                        <MyButton theClass="loginButton btn" theText="Send" onClick={handleSendButton}></MyButton>
                    </Modal.Footer> */}
                </Form>
        </div>
    </MainLayout>
  )
}

export default ForgetPassword