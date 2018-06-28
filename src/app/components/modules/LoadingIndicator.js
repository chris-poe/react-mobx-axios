import React from 'react';
import loading from '../../assets/images/loading.svg';

const LoadingIndicator = ({ size }) => (
  <img src={loading} width={size} height={size} alt="loading" />
);

export default LoadingIndicator;
