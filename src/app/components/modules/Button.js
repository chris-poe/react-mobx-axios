import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { pulse } from 'react-animations';
import LoadingIndicator from './LoadingIndicator';
import { colors } from './theme';

const styles = StyleSheet.create({
  button: {
    minWidth: 175,
    minHeight: 75,
    border: 0,
    paddingRight: 20,
    paddingLeft: 20,
    borderRadius: 0,
    fontSize: 18,
  },
  primary: {
    backgroundColor: colors.blue,
  },
  secondary: {
    backgroundColor: 'white',
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: colors.blue,
  },
  secondaryText: {
    color: 'white',
  },
  primaryText: {
    color: colors.blue,
  },
  hover: {
    ':hover': {
      cursor: 'pointer',
    },
  },
  active: {
    ':active': {
      animationName: pulse,
      animationDuration: '0.25s',
    },
  },
  disabled: {
    backgroundColor: colors.gray,
  },
  rounded: {
    borderRadius: 5,
  },
});

const Button = ({
  primary,
  secondary,
  onClick,
  text,
  animate,
  disabled,
  rounded,
  loading,
  style,
  ...props
}) => (
  <button
    onClick={onClick}
    className={css(
      primary && [styles.button, styles.primary],
      secondary && [styles.button, styles.secondary],
      animate && !disabled && !loading && styles.active,
      (disabled || loading) && styles.disabled,
      rounded && styles.rounded,
      styles.hover
    )}
    style={style}
    disabled={disabled || loading}
    {...props}
  >
    {!loading ? (
      <span
        className={css(
          primary && styles.secondaryText,
          secondary && styles.primaryText
        )}
      >
        {text.toUpperCase()}
      </span>
    ) : (
      <LoadingIndicator size={25} />
    )}
  </button>
);

export default Button;
