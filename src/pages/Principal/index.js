import React, { Component, useEffect } from 'react'
import firebase from "../../components/Firebase/firebase.js";
import './style.css';
import Menu from '../../components/Menu';
import Postagens from '../Postagens';



class Principal extends Component {

    async sair(){
        await firebase.auth().signOut();
    }

    componentDidMount(){
        firebase.auth().onAuthStateChanged((user)=>{
            if(!user){
                //JOGAR PARA FORA DO PRINCIPAL SÓ COM UM /
                console.log("Nao logado")
            }
            else{
            }
        });
    }

    render(){

        return(
            <React.Fragment>
                <Menu />
                <Postagens />
            </React.Fragment>
        )
    }
}

export default Principal