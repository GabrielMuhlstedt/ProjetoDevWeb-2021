import React, { Component } from 'react'
import './style.css'
import Menu from '../../components/Menu'
import Postagens from '../Postagens'


class Principal extends Component {

    state = {
        info: ""
    }

    render(){

        const { info } = this.state

        return(
            <React.Fragment>
                <Menu />
                <Postagens />


            </React.Fragment>
        )
    }
}

export default Principal