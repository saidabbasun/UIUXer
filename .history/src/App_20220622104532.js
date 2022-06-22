
import { Container } from 'react-bootstrap';
import './Stayls/globl.scss'

import Header from './Components/Home/Header';
import Home from './Components/Home/Home';
import PagesHome from './Components/Home/homeSection';
import Pagesstudies from './Components/Home/studiesSection';
import PagesSupportive from './Components/Home/studiesSection';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
   <Container fluid  style={{width:'80vw'}}  >
    <Header/>
    <Home/>
    <PagesHome/>  
    <PagesSupportive/>
   </Container>
  );
}

export default App;