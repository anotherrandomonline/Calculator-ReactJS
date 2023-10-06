import React, { Component } from 'react'
import {evaluate} from 'mathjs'

import 'bootstrap/dist/css/bootstrap.min.css'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      num1: 0,
      num2: 0,
      type: '+',
      result: ''
    }
    this.calculate = this.calculate.bind(this)
  }
  set(event) {
    let name = event.target.name
    let value = event.target.value
    this.setState({
      [name]: value
    })
  }
  calculate() {
    let {num1, num2, type} = this.state
    this.setState({
      result: evaluate(`${num1}${type}${num2}`)
    })
  }
  render() {
    return (
      <div className='mx-auto pt-3' style={{width: 400, textAlign:'center'}}>
        <h1>
          {this.state.num1} {this.state.type} {this.state.num2} = {this.state.result}
        </h1>
        <input name='num1' placeholder='First Number' type="number" onChange={this.set.bind(this)} />
        <input name='num2' placeholder='Second Number' type="number" onChange={this.set.bind(this)} /><br /><br />
        <button type="button" className="btn btn-primary" onClick={() => this.setState({type: "+"})}>Addition</button>
        <button type="button" className="btn btn-primary" onClick={() => this.setState({type: "-"})}>Subtraction</button>
        <button type="button" className="btn btn-primary" onClick={() => this.setState({type: "*"})}>Multiplication</button>
        <button type="button" className="btn btn-primary" onClick={() => this.setState({type: "/"})}>Division</button><br /><br />
        <button type="button" className="btn btn-primary" onClick={this.calculate}>Calculate</button>
      </div>
    )
  }
}

export default App