import React, { Component } from 'react'
import './style.css'

class Menu extends Component {

    state = {
        opcao: ""
    }

    render(){
        const opcao = this.state

        return(
            <React.Fragment className={"menuArea"}>
                <nav className={"menu"}>
                    <li>Principal</li>
                    <li>Meu Perfil</li>
                    <li>Meus Posts</li>
                    <li>Populares</li>
                    <li>Configurações</li>
                </nav>
            </React.Fragment>
        )
    }

}

export default Menu