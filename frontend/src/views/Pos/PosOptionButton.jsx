import React from 'react'
import { ButtonGroup, Col, Dropdown, Nav, Row } from 'react-bootstrap'
import { ArrowLeftCircleFill, ArrowRightCircleFill, PlusCircle, Save2Fill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import MyButton from '../../components/MyButton';

function PosOptionButton() {
  return (
    // <Row className="h-100">
    //     <Col className="h-100">
    //     <ArrowLeftCircleFill className="btn" size="90%"/>
    //     </Col>
    //     <Col className="h-100">
    //     <ArrowRightCircleFill className="btn" size="90%"/>
    //     </Col>
    //     <Col className="h-100">
    //     <PlusCircle className="btn" size="90%"/>
    //     </Col>
    //     <Col className="h-100">
    //     <Save2Fill className="btn" size="90%"/>
    //     </Col>
    //     <Col className="col-6">
    //     </Col>
    // </Row>
    <div className="btn-toolbar">
      {/* <MyButton theClass="btn btn-primary pos-button" theStyle={{ width:"100px" }} theText="History"/>*/}
      <Dropdown>
        <Dropdown.Toggle variant="primary" className="pos-button" style={{ width:"100px", marginRight:"10px" }}>
          History
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/draft">Draft</Dropdown.Item>
          <Dropdown.Item href="#/complete">Complete</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <MyButton theClass="btn btn-primary pos-button mx-2" theStyle={{ width:"100px" }} theText="New"/>
      <MyButton theClass="btn btn-primary pos-button mx-2" theStyle={{ width:"100px" }} theText="Save"/>
      <Link to={'/dashboard'}>
        <MyButton theClass="btn btn-primary pos-button mx-2" theStyle={{ width:"100px" }} theText="Back"/>
      </Link>
      {/* <MyButton theClass="btn btn-primary pos-button mx-2" theStyle={{ width:"100px" }} theText="Back"/> */}
    </div>
  )
}

export default PosOptionButton