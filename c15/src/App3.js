import React from "react";
import "./App.css";

class ButtonComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  onClick() {
    alert(`You clicked on ${this.props.buttonName}`);
  }

  render() {
    return <button onClick={this.onClick.bind(this)}>{this.props.buttonName}</button>;
  }
}
export default class App3 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ButtonComponent buttonName ="Button 1" />
        <ButtonComponent buttonName ="Button 2" />
        <ButtonComponent buttonName ="Button 3"/>
      </div>
    );
  }
}
