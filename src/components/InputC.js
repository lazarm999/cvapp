import React from 'react';  
import './InputC.css'
import { Input, Label } from 'reactstrap';

class InputC extends React.Component {
  render(){
    let labelClassName = "label " + this.props.labelClassName;
    let inputClassName = "input " + this.props.inputClassName;
    return (
        <div className = { this.props.className }>
            <Label className = {labelClassName}>{this.props.label}</Label>
            <Input
                  type={this.props.type}
                  className = {inputClassName}
              />
        </div>
    );
  }
}

export default InputC;