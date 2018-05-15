import React, { Component } from "react"

export default class InputArea extends Component {
  render() {
    return (
      <div className="input-area">
        <form>
          <label>
            JSON:
            <textarea
              value={this.props.value}
              onChange={this.props.handleChange}
            />
          </label>
        </form>
      </div>
    )
  }
}
