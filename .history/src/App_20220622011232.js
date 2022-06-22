
import { Container } from 'react-bootstrap';


import Header from './Components/Header';
import Home from './Components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
   <Container  style={{width:'85vw'}}  >
    <Header/>
    <Home/>
   </Container>
  );
}

export default App;