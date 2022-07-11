import React from "react";

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      show: props.show
    };
  }
  onChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  render() {
    console.log(this.state.name);

    return (
      <div>
        {this.state.show ? (
          <div>
            <h1>My name is: {this.state.name}</h1>
            <input
              type="text"
              value={this.state.name}
              onChange={this.onChange}
            />
            <input type="text" />
          </div>
        ) : null}
      </div>
    );
  }
}

export default MyComponent;
