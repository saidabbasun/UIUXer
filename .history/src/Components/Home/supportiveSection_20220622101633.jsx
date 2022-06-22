import React from 'react'
import '../../Stayls/Home/supportiveSection.scss'
import Row from 'react-bootstrap/Row';
import Card from './customCard'
import Col from 'react-bootstrap/Col';
import Img3 fr
const supportiveSection = () => {
  return (
    <div className='supportiveSection customSection'>
   
        <div className="textWrap">

       
   <h2 className='title'>Stunning Case Studies</h2>
   <p className='text'>Create an optimal visual experience for your users with these inspiring layouts.</p>
    </div>
    <Row>
        <Col>
        <Card/>
        </Col>
        <Col>
        <Card/>
        </Col>
  
   
  </Row>
   
    </div>
  )
  
}

export default supportiveSection