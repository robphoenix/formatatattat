import React from 'react';

const InputArea = ({ value, handleChange }) => (
  <div>
    <form>
      <label htmlFor="inputArea">
        JSON:
        <textarea value={value} onChange={handleChange} />
      </label>
    </form>
  </div>
);

export default InputArea;
