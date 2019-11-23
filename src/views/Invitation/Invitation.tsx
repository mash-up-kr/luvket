import { useHistory } from 'react-router-dom';

import { Button, Header } from '../components';

const Invitation: React.FC = () => {
  const history = useHistory();

  const handleClick = (): void => {
    history.goBack();
  };

  return (
    <Header>
      <Button type="button" onClick={handleClick}>
        이전
      </Button>
    </Header>
  );
};

export default Invitation;
