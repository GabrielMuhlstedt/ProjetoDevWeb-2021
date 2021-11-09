import React, { Component, useDebugValue } from 'react'
import Post from '../../components/Post'
import Comentario from '../../components/Comentario'
import firebase from "../../components/Firebase/firebase.js";

class Postagens extends Component{

    /*Implementar lógica para aparição de múltiplos posts, para isso eu preciso que você retorne as postagens do banco */
    
    

    constructor(props) {
        super(props);

        this.state = {
            post: [],
            puxado: false
        }

        this.puxarPosts = this.puxarPosts.bind(this);
        this.setPuxado = this.setPuxado.bind(this);
        this.verificarPostagens = this.verificarPostagens.bind(this);
        this.verificarConteudo = this.verificarConteudo.bind(this)
      } 

    setPuxado(p){
        this.setState( { puxado: p } )
    }

    puxarPosts(){
        //todos os posts
        //array [{usuario, conteudo, comentarios, avaliação}, {}, {}]
        //colocar o array no STATE

        firebase.ref("usuario").on("value", (snapshot) => {
            let usuario = [];
            snapshot.forEach(function(item){
                var key = item.key;
                var valor = item.val();
                usuario.push({ id: key, nome: valor.nome, postagens: [valor.postagens]});
            });
            let state = this.state;
            state.post = usuario;
            this.setState(state);            
            
          });
    }

    mostrar(){
        console.log("function")
        console.log(this.state.post)
    }

    verificarPostagens(p ){
        if(p[0] == undefined){
            return false
        }
        return true
    }

    verificarConteudo(p){
        if(p == undefined){
            console.log("false")
            return false
        }
        console.log("true")
        return true
    }

    render(){

        const { posts, puxado } = this.state

        if(!puxado){
            this.puxarPosts()
            this.setPuxado(true)
            
        }
        return(

            <React.Fragment >
                {
                    this.state.post.map((u, index) => {
                        return(
                            <div key={index}>
                                {this.verificarPostagens(u.postagens) ? (
                                    <React.Fragment>
                                        {u.postagens.map((p, i) => {
                                            return(
                                                <div key={i}>
                                                    
                                                    {
                                                        p.map((post, ind) => {
                                                            return(
                                                                <div key={ind}>
                                                                    <hr/>
                                                                    <h3>{u.nome}</h3>
                                                                    <hr/>
                                                                    <h1>{post.conteudo}</h1>
                                                                    <p>Like: {post.likes}</p>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                    
                                                </div>
                                            )
                                        })}
                                    </React.Fragment>
                                ): null}
                            </div>
                        )
                    })
                }
                
            </React.Fragment>
        )
    }
}

export default Postagens