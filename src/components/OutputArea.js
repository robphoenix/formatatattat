import React from 'react'

const OutputArea = ({ hasError, value, error }) => {
  if (hasError) {
    return (
      <div className="avenir">
        <p>Error: {error.toString()}</p>
      </div>
    )
  }
  return (
    <div className="fl w-50">
      <pre className="code">{value}</pre>
    </div>
  )
}

export default OutputArea
