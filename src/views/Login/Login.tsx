import { css, SerializedStyles } from '@emotion/core';
import { Fragment } from 'react';

import Theme from '../../models/Theme';
import { facebookLoginIcon, kakaoLoginIcon, logo } from '../assets';
import { LoginButton } from './components';

const Login: React.FC = () => (
  <Fragment>
    <div css={s.logoWrapper}>
      <h1 aria-describedby="subtitle" css={s.title}>
        luvket
      </h1>
      <p id="subtitle" css={s.description}>
        너와 나만의 약속
      </p>
    </div>
    <div css={s.buttonWrapper}>
      <LoginButton icon={facebookLoginIcon} css={s.facebookButton}>
        <span>페이스북으로 로그인</span>
      </LoginButton>
      <LoginButton icon={kakaoLoginIcon} css={s.kakaoButton}>
        <span>카카오톡으로 로그인</span>
      </LoginButton>
    </div>
  </Fragment>
);

const s = {
  logoWrapper: css`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: fit-content;
    min-height: calc(100vh - 140px);
    align-items: center;
    justify-content: center;
  `,
  buttonWrapper: css`
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding: 0 10px;
  `,
  title: css`
    background: url(${logo}) no-repeat;
    background-size: contain;
    width: 150px;
    height: 75px;
    text-indent: -9999px;
  `,
  description: (theme: Theme): SerializedStyles => css`
    ${theme.typography.description};
    color: ${theme.palette.gray[900]};
  `,
  facebookButton: (theme: Theme): SerializedStyles => css`
    background: #3b5998;
    color: ${theme.palette.gray[100]};
    flex: 1;
  `,
  kakaoButton: (theme: Theme): SerializedStyles => css`
    background: #ffe812;
    color: ${theme.palette.gray[900]};
    flex: 1;
  `,
};

export default Login;
