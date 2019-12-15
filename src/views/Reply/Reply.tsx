import { css, SerializedStyles } from '@emotion/core';
import { Fragment } from 'react';

import Theme from '../../models/Theme';
import { Button, Header } from '../components';
import { Layout } from './components';

const Reply: React.FC = () => {
  const handleCloseClick = (): void => {};

  const handleAcceptClick = (): void => {};

  return (
    <Fragment>
      <Header>
        <Button type="button" onClick={handleCloseClick}>
          닫기
        </Button>
      </Header>
      <Layout>
        <div css={s.profileWrapper}>
          <img css={s.profile} alt="profile" />
        </div>
        <p css={s.description}>
          <strong>러키키키킷</strong> 님께서
          <br />
          초대를 보냈습니다.
        </p>
      </Layout>
      <Button type="button" onClick={handleAcceptClick} css={s.fullWidthButton}>
        수락
      </Button>
    </Fragment>
  );
};

const s = {
  profileWrapper: (theme: Theme): SerializedStyles => css`
    width: 80px;
    height: 80px;
    border: 1px solid ${theme.palette.main[400]};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  `,
  profile: css`
    width: 76px;
    height: 76px;
    border-radius: 50%;
    background-color: #ededed;
  `,
  description: (theme: Theme): SerializedStyles => css`
    ${theme.typography.description};
    color: ${theme.palette.gray[900]};
    text-align: center;
    strong {
      font-weight: 900;
      font-size: 16px;
    }
  `,
  fullWidthButton: (theme: Theme): SerializedStyles => css`
    ${theme.typography.button};
    background-color: ${theme.palette.main[400]};
    color: ${theme.palette.gray[100]};
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 1rem 0;
  `,
};

export default Reply;
