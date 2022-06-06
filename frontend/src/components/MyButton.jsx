import React from 'react'
// import { Button } from 'react-bootstrap';

const MyButton = props => {
  return (
    <>
      <button className={props.theClass} 
          style={props.theStyle} 
          type={props.theType} 
          onClick={props.onClick}
          disabled={props.disabled}
      >
          {props.theText}
      </button>
    </>
  )
}

export default MyButton