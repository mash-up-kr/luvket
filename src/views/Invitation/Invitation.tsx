import { css, SerializedStyles } from '@emotion/core';
import { Fragment } from 'react';
import { useHistory } from 'react-router-dom';

import Theme from '../../models/Theme';
import { kakaoIcon, linkIcon } from '../assets';
import { Button, DotsIndicator, Header, Layout } from '../components';
import { InviteButton } from './components';

const Invitation: React.FC = () => {
  const history = useHistory();

  const handlePrevClick = (): void => {
    history.goBack();
  };

  const handleSkipClick = (): void => {
    history.push('/');
  };

  const handleKakaoClick = (): void => {};

  const handleLinkClick = (): void => {};

  return (
    <Fragment>
      <Header>
        <Button type="button" onClick={handlePrevClick}>
          이전
        </Button>
      </Header>
      <Layout>
        <h2 css={s.title}>초대하기</h2>
        <p css={s.description}>
          나와 함께 약속을 지켜나갈 연인을 <br />
          초대해주세요.
        </p>
        <div css={s.buttonWrapper}>
          <InviteButton icon={kakaoIcon} label="카카오톡으로 초대하기" onClick={handleKakaoClick} css={s.kakaoButton} />
          <InviteButton icon={linkIcon} label="링크 복사하기" onClick={handleLinkClick} css={s.linkButton} />
          <Button onClick={handleSkipClick} css={s.textButton}>
            나중에 하기
          </Button>
        </div>
        <DotsIndicator totalPages={2} currentPage={2} />
      </Layout>
    </Fragment>
  );
};

const s = {
  title: (theme: Theme): SerializedStyles => css`
    ${theme.typography.title};
    padding: 20px 0 10px 10px;
  `,
  description: (theme: Theme): SerializedStyles => css`
    ${theme.typography.description};
    color: ${theme.palette.gray[500]};
    margin-left: 10px;
  `,
  buttonWrapper: css`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: auto;
    padding-bottom: 50px;
  `,
  kakaoButton: css`
    margin-bottom: 10px;
  `,
  linkButton: css`
    margin-bottom: 20px;
  `,
  textButton: (theme: Theme): SerializedStyles => css`
    color: ${theme.palette.gray[500]};
  `,
};

export default Invitation;
