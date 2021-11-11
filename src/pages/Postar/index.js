import React, { Component, lazy } from 'react'
import { Link } from "react-router-dom";
import { Simulate } from 'react-dom/test-utils';
import firebase from "../../components/Firebase/firebase.js";

import "./style.css"

class Postar extends Component{

    constructor(props) {
        super(props);

        this.state = {
            conteudo : ""
        }  

        
        this.criarPost = this.criarPost.bind(this);

   
    }

    setConteudo(e){
        this.setState( { conteudo: e.target.value } )
    }

    voltar(){
        //vo me mata
    }

    criarPost(){

        let userId = '';

        firebase.auth().onAuthStateChanged(user => {if(user) {
            userId = user.uid;  
            }
        });
        
        
        firebase.database().ref('usuario/' + userId + '/postagens').push({conteudo: this.state.conteudo})
        .then( ()=> {
            alert("Postagem Concluida");
            console.log("Postagem Concluida");
        })
        .catch((erro)=>{
            console.log("mensagem:" + erro);
        })

        /*
        console.log(this.state.conteudo);
        firebase.ref("/usuario/\ "+ id + "/\postagens/").push({conteudo:this.state.conteudo})
        .then( ()=> {
          console.log("Postagem Concluida");
        })
        .catch((erro)=>{
          console.log("mensagem:" + erro);
        })
        */
    }

    render(){
        const { conteudo } = this.state
        return(
            <div className="post-table">
                <h3 className="postar-titulo">Novo Post</h3>
                
                <input className="input-postar" type="text" placeholder="Conteudo" value={conteudo} onChange={e => this.setConteudo(e)}  />
                <br/>
                <button className="btn-postar-post" onClick={this.criarPost} >Criar novo post</button>
                <Link to="/Principal"><button className="btn-postar">Voltar</button></Link>
            </div>
        )
    }
}

export default Postar;