import React from 'react'
import { Col, Row, Table } from 'react-bootstrap'
import MyButton from '../components/MyButton'
import MyInput from '../components/MyInput'
import MySelect from '../components/MySelect'
import MainLayout from '../layouts/MainLayout'

function Pos() {
  return (
    <MainLayout>
        <Row className="g-0 h-25 mt-3">
          <Col>
            <Row className="px-3">
              <Col className="col-sm-8">
                <MyInput theType="text" theClass="form-control" thePlaceholder="Search Product"/>
              </Col>
              <Col className="col-sm-2 g-0">
              <MySelect theClass="form-select">
                <option selected>UOM</option>
                <option value="1">PCS</option>
                <option value="2">YDS</option>
                <option value="3">MTR</option>
              </MySelect>
              </Col>
              <Col className="col-sm-1 g-0">
                <MyInput theType="text" theClass="form-control" thePlaceholder="Qty"/>
              </Col>
              <Col className="col-sm-1 g-0">
                <MyButton theType="button" theClass="button btn-primary" theText="+"/>
              </Col>
            </Row>
          </Col>
          <Col>
            2
          </Col>
        </Row>
        <Row className="g-0 h-75">
          <Col>
            <div className="px-3">
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td colSpan={2}>Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Col>
          <Col className="">
            2
          </Col>
        </Row>
    </MainLayout>
  )
}

export default Pos