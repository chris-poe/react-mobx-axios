import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { colors } from '../theme';

const styles = StyleSheet.create({
  center: {
    textAlign: 'center',
  },
});

const Text = ({ type, className, center, style, ...props }) => {
  const Text = type;
  return (
    <Text
      className={css(className, center && styles.center)}
      style={style}
      {...props}
    />
  );
};

export default Text;
