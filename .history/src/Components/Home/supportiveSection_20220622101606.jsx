import React from 'react'
import '../../Stayls/Home/supportiveSection.scss'
import Row from 'react-bootstrap/Row';
import Card from './customCard'
import Col from 'react-bootstrap/Col';
const supportiveSection = () => {
  return (
    <div className='supportiveSection customSection'>
   
        <div className="textWrap">

       
   <h2 className='title'>Stunning Case Studies</h2>
   <p className='text'>Attractive and stylish home layouts bring your portfolio website to the next level.</p>
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