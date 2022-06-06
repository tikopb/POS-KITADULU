import React from 'react'

const ErrorTextNotif = (props) => {
  return (
    <small className={props.className} style={{fontSize: "13px", color: "#ff000b"}}>{"*"+props.error}</small>
  )
}

export default ErrorTextNotif