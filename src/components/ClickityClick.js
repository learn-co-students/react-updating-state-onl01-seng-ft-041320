// Code ClickityClick Component Here
import React from 'react';

class ClickityClick extends React.Component {
    constructor() {
        super();

        this.state = {
            hasBeenClicked: false
        };
    }

    handleClick = () => {
        this.setState({
            hasBeenClicked: true 
        }, () => console.log(this.state.hasBeenClicked)) //true bc firing when state is updated, before 'pooling'
        // console.log(this.state.hasBeenClicked); 
        // prints false due to asynchronous state change 
    }

    render() {
        return (
            <div>
                <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
                <button onClick={this.handleClick}>Click me!</button>
            </div>
        );
    }
}

export default ClickityClick;
