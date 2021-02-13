import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import  {Link} from 'react-router-dom';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; import {AgGridReact} from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import '@devexpress/dx-react-grid-bootstrap4/dist/dx-react-grid-bootstrap4.css';

export default class groupadd extends Component {
    // State array variable to save and show data
    constructor(props) {
        super(props)
          this.state = {
            data: [],
            columns: [{ name: 'gid', title: 'G-ID' },
            { name: 'Group_name', title: 'Group N ame' },
            { name: 'Tax_RATE', title: 'Tax RATE' },
            { name: 'HSNSACCode', title: 'HSN Code' },
          
          ]
          }
          }
        
        componentDidMount(){
            fetch('https://dagduteli.com/Inventory/backend/GroupList.php').then((res)=>{
                res.json().then((result)=>{
                    this.setState({data:result})
                })
            })
            $(document).ready(function () {
                $('#example').DataTable();
            });
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

      // It also supports arrays
      
    render() {
      const columns =[

        { field: 'gid', headName: 'G-ID',sortable:true },
            { field: 'Group_name', headName: 'Group N ame',sortable:true },
            { field: 'Tax_RATE', headName: 'Tax RATE',sortable:true },
            { field: 'HSNSACCode', headName: 'HSN Code',sortable:true },
        {headName:"Action",field:"Action",cellRendererFramework:(params)=>
        <div>
           <Link to={`customer/${params.data.gid}`}>VIEW</Link>
            {/* <span onClick={()=>this.handleClick()}>View</span>  */}
        </div>}
    ]

    const defaultColDef={
        sortable:true,filter:true,floatingFilter:true,flex:1
    }
    const onGridReady = params =>{
        
        fetch("http://dagduteli.com/Inventory/backend/GroupList.php").then(resp=>resp.json())
        .then(resp=>{
            params.api.applyTransaction({add:resp})
            
           
        })
        
    }
     
       return (
           <div>
             <div class="MuiPaper-root MuiCard-root MuiPaper-elevation3 MuiPaper-rounded">
                 <div class="flex p-4">
                   <h4 class="m-0"><b>View Group</b></h4>
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
