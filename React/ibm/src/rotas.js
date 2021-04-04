import React from 'react';
import {BrowserRouter,Switch,Route} from "react-router-dom";

import Home from "./pages/home/index"
import Header from "./Header/index"


  const Rotas = ()=> {
 return (
   
   <BrowserRouter>
       
       <Header/>
            
       <Switch>

          <Route exact path="/"  component={Home} />
              
       </Switch>  

   </BrowserRouter>
  );
}

export default Rotas;