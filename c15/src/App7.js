import React from "react";
import "./App.js";

export default class App7 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {firstName: '', lastName: ''};
    this.onClick=this.onClick.bind(this);
    this.onFirstNameChanged=this.onFirstNameChanged.bind(this);
    this.onLastNameChanged=this.onLastNameChanged.bind(this);
  }

  onClick() {
    alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
  }


  onFirstNameChanged (e){
    this.setState({firstName:e.target.value})
  }

  onLastNameChanged (e){
      this.setState({lastName:e.target.value})
  }


  render() {
    return (
      <div className="Parent">
        <input placeholder="First name" type="text" value={this.state.firstName} onChange= {this.onFirstNameChanged} />
        <input placeholder="Last name" type="text" value={this.state.lastName} onChange= {this.onLastNameChanged}/>
        <p></p>
        <button style={{backgroundColor:'pink'}} onClick={this.onClick}>
          Greet ME
        </button>
      </div>
    );
  }
}