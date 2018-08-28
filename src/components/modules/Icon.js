import React from 'react';
import * as FontAwesome from 'react-icons/lib/fa';

const Icon = ({ name, ...props }) => {
  const Fa = FontAwesome[name];
  return <Fa {...props} />;
};

export default Icon;
