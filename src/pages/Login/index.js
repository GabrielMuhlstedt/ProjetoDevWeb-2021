import React, { Component } from 'react'

class Login extends Component{

    state = {
        email: "",
        senha: ""
    }

    setEmail(e){
        this.setState( { email: e.target.value })
    }

    setSenha(e){
        this.setState( { senha: e.target.value })
    }

    logar(){
        console.log("Logando")
        /*Fazer aqui os comandos para logar */
        firebase.ref("usuario").on("value", (snapshot) => {
          let usuario = [];
          snapshot.forEach(function(item){
              var key = item.key;
              var valor = item.val();
              usuario.push({ id: key, email: valor.email, senha: valor.senha});
          });
          console.log("Usuario encontrado no banco:" + usuario);
          let state = this.state;
          if (state.email == usuario.email and state.senha == usuario.senha) {
            //logou
            console.log("Usuario Logado")
          }else {
            console.log("Usuario não reconhecido")
          }
        });
    }

    render(){
        const { email, senha } = this.state
        return(
            <React.Fragment>
                <h1>Login</h1>
                <hr />
                <input type="email" placeholder="email" value={email} onChange={e => this.setEmail(e)} />
                <br />
                <input type="password" placeholder="senha" value={senha} onChange={e => this.setSenha(e)} />
                <br />
                <button onClick={this.logar} >Logar</button>
            </React.Fragment>
        )

    }

}

export default Login
