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
    const [gid, setGid] = useState(id);
    const [groupname, setGroupname] = useState('');
    const [unit, setUnit] = useState('');
    const [taxRate, setTaxrate] = useState('');
    const [productItem, setProductitem] = useState('');
    const [discount, setDiscount] = useState('');
    const [ hsncode, setHsncode] = useState('');
    const [category, setCategory] = useState('');
    const [qty, setQty] = useState('');
    const [ShelfLife, setShelflife] = useState('');
    const [minqty, setMinqty] = useState('');
    const [maxqty, setMaxqty] = useState('');
    const [barcodeqty, setBarcodeqty] = useState('');
    const [natureitem, setNatureitem] = useState('');

     const [sellratetx, setSellratetx] = useState(true);
    const [purchesratetx, setPurchasetx] = useState(true);
    const [onlineapp, setOnlineapp] = useState(true);
   
   
    useEffect(() => {

    
      
        if(status === "true"){
            
        fetch("https://dagduteli.com/Inventory/backend/GroupList.php?gid="+id)
        .then(res => res.json())
        .then(
          (result) => {
              
            setGroupname(result[0].Group_name);
            setTaxrate(result[0].Tax_RATE);
            setDiscount(result[0].Discount_rate);
            setProductitem(result[0].ProductionItem);
            setHsncode(result[0].HSNSACCode);
            setCategory(result[0].Item_Category);
            setQty(result[0].Item_Qty);
            setShelflife(result[0].Item_ShelfLife);
            setMinqty(result[0].Min_Re_Order_qty );
            setMaxqty(result[0].Max_Re_Order_qty);
            setBarcodeqty(result[0].BarcodeLabel_Qty);
            setNatureitem(result[0].NatureofItem);
            setUnit(result[0].Measuring_Unit);

            if(result[0].SellRatesInclusiveTax === 1){
                setSellratetx(true);
            }else{
                setSellratetx(false);
            }
            
            if(result[0].PurcRatesInclusiveTax === 1){
                setPurchasetx(true);
            }else{
                setPurchasetx(false);
            }
            if(result[0].OnlineActive === 1){
                setOnlineapp(true);
            }else{
                setOnlineapp(false);
            }
            
            status="false";
            
          }
        );   
    }else{
        console.log((sellratetx));
    }
    });

    function create() {
        const data = new FormData() 
        data.append('gid', gid)
         data.append('groupname', groupname)
         data.append('tax',taxRate)
         data.append('discount', discount)
         data.append('minqty', minqty)
         data.append('unit', unit)
         data.append('barcodeqty', barcodeqty)
         data.append('category', category)
         data.append('qty',qty)         
         data.append('shelflife', ShelfLife)
         data.append('proditem', productItem)
         data.append('hsn', hsncode)
         data.append('maxqty', maxqty)
         data.append('sellratetx',sellratetx)
         data.append('purchesratetx',purchesratetx)
         data.append('onlineapp', onlineapp)
         data.append('natureitem', natureitem)         
         
         let url = "https://dagduteli.com/Inventory/backend/updateGroup.php";
         axios.post(url, data, { })
         .then(res => { // then print response status
             console.warn(res);
         })
        }  

        function fetchData() {
            console.log("Unit")
            let url = "https://dagduteli.com/Inventory/backend/UnitList.php" 
            axios.post(url, { })
            .then(res => { // then print response status
                alert("Group Update successfully")
                console.warn(res.data);
                history.push('/home');
            })
        }

    return(
        <div>
        <div class="MuiPaper-root MuiCard-root MuiPaper-elevation3 MuiPaper-rounded" style={{ padding:"20px" }}>
            <div class="flex p-4"><h4 class="m-0"><b>Update Group</b></h4></div>
            <hr  style={{marginTop:"-15px",marginBottom:"12px"}}></hr>

            <Grid >
                <Row className="show-grid">
                    <Col md={3}>
                        
                    <label style={{ width:"100%",marginLeft:"30%",marginTop:"20px"}}>Group Name :</label>

                    <input 
                    type="text" 
                    name="Id" 
                    style={{ width:"100%",marginLeft:"30%"}}
                    id="outlined-size-small"
                    defaultValue={groupname}
                    onChange={e => setGroupname(e.target.value)}
                    variant="outlined"
                    size="small"
                    
               ></input>
                    </Col>

                    <Col md={3}>
                    <label style={{ width:"100%",marginLeft:"30%",marginTop:"20px"}}>Tax Rate : </label>

                    <input 
                    type="text" 
                    name="Id" 
                    style={{ width:"100%",marginLeft:"30%"}}
                    id="outlined-size-small"
                    defaultValue={taxRate}
                    onChange={e => setTaxrate(e.target.value)}
                            variant="outlined"
                            size="small"
                   ></input>
                    </Col>

                    <Col md={3}>
                    <label style={{ width:"100%",marginLeft:"30%",marginTop:"20px"}}>Discount Rate : </label>

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
                </Row>

                <Row className="show-grid">
                    <Col md={3}>
                    <label style={{ width:"100%",marginLeft:"30%",marginTop:"20px"}}>Product Item : </label>

                    <input 
                    type="text" 
                    name="Id" 
                    style={{ width:"100%",marginLeft:"30%"}}
                    id="outlined-size-small"
                            defaultValue={productItem}
                            variant="outlined"
                            size="small"
                            onChange={e => setProductitem(e.target.value)}></input>
                    </Col>

                    <Col md={3}>
                    <label style={{ width:"100%",marginLeft:"30%",marginTop:"20px"}}>HSN Code : </label>

                    <input 
                    type="text" 
                    name="Id" 
                    style={{ width:"100%",marginLeft:"30%"}}
                    id="outlined-size-small"
                            defaultValue={hsncode}
                            variant="outlined"
                            size="small"
                            onChange={e => setHsncode(e.target.value)}></input>
                    </Col>

                    <Col md={3}>
                    <FormControl variant="outlined"    style={{ width:"100%",marginLeft:"30%" ,marginTop:"50px",backgroundColor:"#fff"}} >
                            
                             <AsyncSelect 
                                 styles={{backgroundColor:"#000"  }}
                                 value={unit}
                                 loadOptions={fetchData}
                                 placeholder="Measuring Unit"
                                 onChange={e => setUnit(e.target.value)}
                                 defaultOptions={true}
                            />
                    </FormControl>
                        
                    </Col>
                </Row>

                <Row className="show-grid">
                    <Col md={3}>
                    <label style={{ width:"100%",marginLeft:"30%",marginTop:"20px"}}>Item Category: </label>

                    <input 
                    type="text" 
                    name="Id" 
                    style={{ width:"100%",marginLeft:"30%"}}
                    id="outlined-size-small"
                            defaultValue={category}
                            variant="outlined"
                            size="small"
                            onChange={e => setCategory(e.target.value)}></input>
                    </Col>

                    <Col md={3}>
                    <label style={{ width:"100%",marginLeft:"30%",marginTop:"20px"}}>Item Qty. : </label>

                    <input 
                    type="text" 
                    name="Id" 
                    style={{ width:"100%",marginLeft:"30%"}}
                    id="outlined-size-small"
                            defaultValue={qty}
                            variant="outlined"
                            size="small"
                            onChange={e => setQty(e.target.value)}></input>
                    </Col>

                    <Col md={3}>
                    <label style={{ width:"100%",marginLeft:"30%",marginTop:"20px"}}>Item ShelfLife : </label>

                    <input 
                    type="text" 
                    name="Id" 
                    style={{ width:"100%",marginLeft:"30%"}}
                    id="outlined-size-small"
                            defaultValue={ShelfLife}
                            variant="outlined"
                            size="small"
                            onChange={e => setShelflife(e.target.value)}></input>
                    </Col>
                </Row>

                <Row className="show-grid">
                    <Col md={3}>
                    <label style={{ width:"100%",marginLeft:"30%",marginTop:"20px"}}>Min Re-Order Qty : </label>

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
                    <label style={{ width:"100%",marginLeft:"30%",marginTop:"20px"}}>Max Re-Order Qty : </label>

                    <input 
                    type="text" 
                    name="Id" 
                    style={{ width:"100%",marginLeft:"30%"}}
                    id="outlined-size-small"
                            defaultValue={maxqty}
                            variant="outlined"
                            size="small"
                            onChange={e => setMaxqty(e.target.value)}></input>
                    </Col>

                    <Col md={3}>
                    <label style={{ width:"100%",marginLeft:"30%",marginTop:"20px"}}>Barcode Lable Qty : </label>

                    <input 
                    type="text" 
                    name="Id" 
                    style={{ width:"100%",marginLeft:"30%"}}
                    id="outlined-size-small"
                            defaultValue={barcodeqty}
                            variant="outlined"
                            size="small"
                            onChange={e => setBarcodeqty(e.target.value)}></input>
                    </Col>
                </Row>


                <Row className="show-grid">
                    <Col md={3}>

                    <select  variant="outlined" style={{height:"40px", width:"100%",marginLeft:"30%" ,marginTop:"20px"}} onChange={e => setNatureitem(e.target.value)} >           
                    <option value={natureitem}>{natureitem}</option>
                     <option value="Goods">Goods</option>
                     <option value="Services">Services</option>
                    </select>

                        
                    
                    </Col>

                    <Col md={2}>

                    
                    <FormControlLabel
                          
                           style={{ width:"100%",marginLeft:"30%" ,marginTop:"20px"}}
                           control={<Checkbox  name="checkedA" />}
                           value={sellratetx}
                           onChange={() => setSellratetx(sellratetx => !sellratetx)}
                           label="Sell Rates Inclusive Tax "
                       />
                      
                    </Col>

                    <Col md={2}>
                    <FormControlLabel
                          
                           style={{ width:"100%",marginLeft:"30%" ,marginTop:"20px"}}
                           control={<Checkbox  name="checkedA" />}
                           value={purchesratetx}
                           onChange={() => setPurchasetx(purchesratetx => !purchesratetx)}
                           label="Purchase Rates Inclusive Tax "
                       />
                       
                    </Col>
                    <Col md={2}>
                    <FormControlLabel
                          
                          style={{ width:"100%",marginLeft:"30%" ,marginTop:"20px"}}
                          control={<Checkbox  name="checkedA" />}
                          value={onlineapp}
                          onChange={() => setOnlineapp(onlineapp => !onlineapp)}
                          label="Online App "
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


