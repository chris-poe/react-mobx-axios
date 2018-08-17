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

const Image = ({ src, name, alt, contain, cover, ...props }) => (
  <img
    src={name ? getImage(name) : src}
    className={css(contain && styles.contain, cover && styles.cover)}
    alt={alt || ''}
    role={!alt ? 'presentation' : null}
    {...props}
  />
);

export default Image;
