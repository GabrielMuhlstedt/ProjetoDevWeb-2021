import React, { Component } from 'react'
import firebase from "../../components/Firebase/firebase.js";

class Perfil extends Component{

    //apenas aparência, preciso que você puxe as informações para serem colocadas aqui

    constructor(props) {
        super(props);

        this.state = {
            nome: "",
            email: "",
            senha: "",
            puxado: false
        }

        this.puxarDados = this.puxarDados.bind(this);
        this.setPuxado = this.setPuxado.bind(this)
        

    }

    componentDidMount(){
        if(!this.puxado){
            this.puxarDados()
            this.setPuxado(true)
            
        }
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
            
            console.log("AQUI")
            console.log(usuario)
            console.log("Testes")
            console.log(usuario.nome)
            let state = this.state;
            state.nome = usuario.nome;
            state.email = usuario.email;
            state.senha = usuario.senha;
            this.setState(state);            
            
          });
    }
    
    mudarSenha(){
        
    }

    setPuxado(p){
        this.setState( { puxado: p } )
    }


    render(){

        

        return(
            <div>
                <h1> {this.nome} </h1>
                <h5> {this.email} </h5>
                <h5> {this.senha} </h5>
                <button onClick={this.mudarSenha} >Mudar senha</button>
            </div>
        )
    }
}

export default Perfil