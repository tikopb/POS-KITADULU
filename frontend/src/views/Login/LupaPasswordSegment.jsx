import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import MyInput from '../../components/MyInput'

const LupaPasswordSegment = (props) => {
    const [email, setEmail] = useState("");

    const handleChangeEmail = e => {
        setEmail(e.target.value);
        console.log(email);
    }

    if(props.inputEmail) {
        return (
            <>
                <div style={{ width:"100%", textAlign:"center" }}>
                    <h6 style={{ fontWeight:"lighter" }}>Input Your Email Here</h6>
                </div>
                <MyInput theType="email" thePlaceholder="Email" onChange={ handleChangeEmail }/>
            </>
        )
    }
    else if(props.inputVerifCode) {
        return (
            <>
                <div style={{ width:"100%", textAlign:"center" }}>
                    <h6 style={{ fontWeight:"lighter" }}>Input Your Verification Code Here</h6>
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
                    <h6 style={{ fontWeight:"lighter" }}>Input Your New Password Here</h6>
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

export default LupaPasswordSegment