import { css, SerializedStyles } from '@emotion/core';

import Theme from '../../../models/Theme';

interface LoginButtonProps {
  icon: string;
}

const LoginButton: React.FC<LoginButtonProps> = ({ icon, ...otherProps }) => (
  <button type="button" css={s.button} {...otherProps}>
    <img src={icon} alt="icon" css={s.icon} />
    {otherProps.children}
  </button>
);

const s = {
  button: (theme: Theme): SerializedStyles => css`
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    border: 0;
    border-radius: 20px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;
    span {
      ${theme.typography.button};
      margin-right: auto;
    }
  `,
  icon: css`
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 5px;
    margin-left: auto;
  `,
};

export default LoginButton;
