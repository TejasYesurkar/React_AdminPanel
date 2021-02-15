import React from 'react'
import { useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import { Grid} from '@material-ui/core'
import Button from '@material-ui/core/Button';

import { Col,  Row } from 'react-bootstrap'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import axios from 'axios';
import Checkbox from '@material-ui/core/Checkbox';

import { useHistory } from "react-router-dom";
let status ="true"
function UpdateGroup(props) {

    const history = useHistory();
    const [group,setGroup]=useState({});
    let { id } = useParams();
    const [cid, setCid] = useState(id);
    const [partyname, setPartyname] = useState('');
    const [printname, setPrintname] = useState('');
    const [mobile, setMobile] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [address, setAddress] = useState('');
    const [accounttype, setAccounttype] = useState('');
   
    const [smsnotification, setNotification] = useState(true);
   
   
    useEffect(() => {

    
      
        if(status === "true"){
            
        fetch("https://dagduteli.com/Inventory/backend/customerList.php?cid="+id)
        .then(res => res.json())
        .then(
          (result) => {
              
            setPartyname(result[0].Party_Name);
            setMobile(result[0].Party_Mob);
            setCity(result[0].Party_City);
            setState(result[0].Party_State);
            setCity(result[0].Party_City);
            setAddress(result[0].Party_Add_1);
            setAccounttype(result[0].Account_Type);
            

            if(result[0].SellRatesInclusiveTax === 1){
                setNotification(true);
            }else{
                setNotification(false);
            }
            
          
            status="false";
            
          }
        );   
    }else{
        console.log((partyname));
    }
    });

    function create() {
        const data = new FormData() 
        data.append('cid', cid)
         data.append('partyname', partyname)
         data.append('mobile',mobile)
         data.append('state', state)
         data.append('city', city)
         data.append('printname', printname)
         data.append('address', address)
         data.append('accountType', accounttype)
         data.append('sendsms', smsnotification)
         
         let url = "https://dagduteli.com/Inventory/backend/updateCustomer.php";
         axios.post(url, data, { })
         .then(res => { // then print response status
             alert("Customer Update successfully")
             console.warn(res);
             history.push('/home');
         })
        }  

        

    return(
        <div>
                <div class="MuiPaper-root MuiCard-root MuiPaper-elevation3 MuiPaper-rounded">
                    <div class="flex p-4"><h4 class="m-0"><b>Update Customer Details</b></h4></div>
                    <hr  style={{marginTop:"-15px",marginBottom:"12px"}}></hr>

                    <Grid >
                <Row className="show-grid">
                    <Col md={3}>
                        
                    <label style={{ width:"100%",marginLeft:"30%",marginTop:"20px"}}>Party Name :</label>

                    <input 
                    type="text" 
                    name="Id" 
                    style={{ width:"100%",marginLeft:"30%"}}
                    id="outlined-size-small"
                    defaultValue={partyname}
                    onChange={e => setPartyname(e.target.value)}
                    variant="outlined"
                    size="small"            
               ></input>
                    </Col>

                    <Col md={3}>
                    <label style={{ width:"100%",marginLeft:"30%",marginTop:"20px"}}>Mobile No : </label>

                    <input 
                    type="text" 
                    name="Id" 
                    style={{ width:"100%",marginLeft:"30%"}}
                    id="outlined-size-small"
                    defaultValue={mobile}
                    onChange={e => setMobile(e.target.value)}
                            variant="outlined"
                            size="small"
                   ></input>
                    </Col>

                    <Col md={3}>
                    <label style={{ width:"100%",marginLeft:"30%",marginTop:"20px"}}>City : </label>

                    <input 
                    type="text" 
                    name="Id" 
                    style={{ width:"100%",marginLeft:"30%"}}
                    id="outlined-size-small"
                            defaultValue={city}
                            variant="outlined"
                            size="small"
                            onChange={e => setCity(e.target.value)}></input>
                    </Col>
                </Row>

                <Row className="show-grid">
                    <Col md={3}>
                    <label style={{ width:"100%",marginLeft:"30%",marginTop:"20px"}}>State : </label>

                    <input 
                    type="text" 
                    name="Id" 
                    style={{ width:"100%",marginLeft:"30%"}}
                    id="outlined-size-small"
                            defaultValue={state}
                            variant="outlined"
                            size="small"
                            onChange={e => setState(e.target.value)}></input>
                    </Col>

                    <Col md={3}>
                    <label style={{ width:"100%",marginLeft:"30%",marginTop:"20px"}}>Address : </label>

                    <input 
                    type="text" 
                    name="Id" 
                    style={{ width:"100%",marginLeft:"30%"}}
                    id="outlined-size-small"
                            defaultValue={address}
                            variant="outlined"
                            size="small"
                            onChange={e => setAddress(e.target.value)}></input>
                    </Col>

                    <Col md={3}>
                    
                    <label style={{ width:"100%",marginLeft:"30%",marginTop:"20px"}}>Account Type : </label>

                    <input 
                    type="text" 
                    name="Id" 
                    style={{ width:"100%",marginLeft:"30%"}}
                    id="outlined-size-small"
                            defaultValue={accounttype}
                            variant="outlined"
                            size="small"
                            onChange={e => setAccounttype(e.target.value)}></input>
                    </Col>

                    
                </Row>

               
                <Row className="show-grid"  style={{ marginLeft:"90px",marginBottom:"50px"}}>
                    <Col md={3}>
                    <FormControlLabel
                          
                          style={{ width:"100%" ,marginTop:"20px"}}
                          control={<Checkbox  name="checkedA" />}
                          value={smsnotification}
                          onChange={() => setNotification(sellratetx => !sellratetx)}
                          label="Sell Rates Inclusive Tax "
                      />
                    </Col>
                    <Col md={6}>
                        <Button variant="contained" color="primary" onClick={()=>{ create()}}   style={{ marginLeft:"30px" ,marginTop:"20px"}}>
                                Submit
                        </Button>
                        <Button variant="contained" color="primary" onClick={()=>{window.open("about:blank", "_self");window.close();}}   style={{ marginLeft:"30px"}}>
                                Cancel
                        </Button>
                    </Col>
                </Row>
            </Grid>
                </div>
            </div>
    );
    
}
export default UpdateGroup


