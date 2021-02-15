
import './App.css';

import { 
  BrowserRouter as Router,
  Route, 
  Switch,
  Redirect,
} from 'react-router-dom';
import Login from "./componets/login";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './componets/home';
import UpdateGroup from "./componets/updategroup";
import Updatecustomer from "./componets/updatecustomer";
import Updateinventory from "./componets/updateinventory";
import Apprvalinventroy from "./componets/apprvalinventroy";
import { browserHistory } from 'react-router'
function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      
      <Route exact path="/home">
        <Home />
      </Route>
      
     <Route exact path="/inventory/:id">
       <Updateinventory/>
     </Route>  

     <Route exact path="/customer/:id">
       <Updatecustomer/>
     </Route>
  
     <Route exact path="/approval/:id">
       <Apprvalinventroy/>
     </Route>

     <Route exact path="/group/:id">
       <UpdateGroup/>
     </Route>
     
    </Switch>
  </Router>
    
  // <BrowserRouter>
    
  //     <Route path="/login">
  //         <Login/>
  //       </Route>

  //       <Route path="/home">
  //         <Home/>
  //       </Route>

  //       <Route path="/inventory/:id">
  //         <Updateinventory/>
  //       </Route>  

  //       <Route path="/customer/:id">
  //         <Updatecustomer/>
  //       </Route>
        
  //       <Route path="/approval/:id">
  //         <Apprvalinventroy/>
  //       </Route>

  //       <Route path="/group/:id">
  //         <UpdateGroup/>
  //       </Route>
  
  //         {/* <Route path="/">
  //         <Redirect to="/login" />
  //       </Route>   */}

        
  //       {/* <Route path="/">
  //       {history.push('/login')}
  //       </Route>   */}

  // </BrowserRouter>
  );
}

export default App;
