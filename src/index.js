import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};


class Btn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      succeed: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(previousState => {
      return {
        succeed: !previousState.succeed
      };
    });
  }

  render() {
    const succeed = (
      <div>
        <button bsStyle="primary" bsSize="large">Succeed</button>
      </div>
    )

    const notsucceed = (
      <div>
        <button bsStyle="primary" bsSize="large">Not Succeed</button>
      </div>
    )

    return (
      <div onClick={this.handleClick.bind(this)}>
        {this.state.succeed ? succeed : notsucceed}
      </div>
    )
  }
};


const App = () => (
  <div style={styles}>
    <Hello name="CodeSandbox" />
    <h2>Start editing to see some magic happen {'\u2728'}</h2>
    <Btn />
  </div>
);

render(<App />, document.getElementById('root'));
