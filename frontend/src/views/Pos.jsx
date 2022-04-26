import React from 'react'
import { ButtonGroup, Col, Dropdown, DropdownButton, Row, Table } from 'react-bootstrap'
import MyButton from '../components/MyButton'
import MyInput from '../components/MyInput'
import MySelect from '../components/MySelect'
import MainLayout from '../layouts/MainLayout'
import { ArrowLeftCircleFill, ArrowRightCircleFill, PlusCircle, Save2Fill } from 'react-bootstrap-icons';

function Pos() {
  return (
    <MainLayout>
        {/* <Row className="g-0 h-25 mt-3">
          <Col>
            <Row className="px-3">
              <Col className="col-sm-8">
                <MyInput theType="text" theclassName="form-control" thePlaceholder="Search Product"/>
              </Col>
              <Col className="col-sm-2 g-0">
              <MySelect theclassName="form-select">
                <option selected>UOM</option>
                <option value="1">PCS</option>
                <option value="2">YDS</option>
                <option value="3">MTR</option>
              </MySelect>
              </Col>
              <Col className="col-sm-1 g-0">
                <MyInput theType="text" theclassName="form-control" thePlaceholder="Qty"/>
              </Col>
              <Col className="col-sm-1 g-0">
                <MyButton theType="button" theclassName="button btn-primary" theText="+"/>
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
                  <div className="form-group">
                    <select className="form-control">
                      <option>UOM</option>
                      <option>PCS</option>
                      <option>YDS</option>
                      <option>MTR</option>
                    </select>
                  </div>
                </div>
                <div className="col-2">
                  <div className="form-group">
                    <input type="number" className="form-control" placeholder="Qty"/>
                  </div>
                </div>
                <div className="col-2">
                  <MyButton theType="button" theclassName="btn btn-primary form-control w-100" theText="Add"></MyButton>
                </div>
              </form>
            </div>
          </Col>
          <Col className="p-4">
            <div style={{ height: "90%" }}>
              <div style={{ height: "12.5%" }}>
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
              </div>
              <div style={{ height: "77.5%", fontWeight: "normal" }} className="pt-5 px-2 h5">
                <form>
                  <div className="form-group row mb-5">
                    <div className="col-2">
                      Member
                    </div>
                    <div className="col-1">
                      :
                    </div>
                    <div className="col-2">
                      X123456
                    </div>
                    <div className="col text-end">
                      barcode
                    </div>
                  </div>
                  <div className="form-group row mb-3">
                    <div className="col-2">
                      Subtotal
                    </div>
                    <div className="col-1">
                      :
                    </div>
                    <div className="col text-end">
                      0
                    </div>
                  </div>
                  <div className="form-group row mb-3">
                    <div className="col-2">
                      Discount
                    </div>
                    <div className="col-1">
                      :
                    </div>
                    <div className="col text-end">
                      0
                    </div>
                  </div>
                  <div className="form-group row mb-3">
                    <div className="col-2">
                      Tax
                    </div>
                    <div className="col-1">
                      :
                    </div>
                    <div className="col text-end">
                      0
                    </div>
                  </div>
                  <div className="form-group row mb-3">
                    <div className="col-2">
                      Total Bill
                    </div>
                    <div className="col-1">
                      :
                    </div>
                    <div className="col text-end">
                      0
                    </div>
                  </div>
                  <div className="form-group row mb-3">
                    <div className="col-2">
                      Bayar
                    </div>
                    <div className="col-1">
                      :
                    </div>
                    <div className="col text-end">
                      0
                    </div>
                  </div>
                  <div className="form-group row mb-3">
                    <div className="col-2">
                      Kembalian
                    </div>
                    <div className="col-1">
                      :
                    </div>
                    <div className="col text-end">
                      0
                    </div>
                  </div>
                  <div className="form-group row mb-3">
                    <div className="col-2">
                      Via
                    </div>
                    <div className="col-1">
                      :
                    </div>
                    <div className="col text-end">
                      <DropdownButton id="dropdown-basic-button" title="Metode Pembayaran">
                        <Dropdown.Item href="#/action-1">Cash</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Transfer</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Credit</Dropdown.Item>
                      </DropdownButton>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div style={{ height: "10%" }} className="pt-3">
              <MyButton theType="button" theClass="btn w-100" theText="Settle"/>
            </div>
          </Col>
        </Row>
    </MainLayout>
  )
}

export default Pos