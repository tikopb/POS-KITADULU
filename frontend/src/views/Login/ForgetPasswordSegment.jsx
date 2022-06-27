import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import MyInput from '../../components/MyInput'

const ForgetPasswordSegment = (props) => {
    const [email, setEmail] = useState("");

    const handleChangeEmail = e => {
        setEmail(e.target.value);
        console.log(email);
    }

    if(props.inputEmail) {
        return (
            <>
                <div style={{ width:"100%", textAlign:"center" }}>
                    <h6 style={{ fontWeight:"lighter" }}>Masukkan Email Anda Disini</h6>
                </div>
                <MyInput theType="email" thePlaceholder="Email" onChange={ handleChangeEmail }/>
                
                <Form.Group style={{ textAlign: "center", margin: "20px 0" }}>
                    <div>Kami akan mengirim kode verifikasi ke email anda</div>
                </Form.Group>
            </>
        )
    }
    else if(props.inputVerifCode) {
        return (
            <>
                <div style={{ width:"100%", textAlign:"center" }}>
                    <h6 style={{ fontWeight:"lighter" }}>Masukkan Kode Verifikasi Anda Disini</h6>
                </div>
                <MyInput thePlaceholder={ email } disabled="true" theClass="mb-2"/>
                <MyInput thePlaceholder="Verification Code"/>
            </>
        )
    }
    else if(props.inputNewPassword) {
        return (
            <>
                <div style={{ width:"100%", textAlign:"center" }}>
                    <h6 style={{ fontWeight:"lighter" }}>Masukkan Password Baru Anda Disini</h6>
                </div>
                <Form.Group className="mb-1">
                    <MyInput theType="password" thePlaceholder="Password"/>
                </Form.Group>
                <Form.Group className="mb-1">
                    <MyInput theType="password" thePlaceholder="Confirm Password"/>
                </Form.Group>
            </>
        )
    }
}

export default ForgetPasswordSegment