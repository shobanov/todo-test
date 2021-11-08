import { Container } from '@material-ui/core';
import Todolist from './components/Todolist/Todolist';

const App: React.FC = () => {
  return (
    <div>
      <Container fixed>
        <Todolist />
      </Container>
    </div>
  );
};

export default App;
