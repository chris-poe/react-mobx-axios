import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  center: {
    textAlign: 'center',
  },
});

const Text = ({ type, className, center, ...props }) => {
  const Type = type || 'span';
  return (
    <Type className={css(className, center && styles.center)} {...props} />
  );
};

export default Text;
