import { css } from '@emotion/core';

const Layout: React.FC = (props) => <div css={s.wrapper} {...props} />;

const s = {
  wrapper: css`
    width: 100%;
    height: calc(100vh - 100px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
};

export default Layout;
