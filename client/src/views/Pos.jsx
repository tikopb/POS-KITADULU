import React from 'react'
import { ButtonGroup, Col, Dropdown, Row, Table } from 'react-bootstrap'
import MyButton from '../components/MyButton'
import MyInput from '../components/MyInput'
import MySelect from '../components/MySelect'
import MainLayout from '../layouts/MainLayout'

function Pos() {
  return (
    <MainLayout>
        {/* <Row className="g-0 h-25 mt-3">
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
        </Row> */}

        <Row className="h-100 g-0">
          <Col className="p-4">
            <div style={{ height: "90%" }}>
              <Table bordered style={{ border: "4px solid #2196F3" }}>
                <thead>
                  <tr>
                    <th colSpan="4" className="text-center">List Pesanan</th>
                  </tr>
                  <tr>
                    <th>Nama Barang</th>
                    <th>Harga</th>
                    <th>Qty</th>
                    <th>Total</th>
                  </tr>
                  <tr>
                  </tr>
                </thead>
              </Table>
            </div>
            <div style={{ height: "10%" }}>
              <form className="row">
                <div className="col-6">
                  <MyInput theType="search" className="form-control" thePlaceholder="Search"/>
                </div>
                <div className="col-2">
                  <div class="form-group">
                    <select class="form-control">
                      <option>UOM</option>
                      <option>PCS</option>
                      <option>YARDS</option>
                      <option>METER</option>
                    </select>
                  </div>
                </div>
                <div className="col-2">
                  <div class="form-group">
                    <input type="number" className="form-control" placeholder="Qty"/>
                  </div>
                </div>
                <div className="col-2">
                  <button type="button" style={{ width: "100%" }}>Add</button>
                </div>
              </form>
            </div>
          </Col>
          <Col className="p-4">
            <div style={{ height: "12.5%" }}>
              2
            </div>
            <div style={{ height: "77.5%" }}>
              2.1
            </div>
            <div style={{ height: "10%" }}>
              2.1
            </div>
          </Col>
        </Row>
    </MainLayout>
  )
}

export default Pos