import React, { Component } from 'react'
import '../App.css'
import InputArea from './InputArea'
import OutputArea from './OutputArea'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      outputValue: '',
      hasError: false,
      errorValue: '',
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({ inputValue: event.target.value })
    let parsed = ''
    try {
      parsed = JSON.parse(event.target.value)
    } catch (e) {
      this.setState({
        hasError: true,
        errorValue: e,
      })
      return
    }
    const formatted = JSON.stringify(parsed, null, 2)
    this.setState({
      outputValue: formatted,
      hasError: false,
      errorValue: '',
    })
  }

  render() {
    return (
      <div className="">
        <header className="tc">
          <h1 className="f1 fw4 avenir pb4">
            Formatter<span className="mid-gray">tat</span>
            <span className="gray">tat</span>
          </h1>
        </header>
        <InputArea
          value={this.state.inputValue}
          handleChange={this.handleChange}
        />
        <OutputArea
          hasError={this.state.hasError}
          value={this.state.outputValue}
          error={this.state.errorValue}
        />
      </div>
    )
  }
}

export default App
