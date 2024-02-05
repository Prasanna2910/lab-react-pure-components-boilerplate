import React from 'react';
import { PureComponent } from 'react';

class Regular extends PureComponent {
  constructor() {
    super();
    this.state = {
      count: 0,
      toggle: false,
    };
  }
  handleClick = () => {
    if (this.state.toggle == true) {
      this.setState({ ...this.state, count: this.state.count + 1 });
    }
  };
  handleToggle = () => {
    this.setState({ ...this.state, toggle: !this.state.toggle });
  };
  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
        <button
          onClick={() => {
            this.handleClick();
          }}
        >
          Add
        </button>
        <button onClick={this.handleToggle}>Toggle</button>
      </div>
    );
  }
}
export default Regular;
