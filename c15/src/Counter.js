import React from 'react'

class Counter extends React.Component {
    constructor(props) {
        super(props);

        console.log('counter sd', this.props.student.details)
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        console.log('Counter componentDidMount');
    }

    componentDidUpdate() {
        console.log('Counter componentDidUpdate');
    }

    render() {  
        const { details } = this.props.student;
        const { address } = details;

        return (
          <>
          <div>
           old counter sd: {address}
          </div>
            
                <button onClick={() => {
                        console.log('we are here, current state is now: ', this.state.count);

                        const futureState = this.state.count + 1;
                        console.log('future state will be: ', futureState);

                        return this.setState({ count: futureState })

                    }}>+</button>
                <button onClick={() => {
                    console.log('we are here, current state is now: ', this.state.count);

                    const futureState = this.state.count - 1;
                    console.log('future state will be: ', futureState);

                    return  this.setState({ count: futureState })
                }}>-</button>
                <div style={{backgroundColor: '#eee', padding: '20px', fontSize: '20px'}}>
                    <p>{this.state.count}</p>
                </div>
          </>
        );
    }

}

export default Counter;