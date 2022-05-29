import React, { useEffect, useState } from 'react'
import { Col, Dropdown, DropdownButton, Form, Row, Table } from 'react-bootstrap'
import MyButton from '../../components/MyButton'
import MyInput from '../../components/MyInput'
import MainLayout from '../../layouts/MainLayout'
import '../../css/pos.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PosTable from './PosTable'
import PosTableInput from './PosTableInput'
import PosOptionButton from './PosOptionButton'

function Pos() {
  const alertProduct = () => toast.error(formErrors.newProduct);
  const alertUom = () => toast.error(formErrors.newUom);
  const alertQty = () => toast.error(formErrors.newQty);

  const newData = { newProduct: "", newUom: "", newQty: 0 };
  const [totalPrice, setTotalPrice] = useState(0);
  const [datas, setDatas] = useState([]);
  const [formData, setFormData] = useState(newData);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value})
  }

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setFormErrors(validate(formData));
    if(Object.keys(formErrors).length === 0) {
      console.log(document.getElementById("newProduct").value);
      setIsSubmit(true);
      setTotalPrice(datas.reduce((total,currentValue) => total = total + (currentValue.newQty * 1000), 0) + formData.newQty * 1000);
    }
  }

  const deleteRow = (e) => {
    const filteredData = datas.filter((item, index) => index !== e);
    setDatas([...filteredData]);
  }

  // called after submit
  useEffect(() => {
    if(isSubmit) {
      setDatas(
        arr => [
          ...arr,
          formData
      ])
      setIsSubmit(false);
    }
  }, [isSubmit]);

  useEffect(() => {    
    ResetAllInput();
  }, [datas])

  const validate = (values) => {
    const errors = {};    
    if(!values.newProduct || values.newProduct === "" || document.getElementById("newProduct").value === "") {
      errors.newProduct = "Product Is Required!"
      alertProduct();
    }
    if(!values.newUom || values.newUom === "" || document.getElementById("newUom").value === "") {
      errors.newUom = "UOM Is Required!"
      alertUom();
    }
    if(!values.newQty || values.newQty === "" || document.getElementById("newQty").value === "") {
      errors.newQty = "Qty Cannot Be 0!"
      alertQty();
    }

    return errors;
  }

  const ResetAllInput = () => {
    document.getElementById("newProduct").value = '';
    document.getElementById("newUom").value = '';
    document.getElementById("newQty").value = '';
    setFormData(newData);
  }

  return (
    <MainLayout>
      <ToastContainer
      position="top-center"
      autoClose={1000}
      hideProgressBar={true}
      />
        <Row className="h-100 g-0">
          <Col className="p-4">
            <div style={{ height: "90%", border: "4px solid #2196F3", marginBottom:"14px" }} >
              <PosTable datas={datas} deleteRow={deleteRow}/>
            </div>
            <div style={{ height: "10%" }}>
              <PosTableInput handleSubmitForm={handleSubmitForm} handleChange={handleChange} formErrors={formErrors} />              
            </div>
          </Col>
          <Col className="p-4">
            <div style={{ height: "12.5%" }}>
              <PosOptionButton />              
            </div>
            <div style={{ height: "67.5%", fontWeight: "normal" }} className="pt-5 px-2 h5">
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
                    {totalPrice}
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
            <div style={{ height: "20%" }} className="pt-3">
                <MyButton theType="button" theClass="btn btn-primary w-100 pos-button" theText="Settle"/>
                <MyButton theType="button" theClass="btn btn-primary w-100 pos-button mt-3" theText="Print Ulang"/>
            </div>
          </Col>
        </Row>
    </MainLayout>
  )
}

export default Pos