import React from 'react'

const MySelect = props => {
  return (
    <select className={props.theClass}>
        {props.children}
    </select>
  )
}

export default MySelect