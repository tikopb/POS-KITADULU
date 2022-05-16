import React from 'react'
import MyButton from '../../components/MyButton'
import MyInput from '../../components/MyInput'
import PropTypes from 'prop-types';

const PosTableInput = (props) => {
  return (
    <form className="row" onSubmit={props.handleSubmitForm}>
        <div className="col-6">
        <MyInput theID="newProduct"
                    theName="newProduct" 
                    theType="text"
                    theStyle={{ borderColor: props.formErrors.newProduct != null ? 'red':'', display:"inline" }}
                    theClass="form-control pos-input" 
                    thePlaceholder="Search"
                    onChange={props.handleChange} />
        
        { props.formErrors.newProduct != null &&
            <small style={{fontSize: "10px", color: "red"}}>{"*"+props.formErrors.newProduct}</small>
        }
        </div>
        <div className="col-2">
        <div className="form-group">
            <select name="newUom" className="form-control pos-select" onChange={props.handleChange} id="newUom"
            style={{ borderColor: props.formErrors.newUom != null ? 'red':'' }}>
            <option>UOM</option>
            <option>PCS</option>
            <option>YDS</option>
            <option>MTR</option>
            </select>
        </div>
        { props.formErrors.newUom != null &&
            <small style={{fontSize: "10px", color: "red"}}>{"*"+props.formErrors.newUom}</small>
        }
        </div>
        <div className="col-2">
        <div className="form-group">
            <MyInput theID="newQty" theName="newQty" theType="number" theClass="form-control pos-input" thePlaceholder="Qty" onChange={props.handleChange} 
            theStyle={{ borderColor: props.formErrors.newQty != null ? 'red':'' }}
            />
            { props.formErrors.newQty != null &&
            <small style={{fontSize: "10px", color: "red"}}>{"*"+props.formErrors.newQty}</small>
            }
        </div>
        </div>
        <div className="col-2">
        <MyButton theType="submit" theClass="btn btn-primary form-control pos-button" theStyle={{ width:"100%" }} theText="Add"></MyButton>
        </div>
    </form>
  )
}

PosTableInput.defaultProps = {
    formErrors: {
        newProduct: "",
        newUom: "",
        newQty: 0
    }
}

export default PosTableInput