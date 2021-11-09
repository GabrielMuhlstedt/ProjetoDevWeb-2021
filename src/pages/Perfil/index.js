import React, { Component } from 'react'
import firebase from "../../components/Firebase/firebase.js";

class Perfil extends Component{

    //apenas aparência, preciso que você puxe as informações para serem colocadas aqui

    constructor(props) {
        super(props);

        this.state = {
            usuario = []
        }

        this.puxarDados = this.puxarDados.bind(this);
        

    }

    puxarDados(){

        //id = 1 colocado hardcoded

        let id = 1;

        firebase.ref('usuario/'+ id).on("value", (snapshot) => {
            let usuario = [];
            snapshot.forEach(function(item){
                var key = item.key;
                var valor = item.val();
                usuario.push({ idUsuario: key, nome: valor.nome, email: valor.email, senha: valor.senha});
            });
            let state = this.state;
            state.post = usuario;
            this.setState(state);            
            
          });
    }
    
    mudarSenha(){
        
    }


    render(){
        return(
            <div>
                <h1> {Nome} </h1>
                <h5> {Email} </h5>
                <h5> {senha} </h5>
                <button onClick={this.mudarSenha} >Mudar senha</button>
            </div>
        )
    }
}

export default Perfil