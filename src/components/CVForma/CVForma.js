import React from 'react';  
import './CVForma.css'
import UserInfo from './UserInfo' 
import Okpb from '../Okpb'
import FacultyAndHighSchool from './FacultyAndHighSchool'
import Experience from './Experience' 

var tabs = [ "Osnovni podaci", "Kontakt", "Prebivalište", "Boravište", 
"Srednje obrazovanje", "Visoko obrazovanje","Iskustvo"];

var okpbData = [
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
  }
];

class CVForma extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      currentTab: 0
    };
    this.props.setBestLogo(false);
    this.tabOnClick = this.tabOnClick.bind(this);
  }
  
  tabOnClick(e, tabIndex){
    this.setState({
      currentTab: tabIndex,
      isModalOpen: true
    });
    e.preventDefault();
  }

  render(){
    return (
      <div className = "row cvFormContainer">
          <div className = "logoutAndHomeContainer">
            <a href="#" onClick = {(e)=>{this.tabOnClick(e, 0)}}>
              <img className = "cvFormHome" src = "photos/home.png" alt = "job fair"></img>
            </a>
            <a href="/" >
              <img className = "logout" src = "photos/logoutImg.png" alt = "job fair"></img>
            </a>
          </div>
          <div className = "col s12 cvFormaHContainer">
            <h4 className = "cvFormaH"> CV Forma </h4>
          </div>
          <div className = "col s12 tabsWrapper">
            <div className = "tabsContainer">
              {
                tabs.map((tabInfo, index)=>(
                  <a href={"#"} onClick={(e) => this.tabOnClick(e, index)} className = "tab"
                  key = {index}
                  style={ {color: this.state.currentTab === index ? '#FAA519' : 'white',
                          textDecoration: this.state.currentTab === index ? 'underline' : ''}}>{tabInfo}
                  </a>
                ))
              }
            </div>
          </div>
          <div className = "col s12 m12 l12 xl12 activeTabHContainer">
            <h5 className = "activeTabH"> {tabs[this.state.currentTab]} </h5>
          </div>
          <div className = "col s12 m12 l12 xl12">
            { this.state.currentTab === 0 ? <UserInfo/> : null }
            { this.state.currentTab < 4 && this.state.currentTab > 0 ? <Okpb className = "okpb" data = {okpbData[this.state.currentTab].labels}/> : null }
            { this.state.currentTab === 4 ? <FacultyAndHighSchool setModal = {this.props.setModal} modal = {0}/> : null }
            { this.state.currentTab === 5 ? <FacultyAndHighSchool setModal = {this.props.setModal} modal = {1}/> : null }
            { this.state.currentTab === 6 ? <Experience/> : null }
          </div>
        </div>
    );
  }
}

export default CVForma;