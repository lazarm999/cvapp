import React from 'react';  
import './Okpb.css'
import InputC from './InputC'

class Okpb extends React.Component {

  render(){
    return (
        <div className = {this.props.className +  " col s12"} >
          {
            this.props.data.map((el, index)=>(
              <InputC key = {index} label = {el} inputClassName = "okpbInput" labelClassName = "okpbLabel" 
              className = "okpbInputC"/>
            ))
          }
        </div>
    );
  }
}

export default Okpb;