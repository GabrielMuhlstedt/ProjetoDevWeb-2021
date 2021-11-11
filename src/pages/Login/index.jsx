import React, { Component, useEffect } from 'react'
import firebase from "../../components/Firebase/firebase.js";
// import Principal from '../Principal/index.js';
import './style.css';
import Fundo from "../../assets/FundoFloresta.png";

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            mensagem: "",
            idAtual: "",
            email: "",
            senha: ""
        }

        this.logar = this.logar.bind(this);
    }

    

    setEmail(e) {
        this.setState({ email: e.target.value });
    }

    setSenha(e) {
        this.setState({ senha: e.target.value });
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                console.log("Logado");
                this.state.mensagem = "Logado";
                //IR PARA O PRINCIPAL===========================
            }
            else {

            }
        });

    }


    async sair() {
        await firebase.auth().signOut();
    }

    logar() {
        firebase.auth().signInWithEmailAndPassword("queromematar@gmail.com", "gabriel123")
        .then((auth)=> {
            console.log("Logou!!!!");
            //IR PARA O PRINCIPAL===========================
        })
        .catch((error)=>{
          console.log("Erro:" + error);
        })
        
        
    }
    // embaixo do login, printar mensagem
    render() {
        return (
            <React.Fragment>
                {/* <img src={Fundo} /> */}

                <h1 className="tudo">Login</h1>
                
                <hr />
                <input type="email" className="input" placeholder="E-mail" onChange={(e) => this.setState({email: e.target.value})} />
                <br />
                <input type="password" className="input" placeholder="Senha" onChange={(e) => this.setState({senha: e.target.value})} />
                <br />
                <button className="btn-logar" onClick={this.logar} >Logar</button>
                <button className="btn-sair" onClick={this.sair} >Sair</button>
            </React.Fragment>
        )

    }

}

export default Login
