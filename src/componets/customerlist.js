import React, { Component } from 'react'
import  {Link} from 'react-router-dom';
import '@devexpress/dx-react-grid-bootstrap4/dist/dx-react-grid-bootstrap4.css';

import {AgGridReact} from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'
import '@devexpress/dx-react-grid-bootstrap4/dist/dx-react-grid-bootstrap4.css';
export default class customerlist extends Component {
    constructor(props) {
        super(props)
          this.state = {
            data: [],
            temp:''
          }}

       
          
         
        componentDidMount(){
            
            fetch('https://dagduteli.com/Inventory/backend/customerList.php').then((res)=>{
                res.json().then((result)=>{
                    this.setState({data:result})
                })
            })
            
        }
    //   componentDidMount() {
    //        //Get all users details in bootstrap table
    //         axios.get('http://dagduteli.com/Inventory/backend/GroupList.php').then(res => 
    //         {
    //           //Storing users detail in state array object
    //           this.setState({data: res.data});
            
    //         }); 
    //     //initialize datatable
    //     $(document).ready(function () {
    //         $('#example').DataTable();
    //     });
    //  }
    render() {
    
      const columns =[
        { field: 'id', headName: 'CID',sortable:true },
        { field: 'Party_Code', headName: 'Part Code',sortable:true },
        { field: 'Party_Name',   headName: 'Customer Name' ,sortable:true},
        { field: 'Party_Mob',    headName: 'Mobile No.' ,sortable:true},
        { field: 'Party_City',   headName: 'City' ,sortable:true},
        { field: 'Party_State',  headName: 'State' ,sortable:true},
        { field: 'Party_PinCode',headName: 'Pincode' ,sortable:true},
        { field: 'DateCreated',  headName: 'Register Date' ,sortable:true},
        {headName:"Action",field:"Action",cellRendererFramework:(params)=>
        <div>
           <Link to={`customer/${params.data.id}`}>VIEW</Link>
            {/* <span onClick={()=>this.handleClick()}>View</span>  */}
        </div>}
    ]

    const defaultColDef={
        sortable:true,filter:true,floatingFilter:true,flex:1
    }
    const onGridReady = params =>{
        
        fetch("http://dagduteli.com/Inventory/backend/customerList.php").then(resp=>resp.json())
        .then(resp=>{
            params.api.applyTransaction({add:resp})
        
           
        })
        
    }
     
       return (
           <div>
             <div class="MuiPaper-root MuiCard-root MuiPaper-elevation3 MuiPaper-rounded">
                 <div class="flex p-4">
                   <h4 class="m-0"><b>View Customer</b></h4>
                 </div>
                 <hr  style={{marginTop:"-15px",marginBottom:"12px"}}></hr>
                 <div className="MainDiv">
                   
                       <div className="container" style={{paddingBottom:"30px",alignContent:"center"}}>
                           <div className="ag-theme-alpine" style={{ height: 600, width: '100%' }}>
                                   <AgGridReact 
                                   pagination={true}
                                   paginationPageSize={10}
                                   paginationAutoPageSize={true}
                                   columnDefs={columns} 
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
