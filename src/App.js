
import './App.css';
import { Redirect  } from 'react-router';
import { 
  Route,
  BrowserRouter
} from 'react-router-dom';
import Login from "./componets/login";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './componets/home';
import UpdateGroup from "./componets/updategroup";
import Updatecustomer from "./componets/updatecustomer";
import Updateinventory from "./componets/updateinventory";
import Apprvalinventroy from "./componets/apprvalinventroy";

function App() {
  return (
    
  <BrowserRouter>
    
       
       
        <Route path="/login">
          <Login/>
        </Route>

        <Route path="/home">
          <Home/>
        </Route>

        <Route path="/inventory/:id">
          <Updateinventory/>
        </Route>  

        <Route path="/customer/:id">
          <Updatecustomer/>
        </Route>
        
        <Route path="/approval/:id">
          <Apprvalinventroy/>
        </Route>

        <Route path="/group/:id">
          <UpdateGroup/>
        </Route>
  
         <Route path="/">
          <Redirect to="/login" />
        </Route> 

        

  </BrowserRouter>
  );
}

export default App;
