import React from 'react';
import * as FontAwesome from 'react-icons/lib/fa';

const Icon = ({ name, style }) => {
  const Icon = FontAwesome[name];
  return <Icon className={style} />;
};

export default Icon;
