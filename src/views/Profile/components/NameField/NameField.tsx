import { css, SerializedStyles } from '@emotion/core';

import Theme from '../../../../models/Theme';

interface Props {
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const NameField: React.FC<Props> = ({ value, onChange, ...otherProps }) => (
  <div css={s.wrapper} {...otherProps}>
    <label css={s.label} htmlFor="name">
      별명
    </label>
    <input css={s.input} id="name" type="text" value={value} onChange={onChange} />
  </div>
);

const s = {
  wrapper: css`
    display: flex;
    flex-direction: column;
  `,
  label: (theme: Theme): SerializedStyles => css`
    color: ${theme.palette.main[400]};
    font-size: 0.75rem;
    line-height: 1.33;
  `,
  input: (theme: Theme): SerializedStyles => css`
    min-height: 40px;
    border-bottom: 2px solid ${theme.palette.main[400]};
    color: ${theme.palette.gray[900]};
    font-size: 14px;
    line-height: 1.57;
  `,
};

export default NameField;
