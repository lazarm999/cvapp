import React from 'react'
import './Login.css'
import Button from './Button'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import InputC from './InputC'
import {loginRequest} from '../common/actions/userActions';


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
        this.props.submit({username: this.state.username , password: this.state.password});
        // console.log(`${this.state.username}  ${this.state.password}`);
        // this.props.submit({username: 'test', password:'test'})
        //window.location.replace("/cvForma");
    }

    onUserNameChange = username => {
        this.setState({username})
    }

    onChangePassword = password => {
        this.setState({password})
    }

    render(){
        return (
            <div className="row loginContainer">
                <div className="col s12">
                    <img src = "photos/job_fair_login.png" alt = "job fair" className = "jobFairLogo"></img>
                </div>
                <div className="col s12 inputContainer" >
                    <InputC type="email" label = "Email" labelClassName = "loginLabel" onSubmit={this.onUserNameChange}/>
                </div>
                <div className="col s12 inputContainer">
                    <InputC type="password" label = "Lozinka" labelClassName = "loginLabel" onSubmit={this.onChangePassword}/>
                </div>
                <div className="col s12 loginAndForgotPassContainer">
                    <div className = "col s12 m12 l6 xl6 loginBtnContainer">
                        <Button text = "Uloguj se" onClick = {this.onLoginBtnClick}></Button>
                        {this.props.proccessing? ( <div class="preloader-wrapper small active">
                            <div class="spinner-layer spinner-white-only">
                                <div class="circle-clipper left">
                                <div class="circle"></div>
                                </div><div class="gap-patch">
                                <div class="circle"></div>
                                </div><div class="circle-clipper right">
                                <div class="circle"></div>
                            </div>
                            </div>
                        </div>) : null}
                       
                    </div>
                    <div className = "col s12 m12 l6 xl6 forgotPassLinkContainer">
                        <a href="/forgotPass" className = "forgotPassLink">Zaboravio si lozinku?</a>
                    </div>
                </div>
                {this.props.error? 
                    (<div className = "col s12 m12 l12 xl12">
                        <p className="ydha red-text text-darken-1"> Pogrešan email i/ili lozinka, pokušajte ponovo </p>
                    </div>) 
                    : null
                }
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

const mapStateToProps = state => {
    return {
        proccessing: state.proccessing,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        submit: credentials => {
            dispatch(loginRequest(credentials))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginComponent);