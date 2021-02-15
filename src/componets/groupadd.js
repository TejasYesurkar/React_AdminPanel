import { Grid, TextField } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import React, { Component } from 'react'
import { Form } from 'react-bootstrap';
import { withStyles } from '@material-ui/core/styles';
import { Col,  Row } from 'react-bootstrap'
import axios from 'axios';
import FormControl from '@material-ui/core/FormControl';
import InputBase from '@material-ui/core/InputBase';

import Checkbox from '@material-ui/core/Checkbox';
import AsyncSelect from "react-select/async";

export default class Grouplist extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            groupname:"",
            tax:"0",
            discount:"0",
            proditem:"",
            hsn:"0",
            unit:"",
            category:"Regular",
            qty:"1",
            shelflife:"",
            minqty:"0",
            maxqty:"0",
            barcodeqty:"0",
            natureitem:"",
            sellratetx:true,
            purchesratetx:true,
            onlineapp:true,
            unitdata: [],

        };

      }
      componentDidMount(){
            
        fetch('https://dagduteli.com/Inventory/backend/UnitList.php').then((res)=>{
          res.json().then((result)=>{
              this.setState({unitdata:result})
          })
      })
    }

      create(){
        //e.preventDefault();
        axios({
          method: 'post',
          url: 'https://dagduteli.com/Inventory/backend/GroupAdd.php',
          headers: { 'content-type': 'application/json' },
          data: this.state
        })
          .then(result => {
              console.log(result.data)
            if(result.data =="Records added successfully"){
             
//              this.setState({ groupname:"",
//              tax:"0",
//              discount:"0",
//              proditem:"",
//              hsn:"0",
//              unit:"",
//              category:"Regular",
//              qty:"1",
//              shelflife:"",
//              minqty:"0",
//              maxqty:"0",
//              barcodeqty:"0",
//              natureitem:"",
//              sellratetx:true,
//              purchesratetx:true,
//              onlineapp:true,
//  });
 alert('Group Added Successfully');
            }else{
              alert(result.data);
            }
          })
          .catch(error => this.setState({ error: error.message }));
    }
    
      fetchData = (inputValue, callback) => {
        setTimeout(() => {
          fetch(
            "https://dagduteli.com/Inventory/backend/UnitList.php?unit=" +
              inputValue,
            {
              method: "GET",
            }
          )
            .then((resp) => {
              return resp.json();
            })
            .then((data) => {
              const tempArray = [];
              if (data) {
                if (data.length) {
                  data.forEach((element) => {
                    tempArray.push({
                      label: `${element.S_name}`,
                      value: element.S_name,
                    });
                  });
                } else {
                  tempArray.push({
                    label: `${data.S_name}`,
                    value: data.S_name,
                  });
                }
              }
              callback(tempArray);
            })
            .catch((error) => {
              console.log(error, "catch the hoop");
            });
        }, 1000);
      };
    
      onSearchChange = (selectedOption) => {
        if (selectedOption) {

            this.state.unit= selectedOption.value
          this.setState({
            selectedOption,
            
          });
        }
      };
      handleSalesChange = (event) => {
       
        this.setState((prevState) => {
           return {
              ...prevState,
              sellratetx: !prevState.sellratetx
           }
        })
        console.log("Sales"+this.state.sellratetx)
    }
    handlepurchaseChange = (event) => {
        
      this.setState((prevState) => {
         return {
            ...prevState,
            purchesratetx: !prevState.purchesratetx
         }
      })
      console.log("Pur"+this.state.purchesratetx)
  }
  handleOnlineChange = (event) => {
   
  this.setState((prevState) => {
     return {
        ...prevState,
        onlineapp: !prevState.onlineapp
     }
  })
  console.log("Online"+this.state.onlineapp)
}
      
      onNatureitemChange = (selectedOption) => {
        if (selectedOption) {

            this.state.natureitem= selectedOption.value
          this.setState({
            selectedOption,
            
          });
        }
      };
      

      handleChange = (normalSelectOption) => {
        this.setState({ normalSelectOption });
      };
    render() {
      const { unitdata } = this.state;
     
      let unitList = unitdata.length > 0
        && unitdata.map((item, i) => {
        return (<option key={i} value={item.S_name}>{item.S_name}</option>)
      }, this);

const BootstrapInput = withStyles((theme) => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }))(InputBase);
        return (
            <div>
                <div class="MuiPaper-root MuiCard-root MuiPaper-elevation3 MuiPaper-rounded">
                    <div class="flex p-4"><h4 class="m-0"><b>Add New Group</b></h4></div>
                    <hr  style={{marginTop:"-15px",marginBottom:"12px"}}></hr>



                    <Grid style={{ overflowY: 'scroll', height:"100%"}}>
                        <Row className="show-grid">
                            <Col md={3}>
                                    <TextField
                                    onChange={(event)=>{this.setState({groupname:event.target.value})}} 
                                    style={{ width:"100%",marginLeft:"30%",marginTop:"20px"}}
                                    label="Group Name"
                                    id="outlined-size-small"
                                    variant="outlined"
                                    inputProps={{style: {fontSize: 15}}} 
                                    size="small"
                                    />
                            </Col>

                            <Col md={3}>
                                    <TextField
                                    onChange={(event)=>{this.setState({tax:event.target.value})}} 
                                   style={{ width:"100%",marginLeft:"30%" ,marginTop:"20px"}}
                                    label="Tax Rate"
                                    id="outlined-size-small"
                                    defaultValue="0"
                                    inputProps={{style: {fontSize: 15}}} 
                                    variant="outlined"
                                    size="small"
                                    />
                            </Col>

                            <Col md={3}>
                                    <TextField
                                    onChange={(event)=>{this.setState({discount:event.target.value})}} 
                                    style={{ width:"100%",marginLeft:"30%" ,marginTop:"20px"}}
                                    label="Discount Rate"
                                    id="outlined-size-small"
                                    defaultValue="0"
                                    inputProps={{style: {fontSize: 15}}} 
                                    variant="outlined"
                                    size="small"
                                    />
                            </Col>
                        </Row>

                        <Row className="show-grid">
                            <Col md={3}>
                                    <TextField
                                    onChange={(event)=>{this.setState({proditem:event.target.value})}} 
                                    style={{ width:"100%",marginLeft:"30%" ,marginTop:"20px"}}
                                    label="Product Item"
                                    inputProps={{style: {fontSize: 15}}} 
                                    id="outlined-size-small"
                                    variant="outlined"
                                    size="small"
                                    />
                            </Col>

                            <Col md={3}>
                                    <TextField
                                    onChange={(event)=>{this.setState({hsn:event.target.value})}} 
                                   style={{ width:"100%",marginLeft:"30%" ,marginTop:"20px"}}
                                    label="HSN Code"
                                    inputProps={{style: {fontSize: 15}}} 
                                    id="outlined-size-small"
                                    defaultValue="0"
                                    variant="outlined"
                                    size="small"
                                    />
                            </Col>

                            <Col md={3}>
                            <FormControl variant="outlined"    style={{ width:"100%",marginLeft:"30%" ,marginTop:"20px",backgroundColor:"#fff"}} >
                                    
                                   <Form.Control
                              as="select"
                              custom
                              hint="Sub Category"
                              data-live-search="true"
                            >
                             {unitList}
                            </Form.Control>
                            </FormControl>
                                {/* <FormControl variant="outlined"  >
                                    <InputLabel id="demo-simple-select-outlined-label" >Measuring Unit</InputLabel>
                                    <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    label="Measuring Unit"
                                    style={{height:"40px"}}
                                    >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>NOS</MenuItem>
                                    <MenuItem value={20}>QTY</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl> */}
                            </Col>
                        </Row>

                        <Row className="show-grid">
                            <Col md={3}>
                                    <TextField
                                    onChange={(event)=>{this.setState({category:event.target.value})}} 
                                    style={{ width:"100%",marginLeft:"30%",marginTop:"20px"}}
                                    label="Item Category"
                                    id="outlined-size-small"
                                    variant="outlined"
                                    inputProps={{style: {fontSize: 15}}} 
                                    value="Regular"
                                    size="small"
                                    />
                            </Col>

                            <Col md={3}>
                                    <TextField
                                    onChange={(event)=>{this.setState({qty:event.target.value})}} 
                                   style={{ width:"100%",marginLeft:"30%" ,marginTop:"20px"}}
                                    label="Item Qty"
                                    value="1"
                                    id="outlined-size-small"
                                    defaultValue="0"
                                    inputProps={{style: {fontSize: 15}}} 
                                    variant="outlined"
                                    size="small"
                                    />
                            </Col>

                            <Col md={3}>
                                    <TextField
                                    onChange={(event)=>{this.setState({shelflife:event.target.value})}} 
                                    style={{ width:"100%",marginLeft:"30%" ,marginTop:"20px"}}
                                    label="Item ShelfLife"
                                    id="outlined-size-small"
                                    inputProps={{style: {fontSize: 15}}} 
                                    variant="outlined"
                                    size="small"
                                    />
                            </Col>
                        </Row>

                        <Row className="show-grid">
                            <Col md={3}>
                                    <TextField
                                    onChange={(event)=>{this.setState({minqty:event.target.value})}} 
                                    style={{ width:"100%",marginLeft:"30%",marginTop:"20px"}}
                                    label="Min Re-Order Qty"
                                    id="outlined-size-small"
                                    variant="outlined"
                                    inputProps={{style: {fontSize: 15}}} 
                                    defaultValue="0"
                                    size="small"
                                    />
                            </Col>

                            <Col md={3}>
                                    <TextField
                                    onChange={(event)=>{this.setState({maxqty:event.target.value})}} 
                                   style={{ width:"100%",marginLeft:"30%" ,marginTop:"20px"}}
                                    label="Max ReOrder qty"
                                    value="1"
                                    inputProps={{style: {fontSize: 15}}} 
                                    id="outlined-size-small"
                                    defaultValue="0"
                                    variant="outlined"
                                    size="small"
                                    />
                            </Col>

                            <Col md={3}>
                                    <TextField
                                    onChange={(event)=>{this.setState({barcodeqty:event.target.value})}} 
                                    style={{ width:"100%",marginLeft:"30%" ,marginTop:"20px"}}
                                    label="BarcodeLabel Qty"
                                    id="outlined-size-small"
                                    defaultValue="0"
                                    inputProps={{style: {fontSize: 15}}} 
                                    variant="outlined"
                                    size="small"
                                    />
                            </Col>
                        </Row>


                        <Row className="show-grid">
                            <Col md={3}>

                            <select  variant="outlined" onChange={(event)=>{this.setState({natureitem:event.target.value})}}  style={{height:"40px", width:"100%",marginLeft:"30%" ,marginTop:"20px"}} onChange={(event)=>{this.setState({natureitem:event.target.value})}} >           
                             <option value="Goods">Goods</option>
                             <option value="Services">Services</option>
                            </select>

                                
                            
                            </Col>

                            <Col md={2}>

                            
                            <FormControlLabel
                                value={this.state.sellratetx}
                                onChange={this.handleSalesChange}
                                style={{ width:"100%",marginLeft:"30%" ,marginTop:"20px"}}
                                control={<Checkbox checked={this.state.sellratetx} name="checkedA" />}
                                label="Sell Rates Inclusive Tax "
                            />
                            
                            </Col>

                            <Col md={2}>
                            <FormControlLabel
                           value={this.state.purchesratetx}
                           onChange={this.handlepurchaseChange}
                           style={{ width:"100%",marginLeft:"30%" ,marginTop:"20px"}}
                           control={<Checkbox  checked={this.state.purchesratetx} name="checkedA" />}
                                label="Purchase Rates Inclusive Tax "
                            />  
                            </Col>
                            <Col md={2}>
                            <FormControlLabel
                            value={this.state.onlineapp}
                            onChange={this.handleOnlineChange}
                            style={{ width:"100%",marginLeft:"30%" ,marginTop:"20px"}}
                            control={<Checkbox checked={this.state.onlineapp} name="checkedA" />}
                                label="Online App  "
                            />  
                            </Col>
                        </Row>

                        <Row className="show-grid"  style={{ marginLeft:"70px",marginBottom:"50px"}}>
                            <Col md={6}>
                                <Button variant="contained" color="primary" onClick={()=>{this.create()}}>
                                        Submit
                                </Button>
                            </Col>
                        </Row>
                    </Grid>
                
                </div>
           </div>
        )
    }
}
