import { css } from '@emotion/core';
import emotionReset from 'emotion-reset';

const global = css`
  ${emotionReset}
  *, *::before, *::after {
    box-sizing: border-box;
  }

  button {
    padding: 0;
    border: none;
    background-color: transparent;
    cursor: pointer;
    -moz-appearance: none;
    -webkit-appearance: none;
  }

  input {
    border: 0 solid transparent;
    -webkit-appearance: none;

    background: transparent;
  }
`;

export default global;
