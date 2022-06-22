
import { Container } from 'react-bootstrap';
import './Stayls/globl.scss'

import Header from './Components/Home/Header';
import Home from './Components/Home/Home';
import PagesHome from './Components/Home/homeSection';
import PagesStudies from './Components/Home/studiesSection';
import PagesSupportive from './Components/Home/supportiveSection';
import PagesUtility from './Components/Home/utilitySection';
import Start from './Components/Home/'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
   <Container fluid  style={{width:'80vw'}}  >
    <Header/>
    <Home/>
    <PagesHome/>  
    <PagesStudies/>
    <PagesSupportive/>
    <PagesUtility/>
    <Start/>
   </Container>
  );
}

export default App;
