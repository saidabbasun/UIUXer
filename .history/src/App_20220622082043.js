
import { Container } from 'react-bootstrap';
import './Stayls/'

import Header from './Components/Header';
import Home from './Components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
   <Container fluid  style={{width:'80vw'}}  >
    <Header/>
    <Home/>
   </Container>
  );
}

export default App;
