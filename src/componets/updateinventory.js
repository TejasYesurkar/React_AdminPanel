import React, { Component } from 'react'
import { useState,useEffect,useRef  } from "react";
import { Route, useParams } from "react-router-dom";
import { Grid, TextField } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import AsyncSelect from "react-select/async";
import {FormCheck, Col,  Row } from 'react-bootstrap'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import axios from 'axios';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import { useHistory } from "react-router-dom";

let status ="true"
function UpdateGroup(props) {

    const history = useHistory();

    const [group,setGroup]=useState({});
    let { id } = useParams();
    const [invid, setInvid] = useState(id);
    const [groupname, setGroupname] = useState('');
    const [subgroup, setSubGroup] = useState('');
    const [productname, setProductname] = useState('');
    const [devanagari, setDevanagari ] = useState('');
    const [description, setDescription ] = useState('');
    const [descriptiom, setDiscripition] = useState('');
    const [productlisting, setProductlisting] = useState('');
    const [unit, setUnit] = useState('');
    const [hsn, setHsn] = useState('');
    const [taxrate, setTaxrate] = useState('');
    const [purchaserate, setPurchaserate] = useState('');
    const [mrp, setMrp] = useState('');
    const [discount, setDiscount] = useState('');
    const [salerate, setSalerate] = useState('');
    const [salerate1, setSalerate1] = useState('');
    const [salerate2, setSalerate2] = useState('');

    const [minqty, setMinqty] = useState('');
    const [maxqty, setMaxqty] = useState('');
    const [barcodeqty, setBarcode] = useState('');
     const [sku, setSku] = useState('');
    const [shelfrackno, setShelfrack] = useState('');
    const [shelflife, setShelflife] = useState('');
    const [itemanalysis, setItemanalysis] = useState('');
    const [natureitem, setNatureitem] = useState('');
    const [image, setSelectimage] = useState('');
    const [activeitem, setActiveitem] = useState(true);
    const [activeapp, setActiveapp] = useState(false);
   
   
    useEffect(() => {

    
      
        if(status === "true"){
            
        fetch("https://dagduteli.com/Inventory/backend/inventoryList.php?id="+id)
        .then(res => res.json())
        .then(
          (result) => {
            setProductname(result[0].Item_Name);
            setDevanagari(result[0].DevnagiriName);
            setGroupname(result[0].Item_Group);
            setSubGroup(result[0].Item_SubGroup);
            setDescription(result[0].Item_Description );
            setProductlisting(result[0].productListing);
            setUnit(result[0].Measuring_Unit);
            setHsn(result[0].HSNSACCode);

            setTaxrate(result[0].VAT_RATE);
            setPurchaserate(result[0].purchase_rate);
            setDiscount(result[0].Discount_rate);
            setMrp(result[0].MRP);
            setSalerate(result[0].Item_Rate);
            setSalerate1(result[0].Item_Rate1);
            setSalerate2(result[0].Item_Rate2);

            setMinqty(result[0].Min_Re_Order_qty);
            setMaxqty(result[0].Max_Re_Order_qty);
            setBarcode(result[0].BarcodeLabel_Qty);
            
            setSku(result[0].SKU);
            setShelfrack(result[0].Shelf_No);
            setShelflife(result[0].Item_ShelfLife);
            setItemanalysis(result[0].ItemAnalysis);
            setNatureitem(result[0].Item_Category);
            setSelectimage(result[0].Item_Image);

            if(result[0].OnlineActive === 1){
                setActiveapp(true);
            }else{
                setActiveapp(false);
            }
            
            if(result[0].Active_Item === 1){
                setActiveitem(true);
            }else{
                setActiveitem(false);
            }
            
            status="false";
            
          }
        );   
    }else{
        console.log((activeapp));
    }
    });

    function create() {
        const data = new FormData() 
        data.append('id', invid)
         data.append('itemGrp', groupname)
         data.append('itemSubgrp',subgroup)
         data.append('mrp', mrp)
         data.append('salesRate',salerate)
         data.append('taxRate', taxrate)
         data.append('unit', unit)
         data.append('shelfRackNo',shelfrackno)
         data.append('shelfLife',shelflife)         
         data.append('hsna',hsn)
         data.append('SKKU', sku)
         data.append('hsn', hsn)
         data.append('itemDesc',description)
         data.append('barcodeQty',barcodeqty)
         data.append('salesRate1',setSalerate1)
         data.append('salesRate2', salerate2)
         data.append('MaxReOrderQty',maxqty)         
         
         data.append('MinReOrderQty', minqty)
         data.append('PurchesRate',purchaserate)
         data.append('discountRate', discount)
         data.append('onlineapp',activeapp)       
         
         data.append('itemCategory', natureitem)
         data.append('devnagiri',devanagari)
         data.append('itemID',invid)
          
         
         let url = "https://dagduteli.com/Inventory/backend/updateInventory.php";
         axios.post(url, data, { })
         .then(res => { // then print response status
             console.warn(res);
             history.push('/home');
         })
        }  

        function fetchData() {
            console.log("Unit")
            let url = "https://dagduteli.com/Inventory/backend/UnitList.php" 
            axios.post(url, { })
            .then(res => { // then print response status
                alert("Group Update successfully")
                console.warn(res.data);
            })
        }

    return(
        <div>
        <div class="MuiPaper-root MuiCard-root MuiPaper-elevation3 MuiPaper-rounded" style={{ padding:"20px" }}>
            <div class="flex p-4"><h4 class="m-0"><b>Update Inventory</b></h4></div>
            <hr  style={{marginTop:"-15px",marginBottom:"12px"}}></hr>

            <Grid >
                <Row className="show-grid">
                    <Col md={3}>
                        
                    <label style={{ width:"100%",marginLeft:"30%",marginTop:"20px"}}>Group Name :</label>

                    <input 
                    type="text" 
                    name="Product" 
                    style={{ width:"100%",marginLeft:"30%"}}
                    id="outlined-size-small"
                    defaultValue={groupname}
                    onChange={e => setGroupname(e.target.value)}
                    variant="outlined"
                    size="small"
                    
               ></input>
                    </Col>

                    <Col md={3}>
                    <label style={{ width:"100%",marginLeft:"30%",marginTop:"20px"}}>Sub Group : </label>

                    <input 
                    type="text" 
                    name="Id" 
                    style={{ width:"100%",marginLeft:"30%"}}
                    id="outlined-size-small"
                    defaultValue={subgroup}
                    onChange={e => setSubGroup(e.target.value)}
                            variant="outlined"
                            size="small"
                   ></input>
                    </Col>

                    <Col md={3}>
                    <label style={{ width:"100%",marginLeft:"30%",marginTop:"20px"}}>Product Name : </label>

                    <input 
                    type="text" 
                    name="Id" 
                    style={{ width:"100%",marginLeft:"30%"}}
                    id="outlined-size-small"
                            defaultValue={productname}
                            variant="outlined"
                            size="small"
                            onChange={e => setProductname(e.target.value)}></input>
                    </Col>
                </Row>

                <Row className="show-grid">
                    <Col md={3}>
                    <label style={{ width:"100%",marginLeft:"30%",marginTop:"20px"}}>SKU : </label>

                    <input 
                    type="text" 
                    name="Id" 
                    style={{ width:"100%",marginLeft:"30%"}}
                    id="outlined-size-small"
                            defaultValue={sku}
                            variant="outlined"
                            size="small"
                            onChange={e => setSku(e.target.value)}></input>
                    </Col>

                    <Col md={3}>
                    <label style={{ width:"100%",marginLeft:"30%",marginTop:"20px"}}>Description: </label>

                    <input 
                    type="text" 
                    name="Id" 
                    style={{ width:"100%",marginLeft:"30%"}}
                    id="outlined-size-small"
                            defaultValue={description}
                            variant="outlined"
                            size="small"
                            onChange={e => setDescription(e.target.value)}></input>
                    </Col>

                    <Col md={3}>
                    <label style={{ width:"100%",marginLeft:"30%",marginTop:"20px"}}>HSN code: </label>

                    <input 
                    type="text" 
                    name="Id" 
                    style={{ width:"100%",marginLeft:"30%"}}
                    id="outlined-size-small"
                            defaultValue={hsn}
                            variant="outlined"
                            size="small"
                            onChange={e => setHsn(e.target.value)}></input>
                        
                    </Col>
                </Row>

                <Row className="show-grid">
                    <Col md={3}>
                    <label style={{ width:"100%",marginLeft:"30%",marginTop:"20px"}}>Unit: </label>

                    <input 
                    type="text" 
                    name="Id" 
                    style={{ width:"100%",marginLeft:"30%"}}
                    id="outlined-size-small"
                            defaultValue={unit}
                            variant="outlined"
                            size="small"
                            onChange={e => setUnit(e.target.value)}></input>
                    </Col>

                    <Col md={3}>
                    <label style={{ width:"100%",marginLeft:"30%",marginTop:"20px"}}>Tax (%). : </label>

                    <input 
                    type="text" 
                    name="Id" 
                    style={{ width:"100%",marginLeft:"30%"}}
                    id="outlined-size-small"
                            defaultValue={taxrate}
                            variant="outlined"
                            size="small"
                            onChange={e => setTaxrate(e.target.value)}></input>
                    </Col>

                    <Col md={3}>
                    <label style={{ width:"100%",marginLeft:"30%",marginTop:"20px"}}>Purchase Rate : </label>

                    <input 
                    type="text" 
                    name="Id" 
                    style={{ width:"100%",marginLeft:"30%"}}
                    id="outlined-size-small"
                            defaultValue={purchaserate}
                            variant="outlined"
                            size="small"
                            onChange={e => setPurchaserate(e.target.value)}></input>
                    </Col>
                </Row>

                <Row className="show-grid">
                    <Col md={3}>
                    <label style={{ width:"100%",marginLeft:"30%",marginTop:"20px"}}>Sales Rate: </label>

                        <input 
                        type="text" 
                        name="Id" 
                        style={{ width:"100%",marginLeft:"30%"}}
                        id="outlined-size-small"
                                defaultValue={salerate}
                                variant="outlined"
                                size="small"
                                onChange={e => setSalerate(e.target.value)}></input>
                    </Col>

                    <Col md={3}>
                   
                    <label style={{ width:"100%",marginLeft:"30%",marginTop:"20px"}}>MRP: </label>

                    <input 
                    type="text" 
                    name="Id" 
                    style={{ width:"100%",marginLeft:"30%"}}
                    id="outlined-size-small"
                            defaultValue={mrp}
                            variant="outlined"
                            size="small"
                            onChange={e => setMrp(e.target.value)}></input>
                    </Col>

                    <Col md={3}>
                    <label style={{ width:"100%",marginLeft:"30%",marginTop:"20px"}}>Sales Rate1: </label>

                    <input 
                    type="text" 
                    name="Id" 
                    style={{ width:"100%",marginLeft:"30%"}}
                    id="outlined-size-small"
                            defaultValue={salerate1}
                            variant="outlined"
                            size="small"
                            onChange={e => setSalerate1(e.target.value)}></input>
                    </Col>
                </Row>

                <Row className="show-grid">
                    <Col md={3}>
                    <label style={{ width:"100%",marginLeft:"30%",marginTop:"20px"}}>Sales Rate2: </label>

                    <input 
                    type="text" 
                    name="Id" 
                    style={{ width:"100%",marginLeft:"30%"}}
                    id="outlined-size-small"
                            defaultValue={salerate2}
                            variant="outlined"
                            size="small"
                            onChange={e => setSalerate2(e.target.value)}></input>
                    </Col>

                    <Col md={3}>
                    <label style={{ width:"100%",marginLeft:"30%",marginTop:"20px"}}>Discount: </label>

                    <input 
                    type="text" 
                    name="Id" 
                    style={{ width:"100%",marginLeft:"30%"}}
                    id="outlined-size-small"
                            defaultValue={discount}
                            variant="outlined"
                            size="small"
                            onChange={e => setDiscount(e.target.value)}></input>
                    </Col>

                    <Col md={3}>
                    <label style={{ width:"100%",marginLeft:"30%",marginTop:"20px"}}>Devnagiri Name: </label>

                    <input 
                    type="text" 
                    name="Id" 
                    style={{ width:"100%",marginLeft:"30%"}}
                    id="outlined-size-small"
                            defaultValue={devanagari}
                            variant="outlined"
                            size="small"
                            onChange={e => setDevanagari(e.target.value)}></input>
                    </Col>
                </Row>

                <Row className="show-grid">
                    <Col md={3}>
                    <label style={{ width:"100%",marginLeft:"30%",marginTop:"20px"}}>Min Re-order Qty: </label>

                    <input 
                    type="text" 
                    name="Id" 
                    style={{ width:"100%",marginLeft:"30%"}}
                    id="outlined-size-small"
                            defaultValue={minqty}
                            variant="outlined"
                            size="small"
                            onChange={e => setMinqty(e.target.value)}></input>
                    </Col>

                    <Col md={3}>
                    <label style={{ width:"100%",marginLeft:"30%",marginTop:"20px"}}>Max- Re-order qty: </label>

                    <input 
                    type="text" 
                    name="Id" 
                    style={{ width:"100%",marginLeft:"30%"}}
                    id="outlined-size-small"
                            defaultValue={maxqty}
                            variant="outlined"
                            size="small"
                            onChange={e => setMinqty(e.target.value)}></input>
                    </Col>

                    <Col md={3}>
                    <label style={{ width:"100%",marginLeft:"30%",marginTop:"20px"}}>Shelf Life: </label>

                    <input 
                    type="text" 
                    name="Id" 
                    style={{ width:"100%",marginLeft:"30%"}}
                    id="outlined-size-small"
                            defaultValue={shelflife}
                            variant="outlined"
                            size="small"
                            onChange={e => setShelflife(e.target.value)}></input>
                    </Col>
                </Row>


                <Row className="show-grid">
                    <Col md={3}>
                    <label style={{ width:"100%",marginLeft:"30%",marginTop:"20px"}}>shelf Rack No: </label>

                    <input 
                    type="text" 
                    name="Id" 
                    style={{ width:"100%",marginLeft:"30%"}}
                    id="outlined-size-small"
                            defaultValue={shelfrackno}
                            variant="outlined"
                            size="small"
                            onChange={e => setShelfrack(e.target.value)}></input>
                    </Col>

                    <Col md={3}>
                    <label style={{ width:"100%",marginLeft:"30%",marginTop:"20px"}}>Nature Item: </label>
                  
                    <select  variant="outlined" style={{height:"40px", width:"100%",marginLeft:"30%" }} onChange={e => setNatureitem(e.target.value)} >           
                    <option value={natureitem}>{natureitem}</option>
                     <option value="Goods">Goods</option>
                     <option value="Services">Services</option>
                    </select>

                    </Col>

                    <Col md={3}>
                    <label style={{ width:"100%",marginLeft:"30%",marginTop:"20px"}}>Barcode Qty: </label>

                    <input 
                    type="text" 
                    name="Id" 
                    style={{ width:"100%",marginLeft:"30%"}}
                    id="outlined-size-small"
                            defaultValue={barcodeqty}
                            variant="outlined"
                            size="small"
                            onChange={e => setBarcode(e.target.value)}></input>
                    </Col>
                </Row>

                
                <Row className="show-grid">
                    <Col md={3}>
                    <label style={{ width:"100%",marginLeft:"30%",marginTop:"20px"}}>Item Analysis: </label>

                    <input 
                    type="text" 
                    name="Id" 
                    style={{ width:"100%",marginLeft:"30%"}}
                    id="outlined-size-small"
                            defaultValue={itemanalysis}
                            variant="outlined"
                            size="small"
                            onChange={e => setItemanalysis(e.target.value)}></input>
                    </Col>

                    <Col md={3}>
                    <label style={{ width:"100%",marginLeft:"30%",marginTop:"20px"}}>Product Listing: </label>
                    <select  id="outlined-size-small" variant="outlined" style={{height:"40px", width:"100%",marginLeft:"30%" }} onChange={e => setNatureitem(e.target.value)} >           
                    <option value={natureitem}>{natureitem}</option>
                     <option value="Goods">Goods</option>
                     <option value="Services">Services</option>
                    </select>

                    </Col>

                    <Col md={3}>
                    <label style={{ width:"100%",marginLeft:"30%",marginTop:"20px"}}>Select Image: </label>

                 
                    </Col>
                </Row>

                 <Row className="show-grid">
                    <Col md={3}>
            
                    
                    <FormControlLabel
                          
                           style={{ width:"100%",marginLeft:"30%" ,marginTop:"20px"}}
                           control={<Checkbox  name="checkedA" />}
                           value={activeapp}
                           onChange={() => setActiveapp(activeapp => !activeapp)}
                           label="Online App"
                       />
                      
                    </Col>

                   
                </Row>

                <Row className="show-grid"  style={{ marginLeft:"90px",marginBottom:"50px"}}>
                    <Col md={6}>
                        <Button variant="contained" color="primary" onClick={()=>{ create()}}>
                                Submit
                        </Button>
                    </Col>
                </Row>
            </Grid>
        
        </div>
   </div>
    );
    
}
export default UpdateGroup


