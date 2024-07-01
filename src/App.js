import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container } from 'react-bootstrap';
import MyRouter from './pages/MyRouter';


function App() {
  return (
    <div className="App">
      <Container>
      <MyRouter />
      </Container>
     
    </div>
  );
}

export default App;
