import { css } from '@emotion/core';
import _ from 'lodash';

import Theme from '../../../models/Theme';

interface DotsIndicatorProps {
  totalPages: number;
  currentPage: number;
}

const DotsIndicator: React.FC<DotsIndicatorProps> = ({ totalPages, currentPage, ...otherProps }) => (
  <div css={s.wrapper} {...otherProps}>
    {_.range(1, totalPages + 1).map((item, index) => (
      <span
        key={item}
        css={(
          theme: Theme,
        ): {
          width: string;
          height: string;
          borderRadius: string;
          margin: string;
          backgroundColor: string;
        } => ({
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          margin: '10px',
          backgroundColor: currentPage === index + 1 ? theme.palette.main[400] : theme.palette.gray[300],
        })}
      />
    ))}
  </div>
);

const s = {
  wrapper: css`
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `,
};

export default DotsIndicator;
