import React, { Component } from 'react'
import firebase from "../../components/Firebase/firebase.js";
//import Button from "../../components/Button"

class Cadastro extends Component{

    constructor(props){
        super(props);
        this.cadastrar = this.cadastrar.bind(this);
    }

    state = {
        nome: "",
        email: "",
        senha: "",
        confirmarSenha: ""
    }



    setNome(e){
        this.setState( { nome: e.target.value } )
    }

    setEmail(e){
        this.setState( { email: e.target.value } )
    }

    setSenha(e){
        this.setState( { senha: e.target.value } )
    }

    setCongirrmarSenha(e){
        this.setState( { confirmarSenha: e.target.value } )
    }

    cadastrar(){
        /* Fazer aqui a parte do cadastro  */

        //para fazer >>>>
        //verificar se o usuario ja existe atraves do email

        var senhaMD5 = md5(this.state.senha);
        firebase.ref("usuario").push({nome: this.state.nome, email:this.state.email, senha: senhaMD5})
        .then( ()=> {
          console.log("Cadastro Concluido");
        })
        .catch((erro)=>{
          console.log("mensagem:" + erro);
        })
    }

    render(){
        const { nome, email, senha, confirmarSenha } = this.state
        return(
            <div>
                <h1>Cadastro</h1>
                <hr />
                <input type="text" placeholder="Nome de usuário" value={nome} onChange={e => this.setNome(e)} />
                <br />
                <input type="email" placeholder="email" value={email} onChange={e => this.setEmail(e)} />
                <br />
                <input type="password" placeholder="senha" value={senha} onChange={e => this.setSenha(e)} />
                <br />
                <input type="password" placeholder="confirmar senha" value={confirmarSenha} onChange={e => this.setCongirrmarSenha(e)} />
                <br />
                <button onClick={this.cadastrar} >Cadastrar</button>
            </div>
        )
    }

}

export default Cadastro
