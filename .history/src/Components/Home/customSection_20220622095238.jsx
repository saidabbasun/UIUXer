import React from 'react'
import Row from 'react-bootstrap/Row';
import Card from '../Home/customCard'
import '../../Stayls/Home/customSection.scss';
import Col from 'react-bootstrap/Col';
const customSection = () => {
  return (
    <div className='customSection'>
        <div className="textWrap">

       
   <h2 className='title'>Professional Home Pages</h2>
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

export default customSection