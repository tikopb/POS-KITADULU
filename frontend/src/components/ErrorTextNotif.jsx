import React from 'react'

const ErrorTextNotif = (props) => {
  return (
    <small className={props.className} style={{fontSize: "10px", color: "red"}}>{"*"+props.error}</small>
  )
}

export default ErrorTextNotif