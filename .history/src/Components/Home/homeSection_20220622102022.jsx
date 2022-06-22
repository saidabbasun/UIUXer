import React from 'react'
import Row from 'react-bootstrap/Row';
import Card from './customCard'
import '../../Stayls/Home/customSection.scss';
import Col from 'react-bootstrap/Col';
import Img1 from '../../assets/images/IMAGE-1.png'
import Img2 from '../../assets/images/IMAGE-2.png'
const  homePages = () => {
  return (
    <div className='customSection'>
        <div className="textWrap">

       
   <h2 className='title'>Professional Home Pages</h2>
   <p className='text'>Attractive and stylish home layouts bring your portfolio website to the next level.</p>
    </div>
    <Row>
    <Col>
        <Card img={Img1} title=''/>
        </Col>
        <Col>
        <Card img={Img2}/>
        </Col>
  
   
  </Row>
   
    </div>
  )
}

export default homePages