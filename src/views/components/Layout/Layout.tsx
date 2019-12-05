import { css } from '@emotion/core';

const Layout: React.FC = (props) => <div css={s.wrapper} {...props} />;

const s = {
  wrapper: css`
    width: 100%;
    height: fit-content;
    min-height: calc(100vh - 50px);
    position: relative;
    padding: 0 10px;
    display: flex;
    flex-direction: column;
  `,
};

export default Layout;
