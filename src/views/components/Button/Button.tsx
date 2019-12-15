import { css, SerializedStyles } from '@emotion/core';
import { ButtonHTMLAttributes } from 'react';

import Theme from '../../../models/Theme';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = (props) => <button css={s.button} {...props} />;

const s = {
  button: (theme: Theme): SerializedStyles => css`
    ${theme.typography.caption};
    color: ${theme.palette.gray[900]};
    padding: 6px 12px;
    border: 0;
    outline: none;
    background: none;
    cursor: pointer;
  `,
};

export default Button;
