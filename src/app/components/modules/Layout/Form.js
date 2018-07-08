import React from 'react';
import { css } from 'aphrodite';

const Form = ({ onSubmit, className, style, ...props }) => (
  <form
    onSubmit={onSubmit}
    className={css(className)}
    style={style}
    {...props}
  />
);

export default Form;
