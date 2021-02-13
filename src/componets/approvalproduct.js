import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import  {Link} from 'react-router-dom';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 
import '@devexpress/dx-react-grid-bootstrap4/dist/dx-react-grid-bootstrap4.css';

import {AgGridReact} from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'
import '@devexpress/dx-react-grid-bootstrap4/dist/dx-react-grid-bootstrap4.css';


export default class approvalproduct extends Component {
    constructor(props) {
        super(props)
          this.state = {
            data: [],
            columns: [{ name: 'Item_Name', title: 'Item Code' },
            { name: 'Item_Name', title: 'Item Name' },
            { name: 'Item_SubGroup', title: 'Sub-Group' },
            { name: 'Item_Group', title: 'Item-Group' },
            { name: 'Measuring_Unit', title: 'Unit' },
            { name: 'Discount_rate', title: 'Discount Rate' },
            { name: 'Item_Description', title: 'Description' },
          ]
          }}

         
        componentDidMount(){
            fetch('https://dagduteli.com/Inventory/backend/approvalItemList.php').then((res)=>{
                res.json().then((result)=>{
                    this.setState({data:result})
                })
            })
            $(document).ready(function () {
                $('#example').DataTable();
            });
        }
    render() {
      const columns =[

            { field: 'Item_Name', headName: 'Item Name' },
            { field: 'Item_SubGroup', headName: 'Sub-Group' },
            { field: 'Item_Group', headName: 'Item-Group' },
            { field: 'Measuring_Unit', headName: 'Unit' },
            { field: 'Discount_rate', headName: 'Discount Rate' },
            { field: 'Item_Description', headName: 'Description' },
    {headName:"Action",field:"Action",cellRendererFramework:(params)=>
    <div>
       <Link to={`approval/${params.data.Item_ID}`}>VIEW</Link>
        {/* <span onClick={()=>this.handleClick()}>View</span>  */}
    </div>}
]

const defaultColDef={
    sortable:true,filter:true,floatingFilter:true,flex:1
}
const onGridReady = params =>{
    
    fetch("http://dagduteli.com/Inventory/backend/approvalItemList.php").then(resp=>resp.json())
    .then(resp=>{
        params.api.applyTransaction({add:resp})
    
       
    })
    
}
 
   return (
       <div>
         <div class="MuiPaper-root MuiCard-root MuiPaper-elevation3 MuiPaper-rounded">
             <div class="flex p-4">
               <h4 class="m-0"><b>View Approval Inventory</b></h4>
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
