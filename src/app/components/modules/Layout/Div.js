import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { colors } from '../theme';

const styles = StyleSheet.create({
  div: {
    display: 'flex',
    backgroundColor: colors.white,
  },
  flex: {
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
  vh: {
    maxHeight: '100vh',
  },
});

const Div = ({
  className,
  flex,
  stretch,
  center,
  row,
  column,
  vh,
  style,
  ...props
}) => (
  <div
    className={css(
      styles.div,
      className,
      flex && styles.flex,
      stretch && styles.stretch,
      center && styles.center,
      row && styles.row,
      column && styles.column,
      vh && styles.vh
    )}
    style={style}
    {...props}
  />
);

export default Div;
