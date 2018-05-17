import React, { Component } from "react"

export default class OutputArea extends Component {
  render() {
    if (this.props.hasError) {
      return (
        <div className="output-area">
          <p>Error: {this.props.error.toString()}</p>
        </div>
      )
    }
    return (
      <div className="output-area">
        <pre>{this.props.value}</pre>
      </div>
    )
  }
}
