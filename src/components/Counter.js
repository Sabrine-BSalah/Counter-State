import React from 'react'
import { Button, Form } from 'react-bootstrap'

class Counter extends React.Component {

  state = {
    count: 0,
    inputText: ""
  }

  // constructor(props) {
  //   super();
  //   this.state = {
  //     count: 0
  //   }
  //   console.log("constructor")
  // }

  // componentDidMount
  componentDidMount() {
    console.log("Counter Component did mount")
  }

  // componentWillUnmount
  componentWillUnmount() {
    console.log("Counter Component wil unmount")
  }

  // componentDidUpdate
  componentDidUpdate(prevprops, prevstate) {
    console.log("Counter Component did update")
    console.log(prevprops, prevstate)
  }


  // handleClickPlus
  handleClickPlus = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }

  // handleClickMinus
  handleClickMinus = () => {
    return this.state.count > 0 &&
      this.setState({
        count: this.state.count - 1
      })
  }

  // handleChange
  handleChange = (e) => {
    this.setState({
      inputText: e.target.value
    })
  }


  render() {
    console.log("render")
    return (
      <div className="counterPart">
        <h2 className="title">This is a counter : </h2>
        <div>
          {/* Button plus */}
          <Button variant="info"
            onClick={this.handleClickPlus}
            className="addBtn">+</Button>

          {/* Count value */}
          <span className="count">{this.state.count}</span>

          {/* Button Minus */}
          <Button variant="info"
            onClick={this.handleClickMinus}
            className="minusBtn">-</Button>

        </div>

        {/* Input */}
        <Form.Control type="text"
          placeholder="Enter text here"
          onChange={this.handleChange}
          style={{ width: "50%" }}
        />
        <h3 style={{ color: "white", marginTop: "20px" }}>{this.state.inputText}</h3>
      </div>
    )
  }
}

export default Counter