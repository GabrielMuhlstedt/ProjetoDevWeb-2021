import React, { Component } from 'react'
import './style.css'

class Menu extends Component {

    state = {
        opcao: ""
    }

    render(){
        const opcao = this.state

        return(
            <React.Fragment>
                <nav>
                    <li>Principal</li>
                    <li>Meu Perfil</li>
                    <li>Meus Posts</li>
                    <li>Populares</li>
                    <li>Configurações</li>
                    <li>##########</li>
                    <li>##########</li>
                </nav>
            </React.Fragment>
        )
    }

}

export default Menu