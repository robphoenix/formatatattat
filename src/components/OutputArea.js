import React, { Component } from "react"

export default class OutputArea extends Component {
  render() {
    return (
      <div className="output-area">
        <p>{this.props.value}</p>
      </div>
    )
  }
}
