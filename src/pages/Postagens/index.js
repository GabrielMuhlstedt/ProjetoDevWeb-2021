import React, { Component } from 'react'
import Post from '../../components/Post'
import Comentario from '../../components/Comentario'

class Postagens extends Component{

    /*Implementar lógica para aparição de múltiplos posts, para isso eu preciso que você retorne as postagens do banco */
    
    state = {
       usuario: "",
       posts = [{}, {}, {}]
       
    }

    puxarPosts(){
        //todos os posts
        //array [{usuario, conteudo, comentarios, avaliação}, {}, {}]
        //colocar o array no STATE
    }

    render(){

        return(
            <React.Fragment>
                <Post postador={this.usuario} >
                    <Comentario />
                </Post>
            </React.Fragment>
        )
    }
}

export default Postagens