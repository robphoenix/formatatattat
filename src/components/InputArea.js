import React, { Component } from "react"

export default class InputArea extends Component {
  render() {
    return (
      <div className="input-area">
        <textarea name="inputArea">Paste your JSON here.</textarea>
      </div>
    )
  }
}
