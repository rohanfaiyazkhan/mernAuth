import React, {Component} from 'react';
import '../styles/loginform.scss'
import Logo from "../images/logo.svg";

class LoginForm extends Component{
    constructor(props){
        super(props);

        this.state = {
            email:"",
            password:""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        this.setState({email: event.target.email, password: event.target.password});
        //console.log(this.state)
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <img id="logo" src={Logo} alt="SINAMM ENGINEERING" />
                <input id="email" type="email" placeholder="Email" />
                <input id="password" type="password" placeholder="Password" />
                <button type="submit">Log in</button>
            </form>
        )
    }
}

export default LoginForm;
