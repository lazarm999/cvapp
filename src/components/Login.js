import React from 'react'
import './Login.css'
import Button from './Button'
import InputC from './InputC'

class LoginComponent extends React.Component{

    constructor(props){
        super(props);
        this.onRegBtnClick = this.onRegBtnClick.bind(this);
        this.onLoginBtnClick = this.onLoginBtnClick.bind(this);
    }

    onRegBtnClick(){
        window.location.replace("/registration");
    }

    onLoginBtnClick(){
        window.location.replace("/cvForma");
    }

    render(){
        return (
            <div className="row loginContainer">
                <div className="col s12">
                    <img src = "photos/job_fair_login.png" alt = "job fair" className = "jobFairLogo"></img>
                </div>
                <div className="col s12 inputContainer" >
                    <InputC type="email" label = "Email" labelClassName = "loginLabel"/>
                </div>
                <div className="col s12 inputContainer">
                    <InputC type="password" label = "Lozinka" labelClassName = "loginLabel"/>
                </div>
                <div className="col s12 loginAndForgotPassContainer">
                    <div className = "col s12 m12 l6 xl6 loginBtnContainer">
                        <Button text = "Uloguj se" onClick = {this.onLoginBtnClick}></Button>
                    </div>
                    <div className = "col s12 m12 l6 xl6 forgotPassLinkContainer">
                        <a href="/forgotPass" className = "forgotPassLink">Zaboravio si lozinku?</a>
                    </div>
                </div>
                <div className = "col s12 m12 l12 xl12">
                    <p className="ydha"> Nemaš nalog? </p>
                </div>
                <div className = "col s12 m12 l12 xl12 registerBtnContainer">
                    <Button text = "Registruj se!" onClick = {this.onRegBtnClick} ></Button>
                </div>
            </div>
        );
    }
}
export default LoginComponent;