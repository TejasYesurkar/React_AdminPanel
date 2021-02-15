import { Button, Checkbox, FormControlLabel, Grid,TextField } from '@material-ui/core'
import React, { Component } from 'react'
import { Col,  Row } from 'react-bootstrap'
import axios from 'axios';

export default class storeadd extends Component {
    
    constructor(props, context) {
        super(props, context);
        this.state = {
            partyname:"",
            printname:"",
            mobile:"",
            city:"",
            state:"",
            address:"",
            accounttype:"Sundry Debtors",
            salesratetype:"",
            sendsms:true,
            

        };
        

      }

      create(){
        console.log(this.state)
        axios({
            method: 'post',
            url: 'https://dagduteli.com/Inventory/backend/customerAdd.php',
            headers: { 'content-type': 'application/json' },
            data: this.state
          })
            .then(result => {
                console.log(result)
                if(result.data =="Customer Add Successfully"){
            
                     alert('Customer Add Successfully');
                     this.props.history.push('/home');
                                }else{
                                  alert(result.data);
                                }
              this.setState({
                mailSent: result.data.sent
              })
            })
            .catch(error => this.setState({ error: error.message }));
    }
    handleSalesChange = (event) => {
       
        this.setState((prevState) => {
           return {
              ...prevState,
              sellratetx: !prevState.sellratetx
           }
        })
        console.log("Sales"+this.state.sellratetx)
    }
    render() {
        return (
            <div>
                <div class="MuiPaper-root MuiCard-root MuiPaper-elevation3 MuiPaper-rounded">
                    <div class="flex p-4"><h4 class="m-0"><b>Add New Store</b></h4></div>
                    <hr  style={{marginTop:"-15px",marginBottom:"12px"}}></hr>

                    <Grid style={{ overflowY: 'scroll', height:"100%"}}>
                    <Row className="show-grid">
                            <Col md={3}>
                                    <TextField
                                    onChange={(event)=>{this.setState({partyname:event.target.value})}} 
                                    style={{ width:"100%",marginLeft:"30%",marginTop:"20px"}}
                                    label="Party Name"
                                    id="outlined-size-small"
                                    inputProps={{style: {fontSize: 15}}} 
                                    variant="outlined"
                                    size="small"
                                    />
                            </Col>

                            <Col md={3}>
                                    <TextField
                                    onChange={(event)=>{this.setState({printname:event.target.value})}} 
                                   style={{ width:"100%",marginLeft:"30%" ,marginTop:"20px"}}
                                    label="Print Name"
                                    id="outlined-size-small"
                                    inputProps={{style: {fontSize: 15}}} 
                                    variant="outlined"
                                    size="small"
                                    />
                            </Col>

                            <Col md={3}>
                                    <TextField
                                    onChange={(event)=>{this.setState({mobile:event.target.value})}} 
                                    style={{ width:"100%",marginLeft:"30%" ,marginTop:"20px"}}
                                    label="Mobile No."
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
                                    onChange={(event)=>{this.setState({city:event.target.value})}} 
                                    style={{ width:"100%",marginLeft:"30%",marginTop:"20px"}}
                                    label="City"
                                    inputProps={{style: {fontSize: 15}}} 
                                    id="outlined-size-small"
                                    variant="outlined"
                                    size="small"
                                    />
                            </Col>

                            <Col md={3}>
                                    <TextField
                                    onChange={(event)=>{this.setState({state:event.target.value})}} 
                                   style={{ width:"100%",marginLeft:"30%" ,marginTop:"20px"}}
                                    label="State"
                                    id="outlined-size-small"
                                    inputProps={{style: {fontSize: 15}}} 
                                    variant="outlined"
                                    size="small"
                                    />
                            </Col>

                            <Col md={3}>
                                    <TextField
                                    onChange={(event)=>{this.setState({address:event.target.value})}} 
                                    style={{ width:"100%",marginLeft:"30%" ,marginTop:"20px"}}
                                    label="Address"
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
                                    onChange={(event)=>{this.setState({accounttype:event.target.value})}} 
                                    style={{ width:"100%",marginLeft:"30%",marginTop:"20px"}}
                                    label="Account Type"
                                    id="outlined-size-small"
                                    variant="outlined"
                                    inputProps={{style: {fontSize: 15}}} 
                                    size="small"
                                    />
                            </Col>

                            <Col md={3}>
                                    <TextField
                                    onChange={(event)=>{this.setState({salesratetype:event.target.value})}} 
                                   style={{ width:"100%",marginLeft:"30%" ,marginTop:"20px"}}
                                    label="Sale Rate Type"
                                    id="outlined-size-small"
                                    inputProps={{style: {fontSize: 15}}} 
                                    variant="outlined"
                                    size="small"
                                    />
                            </Col>

                            <Col md={3}>
                                     <FormControlLabel
                                     value={this.state.sendsms}
                                     onChange={this.handleSalesChange}
                                     style={{ width:"100%",marginLeft:"30%" ,marginTop:"20px"}}
                                     control={<Checkbox  />}
                                     label="Send SMS Notification"
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
