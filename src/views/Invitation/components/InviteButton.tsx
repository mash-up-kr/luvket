import { css, SerializedStyles } from '@emotion/core';

import Theme from '../../../models/Theme';

interface InviteButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  label: string;
  icon: string;
}

const InviteButton: React.FC<InviteButtonProps> = ({ label, icon, ...otherProps }) => (
  // eslint-disable-next-line
  <button type="button" css={s.button} {...otherProps}>
    <img src={icon} alt="icon" css={s.icon} />
    <span>{label}</span>
  </button>
);

const s = {
  button: (theme: Theme): SerializedStyles => css`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px 10px;
    border: 0;
    outline: none;
    background: none;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;
    span {
      ${theme.typography.button};
      color: ${theme.palette.gray[600]};
    }
  `,
  icon: css`
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 10px;
  `,
};

export default InviteButton;
