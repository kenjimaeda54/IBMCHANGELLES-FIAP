import React from 'react';
import {BrowserRouter,Switch,Route} from "react-router-dom";

import Home from "./pages/home/index"
import Header from "./Header/index"
import Conversa from "./pages/home/Conversa"


  const Rotas = ()=> {
 return (
   
   <BrowserRouter>
       
       <Header/>
            
       <Switch>

          <Route exact path="/"  component={Home} />
          <Route exact path="/conversa" component={Conversa } /> 
              
       </Switch>  

   </BrowserRouter>
  );
}

export default Rotas;