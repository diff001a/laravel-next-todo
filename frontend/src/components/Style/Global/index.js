import { colors, sizes } from '../variables';
import layout from './base/layout';
import reset from './base/reset';

import { Global, css } from '@emotion/react';

/* ===============================================
#  set css variables
=============================================== */
function setColor() {
  let styles = '';
  for (const key in colors) {
    styles += `--${key}: ${colors[key]};`;
  }
  return css`
    :root {
      ${styles}
      --width: ${sizes.width};
      --headerHeight: ${sizes.headerHeight};
    }
  `;
}

/* ===============================================
#  font setting
=============================================== */
const font = css`
  font-family: -apple-system, system-ui, 'Segoe UI', 'Hiragino Kaku Gothic ProN',
    'Hiragino Sans', 'ヒラギノ角ゴ ProN W3', Arial, メイリオ, Meiryo, sans-serif;
  word-wrap: break-word;
  word-break: break-all;
  -webkit-font-kerning: normal;
  font-kerning: normal;
  -moz-font-feature-settings: 'palt';
  -webkit-font-feature-settings: 'palt';
  font-feature-settings: 'palt';
  font-variant-ligatures: no-common-ligatures;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: auto;
  -webkit-text-stroke: 1px transparent;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  letter-spacing: 0.03em;
  font-weight: 400;
  color: var(--text);
  font-size: ${sizes.font}px;
  @media screen and (max-width: 780px) {
    font-size: 85%;
  }
`;

/* ===============================================
#  global style
=============================================== */
const globalStyleCss = css`
  ${reset}
  ${setColor()}
  ${layout()}
  html {
    background: var(--background);
    ${font}
    input,
    button,
    textarea,
    button,
    select {
      ${font}
    }
    a {
      color: var(--link);
    }
  }
  body {
    background: var(--background);
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  *:before,
  *:after {
    box-sizing: border-box;
  }
  .flex {
    display: flex;
    &.row {
      flex-direction: row;
    }
    &.column {
      flex-direction: column;
    }
    &.center {
      justify-content: center;
      align-items: center;
    }
    &.justify-start {
      justify-content: flex-start;
    }
    &.justify-end {
      justify-content: flex-end;
    }
    &.justify-center {
      justify-content: center;
    }
    &.justify-stretch {
      justify-content: stretch;
    }
    &.justify-between {
      justify-content: space-between;
    }
    &.align-start {
      align-items: flex-start;
    }
    &.align-end {
      align-items: flex-end;
    }
    &.align-center {
      align-items: center;
    }
    &.align-stretch {
      align-items: stretch;
    }
  }
  .wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .inner {
      width: var(--width);
    }
  }
  .tac {
    text-align: center;
  }
  .mt-auto {
    margin-top: auto;
  }
  .mr-auto {
    margin-right: auto;
  }
  .mb-auto {
    margin-bottom: auto;
  }
  .ml-auto {
    margin-left: auto;
  }
`;

const GlobalStyle = () => {
  return <Global styles={globalStyleCss} />;
};

export default GlobalStyle;
