import { Container } from '@material-ui/core';
import Todolist from './components/Todolist/Todolist';

const App: React.FC = () => {
  return (
    <>
      <Container fixed>
        <Todolist />
      </Container>
    </>
  );
};

export default App;
