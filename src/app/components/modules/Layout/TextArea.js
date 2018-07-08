import React from 'react';

const TextArea = ({ value, onChange, disabled }) => (
  <textarea value={value} onChange={onChange} disabled={disabled} />
);

export default TextArea;
