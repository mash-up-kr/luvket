import { css, SerializedStyles } from '@emotion/core';

import Theme from '../../../models/Theme';

const Header: React.FC = (props) => <header css={s.wrapper} {...props} />;

const s = {
  wrapper: (theme: Theme): SerializedStyles => css`
    width: 100%;
    height: 50px;
    padding: 10px 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${theme.palette.gray[200]};
  `,
};

export default Header;
