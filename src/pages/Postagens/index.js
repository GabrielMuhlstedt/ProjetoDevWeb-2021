import React, { Component } from 'react'
import Post from '../../components/Post'
import Comentario from '../../components/Comentario'
import firebase from "../../components/Firebase/firebase.js";

class Postagens extends Component{

    /*Implementar lógica para aparição de múltiplos posts, para isso eu preciso que você retorne as postagens do banco */
    
    

    constructor(props) {
        super(props);

        this.state = {
            //*Gabriel*
            //temos q dar um jeito de guardar o id atual da pessoa!.
            idAtual: 1,
            usuario: [],
            posts: []
        }

        this.puxarPosts = this.puxarPosts.bind(this);
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
                usuario.push({ id: key});
            });
            let state = this.state;
            state.usuario = usuario;
            this.setState(state);

            var count = 0;  
            while (count < usuario.length){
                console.log(usuario[count]);
                if (usuario[count] == state.idAtual){
                    firebase.ref("postagens").on(usuario.id, (snapshot) => {
                        let comentarios = [];
                        snapshot.forEach(function(item){
                            var key = item.key;
                            var valor = item.val();
                            this.state.posts.push({ idPost: key, conteudo: valor.conteudo, likes: valor.likes});
                        });
                      });
                }
                count ++;
            }
            console.log(this.state.posts);
          });
    }

    render(){

        return(
            <React.Fragment>
                <button onClick={this.puxarPosts} >Posts</button>
                <Post postador={this.usuario} >
                    <Comentario />
                </Post>
            </React.Fragment>
        )
    }
}

export default Postagens