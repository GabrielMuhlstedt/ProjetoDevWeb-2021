import React, { Component } from 'react'
import firebase from "../Firebase/firebase.js";

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

    criarPost(){
        /*Fazer aqui o cadastro do post */
        //id = 1 colocado hardcoded

        let id = 1;


        firebase.ref('usuario/' + id + '/postagens').push({conteudo: this.state.conteudo})
        .then( ()=> {
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
            <div>
                <h3>Novo Post</h3>
                <hr />
                <input type="text" placeholder="conteudo" value={conteudo} onChange={e => this.setConteudo(e)}  />
                <hr />
                <button onClick={this.criarPost} >Criar novo Post</button>
            </div>
        )
    }
}

export default Postar