import React from 'react'
import { Form } from 'react-bootstrap'
import "../css/login.css";

const MyInput = props => {
  return (
    <Form.Control className={props.theClass} type={props.theType} placeholder={props.thePlaceholder} />
  )
}

export default MyInput