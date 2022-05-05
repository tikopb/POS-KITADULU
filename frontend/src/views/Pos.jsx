import React, { useEffect, useState } from 'react'
import { Col, Dropdown, DropdownButton, Row, Table } from 'react-bootstrap'
import MyButton from '../components/MyButton'
import MyInput from '../components/MyInput'
import MainLayout from '../layouts/MainLayout'
import { ArrowLeftCircleFill, ArrowRightCircleFill, PlusCircle, Save2Fill } from 'react-bootstrap-icons';
import '../css/customToast.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Pos() {
  const alertProduct = () => toast.error(formErrors.newProduct);
  const alertUom = () => toast.error(formErrors.newUom);
  const alertQty = () => toast.error(formErrors.newQty);

  const newData = { newProduct: "", newUom: "", newQty: 0 };
  const [formData, setFormData] = useState(newData);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value})
  }

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(e);
    setFormErrors(validate(formData));
    setIsSubmit(true);
  }

  useEffect(() => {
    console.log(formErrors);
    if(Object.keys(formErrors.length === 0 && isSubmit)) {
      // berhasil
      console.log(formData);
    }    
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};    
    if(!values.newProduct) {
      errors.newProduct = "Product Is Required!"
      alertProduct();
    }
    if(!values.newUom) {
      errors.newUom = "UOM Is Required!"
      alertUom();
    }
    if(!values.newQty) {
      errors.newQty = "Qty Cannot Be 0!"
      alertQty();
    }

    return errors;
  }

  const handleClickAdd = e => {
    // if(newProduct === "") alertProduct();
  }

  return (
    <MainLayout>
      <ToastContainer
      position="top-center"
      autoClose={2000}
      hideProgressBar={true}
      />  
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
              <form className="row" onSubmit={handleSubmitForm}>
                <div className="col-6">
                  <MyInput theName="newProduct" 
                            theType="search" 
                            theStyle={{ borderColor: formErrors.newProduct != null ? 'red':'' }}
                            className="form-control" 
                            thePlaceholder="Search" 
                            theValue={formData.newProduct} 
                            onChange={handleChange}/>
                  { formErrors.newProduct != null &&
                    <small style={{fontSize: "10px", color: "red"}}>{"*"+formErrors.newProduct}</small>
                  }
                </div>
                <div className="col-2">
                  <div className="form-group">
                    <select name="newUom" className="form-control" value={formData.newUom} onChange={handleChange}
                      style={{ borderColor: formErrors.newUom != null ? 'red':'' }}>
                      <option>UOM</option>
                      <option>PCS</option>
                      <option>YDS</option>
                      <option>MTR</option>
                    </select>
                  </div>
                  { formErrors.newUom != null &&
                    <small style={{fontSize: "10px", color: "red"}}>{"*"+formErrors.newUom}</small>
                  }
                </div>
                <div className="col-2">
                  <div className="form-group">
                    <MyInput theName="newQty" theType="number" theClassName="form-control" thePlaceholder="Qty" theValue={formData.newQty} onChange={handleChange} 
                    theStyle={{ borderColor: formErrors.newQty != null ? 'red':'' }}
                    />
                    { formErrors.newQty != null &&
                      <small style={{fontSize: "10px", color: "red"}}>{"*"+formErrors.newQty}</small>
                    }
                  </div>
                </div>
                <div className="col-2">
                  <MyButton theType="submit" theclassName="btn btn-primary form-control w-100" theText="Add"></MyButton>
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
                      <MyInput theType="number" theClass/>
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