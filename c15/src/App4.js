import React from "react";
import "./App.css";

export default class App4 extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        };
    }

    render () {
        return (
            <div>
                <p>Button has been clicked: {this.state.count} times</p>
                <button onClick = { () => this.setState ({count:this.state.count + 1})}>Click ME</button>
            </div>
        )
    }
}