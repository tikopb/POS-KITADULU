import React from 'react'
import { Button } from 'react-bootstrap';

const MyButton = props => {
  return (
    <Button className={props.theClass} type={props.theType} onClick={props.onClick}>
        {props.theText}
    </Button>
  )
}

export default MyButton