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

const Input = ({ className, ...props }) => (
  <input className={css(styles.input, className)} {...props} />
);

export default Input;
