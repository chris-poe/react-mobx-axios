import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { colors } from '../theme';

const styles = StyleSheet.create({
  input: {
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: colors.gray,
    padding: 20,
    borderRadius: 5,
  },
});

const Input = ({
  type,
  value,
  name,
  placeholder,
  disabled,
  className,
  style,
  ...props
}) => (
  <input
    type={type}
    value={value}
    name={name}
    placeholder={placeholder}
    disabled={disabled}
    className={css(styles.input, className)}
    style={style}
    {...props}
  />
);

export default Input;
