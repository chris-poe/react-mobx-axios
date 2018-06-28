import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import getImage from './images';

const styles = StyleSheet.create({
  contain: {
    backgroundSize: 'contain',
  },
  cover: {
    backgroundSize: 'cover',
  },
});

const Image = ({ src, name, height, width, alt, contain, cover, ...props }) => (
  <img
    src={name ? getImage(name) : src}
    height={height}
    width={width}
    alt={name}
    className={css(contain && styles.contain, cover && styles.cover)}
    {...props}
  />
);

export default Image;
