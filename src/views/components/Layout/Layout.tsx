import { css } from '@emotion/core';

const Layout: React.FC = (props) => <div css={s.wrapper} {...props} />;

const s = {
  wrapper: css`
    width: 100%;
    padding: 10px;
  `,
};

export default Layout;
