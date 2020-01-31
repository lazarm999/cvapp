import React from 'react';  
import './Registration.css'
import InputC from "./InputC"
import Button from "./Button"
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

var registracija = [
    {
      naslov: "Osnovni podaci",
      labels: ["Ime","Ime roditelja","Prezime","Datum rođenja"]
    },
    {
      naslov: "Kontakt",
      labels: ["Broj telefona","LinkedIn"]
    },
    {
      naslov: "Prebivalište",
      labels: ["Država","Grad", "Adresa"]
    },
    {
      naslov: "Boravište",
      labels: ["Država","Grad", "Adresa"]
    },
    {
      naslov: "Login informacije",
      labels: ["Email","Lozinka","Ponovi lozinku"]
    },
  ];

class Registration extends React.Component {

  constructor(props){
    super(props);
    this.onClickNext = this.onClickNext.bind(this);
    this.onClickBack = this.onClickBack.bind(this);
    this.state = {
      currentRegInput: 0,
      steps: [1,2,3,4,5]
    };
    this.props.setBestLogo(false);
  }

  onClickNext(e){
    if(this.state.currentRegInput < 4){
      this.setState({
        currentRegInput: this.state.currentRegInput + 1
      });
    }
    e.preventDefault();
  }

  onClickBack(e){
    if(this.state.currentRegInput > 0){
      this.setState({
        currentRegInput: this.state.currentRegInput - 1
      });
    }
    e.preventDefault();
  }

  render(){
    return (
        <div className = "row registrationContainer">
          <a href="/" className = "home">
            <img src = "photos/home.png" alt = "job fair"></img>
          </a>
          <div className = "col s12 m12 l12 xl12 regHeader">
            <h3>Registracija</h3>
          </div>
          <div className = "col s12 m12 l12 xl12">
            <div className = "progBarContainer">
              <ProgressBar
                      percent={this.state.currentRegInput * 25}
                      fillBackground='rgba($color: lightgrey, $alpha: 0.6)'
                    >
                    {
                      this.state.steps.map((step)=>(
                      <Step transition="scale" key = {step}>
                      {({ accomplished }) => (
                        <div className = "step"
                        style={ {color: accomplished ? 'white' : 'darkgrey',
                        backgroundColor: accomplished ? '#FAA519' : 'white'} }>{step}</div>
                      )
                    }
                    </Step>))}
              </ProgressBar>
            </div>
          </div>
          <div className = "col s12 m12 l12 xl12 regInputWrapper">
            <div className = "regInputContainer">
              <h4>{registracija[this.state.currentRegInput].naslov}</h4>
              {registracija[this.state.currentRegInput].labels.map((label, index) => {
                  return (
                      <InputC label = {label} type = "text" key = {index} inputClassName = "regInput"
                      labelClassName = "regLabel" />
                  );
              })}
              { this.state.currentRegInput === 4 ? 
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>Slažem se sa <a href = "#" > uslovima korišćenja </a> </span>
                  </label>
                </p> : null
              }
            </div>
          </div>
          <div className = "col s12 m12 l12 xl12 buttonsWrapper">
            <div className = "buttonsContainer">
              { this.state.currentRegInput != 0 ? <Button className = "backButton" text = "Nazad" onClick = {this.onClickBack} /> : null }
              <Button className = "nextButton" text = {this.state.currentRegInput == 4 ? "Kreiraj nalog" : "Dalje" }  onClick = { this.onClickNext }/>
            </div>
          </div>
        </div>
    );
  }
}

export default Registration;