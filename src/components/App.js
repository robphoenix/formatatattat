import React, { Component } from 'react'
import '../App.css'
import InputArea from './InputArea'
import OutputArea from './OutputArea'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: 'Paste your JSON here.',
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
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Formattertattat</h1>
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
