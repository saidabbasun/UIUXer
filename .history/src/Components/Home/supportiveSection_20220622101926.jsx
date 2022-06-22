import React from 'react'
import '../../Stayls/Home/supportiveSection.scss'
import Row from 'react-bootstrap/Row';
import Card from './customCard'
import Col from 'react-bootstrap/Col';
import Img3 from '../../assets/images/IMAGE-3.png'
import Img4 from '../../assets/images/IMAGE-4.png'
const supportiveSection = () => {
  return (
    <div className='supportiveSection customSection'>
   
        <div className="textWrap">

       
   <h2 className='title'>Stunning Case Studies</h2>
   <p className='text'>Create an optimal visual experience for your users with these inspiring layouts.</p>
    </div>
    <Row>
        <Col>
        <Card img={Img3} title=''/>
        </Col>
        <Col>
        <Card img={Img4}/>
        </Col>
  
   
  </Row>
   
    </div>
  )
  
}

export default supportiveSection