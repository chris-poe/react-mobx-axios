import React from 'react';
import * as FontAwesome from 'react-icons/lib/fa';

const Icon = ({ name, style }) => {

	switch(name) {
    case 'bell':
      return <FontAwesome.FaBellO className={style} />
    case 'inbox':
      return <FontAwesome.FaInbox className={style} />
   	case 'cog':
    	return <FontAwesome.FaCog className={style} />
    default:
      return null
	}
}

export default Icon;
