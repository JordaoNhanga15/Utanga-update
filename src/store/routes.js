import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
//import {Portal,Login,News,Event,Historia,Orgaos,Faculdade_Aba} from './screens'
import Portal from '../screens/Portal' 
import News from '../screens/News'
import Event from '../screens/Events'
import Historia from '../screens/Historia'
import Orgaos from '../screens/Orgaos_universidade'
import Faculdade_Aba from '../screens/Faculdade'
import Cadastramento from '../screens/Cadastramento'
import Log from '../screens/Login_'
import Perfil from '../screens/Dashboard/Menu'

class Routes extends React.Component{
    render(){
        return(
        <BrowserRouter>
        <Route path="/" exact component={Portal} />
        <Route path="/News" component={News} />
        <Route path="/Event" component={Event} />
        <Route path="/Historia" component={Historia} />
        <Route path="/Orgaos" component={Orgaos} />
        <Route path="/Faculdade" component={Faculdade_Aba} />
        <Route path="/inscricao" component={Cadastramento} />
        <Route path="/Login" component={Log} />
        <Route path="/Perfil" component={Perfil} />
        </BrowserRouter>
        )
    }
}

export default Routes; 