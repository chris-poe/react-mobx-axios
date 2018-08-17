import { StyleSheet } from 'aphrodite/no-important';

const GLOBALS = '__GLOBAL_STYLES__';

const globalExtension = {
  selectorHandler: (selector, baseSelector, generateSubtreeStyles) =>
    baseSelector.includes(GLOBALS) ? generateSubtreeStyles(selector) : null,
};

const extended = StyleSheet.extend([globalExtension]);

const styles = extended.StyleSheet.create({
  [GLOBALS]: {
    body: {
      margin: 0,
      padding: 0,
      overflowX: 'hidden',
    },
  },
});

export default extended.css(styles[GLOBALS]);
