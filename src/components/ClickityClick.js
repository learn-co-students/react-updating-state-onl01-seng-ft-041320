import React from 'react';

class ClickityClick extends React.Component {
  constructor() {
    super();

    // Define the initial state:
    this.state = {
      toggled: false
    };
  }

  handleClick = () => {
      this.setState(previosState => {
      return { toggled: !previosState.toggled
      }
    })
    // Update our state here...
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.toggled ? "ON" : "OFF"}</button>
      </div>
    );
  }
}

export default ClickityClick;
