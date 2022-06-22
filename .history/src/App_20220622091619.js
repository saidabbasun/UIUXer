
import { Container } from 'react-bootstrap';
import './Stayls/globl.scss'

import Header from './Components/Home/Header';
import Home from './Components/Home/Home';
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
