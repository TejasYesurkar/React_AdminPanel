import React, { Component } from 'react'
//Bootstrap and jQuery libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
//Datatable Modules
import  {Link} from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"

import {AgGridReact} from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'
export default class feedback extends Component {
  
    constructor(props) {
        super(props)
          this.state = {
            data: [], 
            columns:[
                {headName:"f-ID",field:"FID",sortable:true},
                {headName:"Customer Namee",field:"customerName",sortable:true},
                {headName:"Mobile",field:"custMobile",sortable:true},
                {headName:"Feedback",field:"FeedBack",sortable:true},
            ]
        
          }}


    render() {
   
     const defaultColDef={
         sortable:true,filter:true,floatingFilter:true,flex:1
     }
     const onGridReady = params =>{
         
         fetch("http://dagduteli.com/Inventory/backend/feedback.php").then(resp=>resp.json())
         .then(resp=>{
             params.api.applyTransaction({add:resp})
             params.api.paginationGoToPage(10)
            
         })
         
     }
      
        return (
            <div>
              <div class="MuiPaper-root MuiCard-root MuiPaper-elevation3 MuiPaper-rounded">
                  <div class="flex p-4">
                    <h4 class="m-0"><b>View Feedback</b></h4>
                  </div>
                  <hr  style={{marginTop:"-15px",marginBottom:"12px"}}></hr>
                  <div className="MainDiv">
                    
                        <div className="container" style={{paddingBottom:"30px",alignContent:"center"}}>
                            <div className="ag-theme-alpine" style={{ height: 600, width: '100%' }}>
                                    <AgGridReact 
                                    pagination={true}
                                    paginationPageSize={10}
                                    paginationAutoPageSize={true}
                                    columnDefs={this.state.columns} 
                                    onGridReady={onGridReady}
                                    defaultColDef={defaultColDef}/>
                              </div>
                          </div>
                    </div>
                </div>
            </div>
        )
    }
}
