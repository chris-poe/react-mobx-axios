import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { colors } from './theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  flex: {
    display: 'flex',
    flex: 1,
  },
  stretch: {
    alignSelf: 'stretch',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
});

const Div = ({
  className,
  flex,
  stretch,
  center,
  row,
  column,
  style,
  ...props
}) => (
  <div
    className={css(
      styles.container,
      className,
      flex && styles.flex,
      stretch && styles.stretch,
      center && styles.center,
      row && styles.row,
      column && styles.column
    )}
    style={style}
    {...props}
  />
);

const Text = ({ type, className, style, ...props }) => {
  const Text = type;
  return <Text className={css(className)} style={style} {...props} />;
};

export { Div, Text };
