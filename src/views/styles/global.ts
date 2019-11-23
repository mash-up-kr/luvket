import { css } from '@emotion/core';
import emotionReset from 'emotion-reset';

const global = css`
  ${emotionReset}
  *, *::before, *::after {
    box-sizing: border-box;
  }
`;

export default global;
