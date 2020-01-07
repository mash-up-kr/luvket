import { css, SerializedStyles } from '@emotion/core';
import { useCallback, useEffect, useState } from 'react';

import Theme from '../../models/Theme';
import { DotsIndicator } from '../components';
import { Actionbar, ImageField, NameField } from './components';

const Profile: React.FC = () => {
  const [url, setUrl] = useState<string | null>(null);
  const [value, setValue] = useState('');

  const handleFileChange = useCallback((event: React.ChangeEvent<HTMLInputElement>): void => {
    const [image] = event.target.files;

    const imageUrl = URL.createObjectURL(image);

    setUrl(imageUrl);
  }, []);
  const handleNameChange = useCallback((event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  }, []);

  useEffect(() => (url ? (): void => URL.revokeObjectURL(url) : undefined), [url]);

  return (
    <div css={s.wrapper}>
      <Actionbar />
      <main css={s.main}>
        <h2 css={s.title}>프로필 설정</h2>
        <p css={s.paragraph}>내 프로필을 확인하고 설정해보세요.</p>
        <ImageField css={s.profileField} url={url} onChange={handleFileChange} />
        <NameField value={value} onChange={handleNameChange} />
        <DotsIndicator css={s.dotsIndicator} totalPages={2} currentPage={1} />
      </main>
    </div>
  );
};

const s = {
  wrapper: css`
    display: flex;
    flex-direction: column;
    height: 100vh;
  `,
  main: css`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    padding: 20px 20px 0 20px;
  `,
  title: (theme: Theme): SerializedStyles => css`
    margin-bottom: 10px;
    color: ${theme.palette.gray[900]};
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.1;
    letter-spacing: -0.48px;
  `,
  paragraph: (theme: Theme): SerializedStyles => css`
    margin-bottom: 3rem;
    color: ${theme.palette.gray[500]};
    font-size: ${theme.typography.pxToRem(14)};
    line-height: 1.57;
  `,
  profileField: css`
    margin-bottom: 50px;
  `,
  dotsIndicator: css`
    margin-top: auto;
  `,
};

export default Profile;
