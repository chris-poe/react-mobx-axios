import React from 'react';
import { css } from 'aphrodite';

const Form = ({ className, ...props }) => (
  <form className={css(className)} {...props} />
);

export default Form;
