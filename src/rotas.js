import React from "react";
import {BrowserRouter, Route, Switch } from "react-router-dom";

import Cadastro from './pages/Cadastro';
// import Configuracoes from '../pages/Configuracoes';
// import CriarPersonagem from '../pages/CriarPersonagem';
import Login from './pages/Login';
import MeusPosts from './pages/MeusPosts';
import Perfil from './pages/Perfil';
import Populares from './pages/Populares';
// import Postagens from '../pages/Postagens';
import Principal from './pages/Principal';
//import NotFound from 'v../../pages/NotFound';
//<Route path="*" component={NotFound} />

const Rotas = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/Principal" component={Principal} />
        <Route exact={true} path="/" component={Login} />
        <Route exact={true} path="/Cadastro" component={Cadastro} />
        <Route exact={true} path="/Perfil" component={Perfil} />
        <Route exact={true} path="/Populares" component={Populares} />
        <Route exact={true} path="/MeusPosts" component={MeusPosts} />
        
      </Switch>
    </BrowserRouter>
  )
}
export default Rotas;
