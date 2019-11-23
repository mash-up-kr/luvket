/** @jsx jsx */
import { css, jsx } from '@emotion/core';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  theme: 'primary' | 'secondary' | 'tertiary';
  size: 'small' | 'medium' | 'big';
  disabled?: boolean;
  width?: string | number;
};

const Button = ({ children, theme, size, disabled, width, onClick }: ButtonProps) => (
  <button type="button" css={[style, themes[theme], sizes[size], { width }]} disabled={disabled} onClick={onClick}>
    {children}
  </button>
);

Button.defaultProps = {
  theme: 'primary',
  size: 'medium',
};

const style = css`
  outline: none;
  border: none;
  box-sizing: border-box;
  height: 2rem;
  font-size: 0.875rem;
  padding: 0 1rem;
  border-radius: 0.25rem;
  line-height: 1;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  &:focus {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  }
  &:disabled {
    cursor: not-allowed;
  }
`;

const themes = {
  primary: css`
    background: #20c997;
    color: white;
    &:disabled {
      background: #aed9cc;
    }
    &:hover:enabled {
      background: #38d9a9;
    }
    &:active:enabled {
      background: #12b886;
    }
  `,
  secondary: css`
    background: #e9ecef;
    color: #343a40;
    &:disabled {
      color: #c6d3e1;
    }
    &:hover:enabled {
      background: #f1f3f5;
    }
    &:active:enabled {
      background: #dee2e6;
    }
  `,
  tertiary: css`
    background: none;
    color: #20c997;
    &:disabled {
      color: #bcd9d0;
    }
    &:hover:enabled {
      background: #e6fcf5;
    }
    &:active:enabled {
      background: #c3fae8;
    }
  `,
};

const sizes = {
  small: css`
    height: 1.75rem;
    font-size: 0.75rem;
    padding: 0 0.875rem;
  `,
  medium: css`
    height: 2.5rem;
    font-size: 1rem;
    padding: 0 1rem;
  `,
  big: css`
    height: 3rem;
    font-size: 1.125rem;
    padding: 0 1.5rem;
  `,
};

export default Button;
