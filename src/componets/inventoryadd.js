import { Grid, TextField } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import React, { Component } from 'react'
import { Col,  Row } from 'react-bootstrap'
import axios from 'axios';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';
import AsyncSelect from "react-select/async";
import { Form } from 'react-bootstrap';

export default class inventoryadd extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            groupname:"",
            subgroup:"",
            sgroup:"",
            productname:"",
            sku:"",
            description:"",
            hsn:"",
            unit:"",
            taxrate:"0",
            pruchaserate:"0",
            salesrate:"0",
            itemcategory:"Regular",
            mrp:"0",
            salesrate1:"0",
            salesrate2:"0",
            discount:"",
            devagiriname:"",
            minqty:"",
            maxqty:"",
            sellratetx:false,
            purchesratetx:false,
            onlineapp:false,
            shelflist:"",
            shelfrackno:"",
            natureitem:"Goods",
            barcodeqty:"",
            itemanalysis:"",
            selectedFile:"",
            productlisting:"Grocery",
            unitdata: [],
            subcategorydata: [],
        },
       
        this.handleInputChange = this.handleInputChange.bind(this);
      }
      componentDidMount(){
            
        fetch('https://dagduteli.com/Inventory/backend/UnitList.php').then((res)=>{
          res.json().then((result)=>{
              this.setState({unitdata:result})
          })
      })

            
      fetch('https://dagduteli.com/Inventory/backend/subcategorylist.php').then((res)=>{
        res.json().then((result)=>{
            this.setState({subcategorydata:result})
        })
    })
        
    }

      create(){
         const data = new FormData() 
         data.append('file', this.state.selectedFile)
         data.append('groupname', this.state.groupname)
         data.append('subgroup', this.state.sgroup)
         data.append('productname', this.state.productname)
         data.append('sku', this.state.sku)
         data.append('description', this.state.description)
         data.append('hsn', this.state.hsn)
         data.append('unit', this.state.unit)
         data.append('taxrate', this.state.taxrate)         
         data.append('pruchaserate', this.state.pruchaserate)
         data.append('salesrate', this.state.salesrate)
         data.append('itemcategory', this.state.itemcategory)
         data.append('mrp', this.state.mrp)
         data.append('salesrate1', this.state.salesrate1)
         data.append('salesrate2', this.state.salesrate2)
         data.append('discount', this.state.discount)
         data.append('devagiriname', this.state.devagiriname)         
         data.append('minqty', this.state.minqty)
         data.append('maxqty', this.state.maxqty)
         data.append('sellratetx', this.state.sellratetx)
         data.append('purchesratetx', this.state.purchesratetx)
         data.append('onlineapp', this.state.onlineapp)
         data.append('shelflist', this.state.shelflist)
         data.append('shelfrackno', this.state.shelfrackno)
         data.append('natureitem', this.state.natureitem)         
         data.append('barcodeqty', this.state.barcodeqty)
         data.append('itemanalysis', this.state.itemanalysis)
         data.append('selectedFile', this.state.selectedFile)
         data.append('productlisting', this.state.productlisting)
         console.warn(this.state.selectedFile);
         let url = "https://dagduteli.com/Inventory/backend/upload.php";
         axios.post(url, data, { })
         .then(res => { // then print response status
             console.warn(res);
         })
    }
   
    handleInputChange(event) {
      this.setState({selectedFile: event.target.files[0]})}
     
    fetchCategory = (inputValue, callback) => {
        setTimeout(() => {
          fetch(
            "http://dagduteli.com/Inventory/backend/subcategorylist.php" +
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
                      label: `${element.Item_SubGroup}`,
                      value: element.Item_SubGroup,
                    });
                  });
                } else {
                  tempArray.push({
                    label: `${data.Item_SubGroup}`,
                    value: data.Item_SubGroup,
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

      
      oncategoryChange = (subgroup) => {
        if (subgroup) {

          console.log(subgroup.value)
            this.state.sgroup= subgroup.value
          this.setState({
            subgroup,
          });
        }
      };
    render() {
      const { unitdata } = this.state;
      const { subcategorydata } = this.state;

      let unitList = unitdata.length > 0
        && unitdata.map((item, i) => {
        return (<option key={i} value={item.S_name}>{item.S_name}</option>)
      }, this);

      let subcategoryList = subcategorydata.length > 0
      && subcategorydata.map((item, i) => {
      return (<option key={i} value={item.Item_SubGroup}>{item.Item_SubGroup}</option>)
    }, this);
      
        return (
            <div>
            <div class="MuiPaper-root MuiCard-root MuiPaper-elevation3 MuiPaper-rounded">
                <div class="flex p-4"><h4 class="m-0"><b>Add New Inventory Item</b></h4></div>
                <hr  style={{marginTop:"-15px",marginBottom:"12px"}}></hr>



                <Grid style={{ overflowY: 'scroll', height:"100%"}}>
                    <Row className="show-grid">
                        <Col md={3}>
                                <TextField
                                onChange={(event)=>{this.setState({groupname:event.target.value})}} 
                                style={{ width:"100%",marginLeft:"30%",marginTop:"20px",fontSize:"10px"}}
                                label="Group Name"
                                id="outlined-size-small"
                                variant="outlined"
                                inputProps={{style: {fontSize: 15}}} 
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
                             {subcategoryList}
                            </Form.Control>
                                {/* <AsyncSelect 
                                    
                                    value={this.state.subgroup}
                                    loadOptions={this.fetchCategory}
                                    placeholder="SubGroup"
                                    onChange={(e) => {
                                    this.oncategoryChange(e);
                                    }}
                                    theme={theme=>({
                                      ...theme,
                                      borderRadius:0,
                                      color:{
                                        ...theme.colors,
                                        primary25:'hotpink',
                                        primary:'black',
                                        neutral0:'#c8c8c8',
                                        neutrak90:'white'
                                      }
                                    })}
                                    defaultOptions={true}
                                /> */}
                        </FormControl>
                        </Col>

                        <Col md={3}>
                                <TextField
                                onChange={(event)=>{this.setState({productname:event.target.value})}} 
                                style={{ width:"100%",marginLeft:"30%" ,marginTop:"20px"}}
                                label="Product Name"
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
                                onChange={(event)=>{this.setState({sku:event.target.value})}} 
                                style={{ width:"100%",marginLeft:"30%" ,marginTop:"20px"}}
                                label="SKU"
                                inputProps={{style: {fontSize: 15}}} 
                                id="outlined-size-small"
                                variant="outlined"
                                size="small"
                                />
                        </Col>

                        <Col md={3}>
                                <TextField
                                onChange={(event)=>{this.setState({description:event.target.value})}} 
                               style={{ width:"100%",marginLeft:"30%" ,marginTop:"20px"}}
                                label="Description"
                                id="outlined-size-small"
                                defaultValue="0"
                                inputProps={{style: {fontSize: 15}}} 
                                variant="outlined"
                                size="small"
                                />
                        </Col>
                        <Col md={3}>
                                <TextField
                                onChange={(event)=>{this.setState({hsn:event.target.value})}} 
                                style={{ width:"100%",marginLeft:"30%",marginTop:"20px"}}
                                label="HSN"
                                id="outlined-size-small"
                                variant="outlined"
                                inputProps={{style: {fontSize: 15}}} 
                                size="small"
                                />
                        </Col>
                    </Row>

                    <Row className="show-grid">

                    <Col md={3}>
                    <FormControl variant="outlined"    style={{ width:"100%",marginLeft:"30%" ,marginTop:"20px",backgroundColor:"#fff"}} >
                                
                                <Form.Control
                                      as="select"
                                      custom
                                      data-live-search="true"
                                    >
                                     {unitList}
                                    </Form.Control>
                                     
                                </FormControl>
                           
                        </Col>
                       
                        <Col md={3}>
                                <TextField
                                onChange={(event)=>{this.setState({taxrate:event.target.value})}} 
                               style={{ width:"100%",marginLeft:"30%" ,marginTop:"20px"}}
                                label="Tax Rate"
                                inputProps={{style: {fontSize: 15}}} 
                                id="outlined-size-small"
                                defaultValue="0"
                                variant="outlined"
                                size="small"
                                />
                        </Col>

                        <Col md={3}>
                                <TextField
                                onChange={(event)=>{this.setState({pruchaserate:event.target.value})}} 
                                style={{ width:"100%",marginLeft:"30%" ,marginTop:"20px"}}
                                label="Purchase Rate"
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
                                onChange={(event)=>{this.setState({salesrate:event.target.value})}} 
                                style={{ width:"100%",marginLeft:"30%",marginTop:"20px"}}
                                label="Sales Rate"
                                id="outlined-size-small"
                                variant="outlined"
                                defaultValue="0"
                                size="small"
                                inputProps={{style: {fontSize: 15}}} 
                                />
                        </Col>

                        <Col md={3}>
                                <TextField
                                onChange={(event)=>{this.setState({mrp:event.target.value})}} 
                               style={{ width:"100%",marginLeft:"30%" ,marginTop:"20px"}}
                                label="MRP"
                                id="outlined-size-small"
                                defaultValue="0"
                                variant="outlined"
                                inputProps={{style: {fontSize: 15}}} 
                                size="small"
                                />
                        </Col>

                        <Col md={3}>
                                <TextField
                                onChange={(event)=>{this.setState({salesrate1:event.target.value})}} 
                                style={{ width:"100%",marginLeft:"30%" ,marginTop:"20px"}}
                                label="Sales Rate1"
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
                                onChange={(event)=>{this.setState({salesrate2:event.target.value})}} 
                                style={{ width:"100%",marginLeft:"30%",marginTop:"20px"}}
                                label="Sales Rate2"
                                id="outlined-size-small"
                                variant="outlined"
                                inputProps={{style: {fontSize: 15}}} 
                                defaultValue="0"
                                size="small"
                                />
                        </Col>

                        <Col md={3}>
                                <TextField
                                onChange={(event)=>{this.setState({discount:event.target.value})}} 
                               style={{ width:"100%",marginLeft:"30%" ,marginTop:"20px"}}
                                label="Discount"
                                id="outlined-size-small"
                                defaultValue="0"
                                inputProps={{style: {fontSize: 15}}} 
                                variant="outlined"
                                size="small"
                                />
                        </Col>

                        <Col md={3}>
                                <TextField
                                onChange={(event)=>{this.setState({devagiriname:event.target.value})}} 
                                style={{ width:"100%",marginLeft:"30%" ,marginTop:"20px"}}
                                label="Devanagari Name"
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
                                label="Min-Reorder Qty"
                                id="outlined-size-small"
                                variant="outlined"
                                defaultValue="0"
                                inputProps={{style: {fontSize: 15}}} 
                                size="small"
                                />
                        </Col>

                        <Col md={3}>
                                <TextField
                                onChange={(event)=>{this.setState({maxqty:event.target.value})}} 
                               style={{ width:"100%",marginLeft:"30%" ,marginTop:"20px"}}
                               label="Max-Reorder Qty"
                                id="outlined-size-small"
                                defaultValue="0"
                                inputProps={{style: {fontSize: 15}}} 
                                variant="outlined"
                                size="small"
                                />
                        </Col>

                        <Col md={3}>
                                <TextField
                                onChange={(event)=>{this.setState({shelflist:event.target.value})}} 
                                style={{ width:"100%",marginLeft:"30%" ,marginTop:"20px"}}
                                label="Shelf List"
                                id="outlined-size-small"
                                variant="outlined"
                                inputProps={{style: {fontSize: 15}}} 
                                size="small"
                                />
                        </Col>
                    </Row>

                    <Row className="show-grid">
                        <Col md={3}>
                                <TextField
                                onChange={(event)=>{this.setState({shelfrackno:event.target.value})}} 
                                style={{ width:"100%",marginLeft:"30%",marginTop:"20px"}}
                                label="Shelf-RackNo"
                                id="outlined-size-small"
                                inputProps={{style: {fontSize: 15}}} 
                                variant="outlined"
                                defaultValue="0"
                                size="small"
                                />
                        </Col>

                        <Col md={3}>
                        <p  style={{ width:"100%",marginLeft:"30%" ,marginBottom:"-20px"}}>Nature of Item</p>
                        <select  variant="outlined" style={{height:"40px", width:"100%",marginLeft:"30%" ,marginTop:"20px"}} onChange={(event)=>{this.setState({natureitem:event.target.value})}} >           
                         <option value="Goods">Goods</option>
                         <option value="Services">Services</option>
                        </select>                        
                        </Col>

                        <Col md={3}>
                                <TextField
                                onChange={(event)=>{this.setState({barcodeqty:event.target.value})}} 
                                style={{ width:"100%",marginLeft:"30%" ,marginTop:"20px"}}
                                label="Barcode Qty"
                                id="outlined-size-small"
                                defaultValue="0"
                                variant="outlined"
                                inputProps={{style: {fontSize: 15}}} 
                                size="small"
                                />
                        </Col>
                    </Row>


                    <Row className="show-grid">
                        <Col md={3}>
                                <TextField
                                onChange={(event)=>{this.setState({itemanalysis:event.target.value})}} 
                                style={{ width:"100%",marginLeft:"30%",marginTop:"20px"}}
                                label="item Analysis"
                                id="outlined-size-small"
                                variant="outlined"
                                inputProps={{style: {fontSize: 15}}} 
                                value="Regular"
                                size="small"
                                />
                        </Col>
                        <Col md={3}>
                        <input type="file" style={{ width:"100%",marginLeft:"30%",marginTop:"20px"}} className="form-control" name="upload_file" onChange={this.handleInputChange} />
                        </Col>

                        <Col md={3}>
                        <p  style={{ width:"100%",marginLeft:"30%" ,marginBottom:"-20px"}}>Product Listing</p>
                        <select  variant="outlined" onChange={(event)=>{this.setState({natureitem:event.target.value})}}  style={{height:"40px", width:"100%",marginLeft:"30%" ,marginTop:"20px"}} onChange={(event)=>{this.setState({natureitem:event.target.value})}} >           
                                <option value="Grocery">Grocery</option>
                                <option value="Ayurvedic">Ayurvedic</option>
                        </select>                        
                        </Col>

                    </Row>

                    <Row className="show-grid">
                    
                        <Col md={3}>
                        
                        <FormControlLabel
                           
                            onChange={this.handleSalesChange}
                            style={{ width:"100%",marginLeft:"30%" ,marginTop:"20px"}}
                            control={<Checkbox  name="checkedA" />}
                            label="Sell Rates Inclusive Tax "
                        />
                        
                        </Col>

                        <Col md={3}>
                        <FormControlLabel
                       
                       onChange={this.handlepurchaseChange}
                       style={{ width:"100%",marginLeft:"30%" ,marginTop:"20px"}}
                       control={<Checkbox name="checkedA" />}
                            label="Purchase Rates Inclusive Tax "
                        />  
                        </Col>
                        <Col md={3}>
                        <FormControlLabel
                        onChange={this.handleOnlineChange}
                        style={{ width:"100%",marginLeft:"30%" ,marginTop:"20px"}}
                        control={<Checkbox name="checkedA" />}
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
