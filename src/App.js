import React from 'react'
import { Button } from 'react-bootstrap'

import './App.css';
import Counter from './components/Counter'

class App extends React.Component {

  state = {
    show: false
  }

  handleShow = () => {
    this.setState({
      show: !this.state.show
    })
  }

  render() {
    return (
      <div className="App" >
        <Button variant="light"
          onClick={this.handleShow}
          className="toggle">Toggle</Button>
        {this.state.show &&
          <Counter testprops="hello props" />
        }
      </div>
    );
  }
}

export default App;
