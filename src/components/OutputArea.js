import React from 'react';

const OutputArea = ({ hasError, value, error }) => {
  if (hasError) {
    return (
      <div className="output-area">
        <p>Error: {error.toString()}</p>
      </div>
    );
  }
  return (
    <div className="output-area">
      <pre>{value}</pre>
    </div>
  );
};

export default OutputArea;
