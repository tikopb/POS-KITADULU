import React from 'react'
import { Navbar } from 'react-bootstrap'
import "../css/main.css";

function MyNavbar() {
  return (
    <Navbar className="my-navbar d-flex">
        <button type="button" class="d-flex justify-content-end btn-close" aria-label="Close"></button>
    </Navbar>
  )
}

export default MyNavbar