import React from 'react'
import { Form } from 'react-bootstrap'
import "../css/login.css";
// import PropTypes from 'prop-types';

const MyInput = props => {
  
  return (
    <Form.Control name={props.theName} style={props.theStyle} className={props.theClass} type={props.theType} placeholder={props.thePlaceholder} value={props.theValue} onChange={props.onChange} />
  )
}

// MyInput.propTypes = {
//   isRequired: PropTypes.bool.isRequired
// }

// MyInput.defaultProps = {
//   isRequired: false
// }

export default MyInput