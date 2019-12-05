import { css, SerializedStyles } from '@emotion/core';
import { useHistory } from 'react-router-dom';

import Theme from '../../models/Theme';
import { Button, Header, Layout } from '../components';

const Invitation: React.FC = () => {
  const history = useHistory();

  const handleClick = (): void => {
    history.goBack();
  };

  return (
    <>
      <Header>
        <Button type="button" onClick={handleClick}>
          이전
        </Button>
      </Header>
      <Layout>
        <h2 css={s.title}>초대하기</h2>
        <p css={s.description}>
          나와 함께 약속을 지켜나갈 연인을 <br />
          초대해주세요.
        </p>
      </Layout>
    </>
  );
};

const s = {
  title: (theme: Theme): SerializedStyles => css`
    ${theme.typography.title};
    margin: 10px;
  `,
  description: (theme: Theme): SerializedStyles => css`
    ${theme.typography.description};
    color: ${theme.palette.gray[500]};
    margin-left: 10px;
  `,
};

export default Invitation;
