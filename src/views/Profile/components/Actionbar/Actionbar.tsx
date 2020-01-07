import { css, SerializedStyles } from '@emotion/core';
import { useHistory } from 'react-router-dom';

import Theme from '../../../../models/Theme';
import { Button } from '../../../components';

const Actionbar: React.FC = (props) => {
  const history = useHistory();

  const handlePrevClick = (): void => {
    history.goBack();
  };

  const handleNextClick = (): void => {
    history.push('/invitation');
  };

  return (
    <div css={s.wrapper} {...props}>
      <Button type="button" onClick={handlePrevClick}>
        이전
      </Button>
      <Button type="button" onClick={handleNextClick}>
        다음
      </Button>
    </div>
  );
};

const s = {
  wrapper: (theme: Theme): SerializedStyles => css`
    display: flex;
    justify-content: space-between;
    width: 100%;
    min-height: 50px;
    border-bottom: 1px solid ${theme.palette.gray[200]};
  `,
};

export default Actionbar;
