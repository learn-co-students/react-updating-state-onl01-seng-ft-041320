import React from 'react'

export default class ClickityClick extends React.Component {
    constructor() {
        super()
        
        // Define the initial state:
        this.state = {
            hasBeenClicked: false 
        }
    }

    handleClick = () => {
        // Update our state here:
        this.setState(previousState => {
            return {
                count: previousState.count + 1
            }
        })
    }

    render() { 
        return (
            <div>
                <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked</p>
                <button onClick={this.handleClick}>Click Me!</button>
            </div>
        )
    }

}
