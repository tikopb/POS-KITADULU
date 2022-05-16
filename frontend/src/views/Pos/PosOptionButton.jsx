import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { ArrowLeftCircleFill, ArrowRightCircleFill, PlusCircle, Save2Fill } from 'react-bootstrap-icons';

function PosOptionButton() {
  return (
    <Row className="h-100">
        <Col className="h-100">
        <ArrowLeftCircleFill className="btn" size="90%"/>
        </Col>
        <Col className="h-100">
        <ArrowRightCircleFill className="btn" size="90%"/>
        </Col>
        <Col className="h-100">
        <PlusCircle className="btn" size="90%"/>
        </Col>
        <Col className="h-100">
        <Save2Fill className="btn" size="90%"/>
        </Col>
        <Col className="col-6">
        </Col>
    </Row>
  )
}

export default PosOptionButton