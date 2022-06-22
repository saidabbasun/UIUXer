

import './Stayls/globl.scss'

import Header from './Components/Home/Header';
import Home from './Components/Home/Home';
import PagesHome from './Components/Home/homeSection';
import PagesStudies from './Components/Home/studiesSection';
import PagesSupportive from './Components/Home/supportiveSection';
import PagesUtility from './Components/Home/utilitySection';
import Start from './Components/Home/getStart.jsx'
import Footer from './Components/Home/footer'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
   <div  className='Wrap overflow-hidden'  >
    <Header/>
    <Home/>
    <PagesHome/>  
    <PagesStudies/>
    <PagesSupportive/>
    <PagesUtility/>
    <Start/>
    <Footer/>
   </div>
  );
}

export default App;
