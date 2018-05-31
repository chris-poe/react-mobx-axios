import React from 'react';
import { css } from 'aphrodite';
import withStore from '../common/Helpers/withStore';

import styles from './styles';

class Screen extends React.Component {
  render() {
    return <div className={css(styles.row)} />;
  }
}

export default withStore(Screen);
