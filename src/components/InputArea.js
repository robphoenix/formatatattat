import React from 'react'

const InputArea = ({ value, handleChange }) => (
  <div className="fl w-50">
    <form>
      <label htmlFor="inputArea">
        Paste your JSON here
        <textarea value={value} onChange={handleChange} />
      </label>
    </form>
  </div>
)

export default InputArea
