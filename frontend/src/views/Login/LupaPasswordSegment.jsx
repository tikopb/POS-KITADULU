import React from 'react'
import { Form } from 'react-bootstrap'
import MyInput from '../../components/MyInput'

const LupaPasswordSegment = (props) => {
    console.log(props)
    if(props.inputEmail) {
        return (
            <>
                <div style={{ width:"100%", textAlign:"center" }}>
                    <h6 style={{ fontWeight:"lighter" }}>Input Your Email Here</h6>
                </div>
                <MyInput thePlaceholder="Email"/>
                <Form.Check 
                    type={"checkbox"}
                    id={`default-checkbox`}
                    label={`Send verification code to my email`}
                    className="mt-5 mx-3"
                    style={{ fontWeight:"lighter" }}
                />
            </>
        )
    }
    else if(props.inputVerifCode) {
        return (
            <>
                <div style={{ width:"100%", textAlign:"center" }}>
                    <h6 style={{ fontWeight:"lighter" }}>Input Your Verification Code Here</h6>
                </div>
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