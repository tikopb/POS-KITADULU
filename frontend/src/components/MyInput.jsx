import React from 'react'
import { Form } from 'react-bootstrap'
import "../css/login.css";
import "../css/main.css"
import PropTypes from 'prop-types';

const MyInput = React.forwardRef((props, ref) => {
  
  return (
    <input
      id={props.theID} 
      name={props.theName} 
      style={props.theStyle} 
      className={"form-control " + props.theClass} 
      type={props.theType} 
      placeholder={props.thePlaceholder} 
      value={props.theValue} 
      onChange={props.onChange}
      ref={ref}
      disabled={props.disabled}
    />
  )
})

// MyInput.propTypes = {
//   isRequired: PropTypes.bool.isRequired
// }

MyInput.defaultProps = {
  theClass: ""
}

export default MyInput