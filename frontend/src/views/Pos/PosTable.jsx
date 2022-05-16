import React from 'react'
import { Table } from 'react-bootstrap'
import MyButton from '../../components/MyButton'
import { TrashFill } from 'react-bootstrap-icons';

const PosTable = (props) => {
  return (
    <div style={{ overflowY:"scroll", display:"block", height:"585.28px" }}>
                <Table borderless style={{ marginBottom:"0" }}>
                  <thead style={{ position:"sticky", top:"0" }}>
                    <tr>
                      <th colSpan="4" className="text-center" style={{ borderBottom: "1px solid #2196F3", backgroundColor:"white", position:"sticky", top:"0px" }} >List Pesanan</th>
                    </tr>
                    <tr style={{ position:"sticky", top:"41px", borderBottom: "4px solid #2196F3", backgroundColor:"white" }}>
                      <th>Nama Barang</th>
                      <th>Harga</th>
                      <th>Qty</th>
                      <th>Total</th>
                    </tr>
                    <tr>
                    </tr>
                  </thead>
                  <tbody>
                      {props.datas.filter(f => f.newProduct !== "").map((item, index) => (
                      <tr id={index} key={index} style={{ borderTop:"none", borderBottom:"none" }}>
                        <td>
                          {item.newProduct}
                          <MyButton theStyle={{padding: "1px 6px", float:"right", border:"none", backgroundColor:"white", color:"red"}}
                            theText={<TrashFill/>}
                            onClick={(e) => props.deleteRow(index, e)}>
                          </MyButton>
                        </td>
                        <td>1000</td>
                        <td>
                          {item.newQty}
                        </td>
                        <td>{1000 * item.newQty}</td>
                      </tr>
                      ))}
                  </tbody>
                </Table>
              </div>
  )
}

export default PosTable